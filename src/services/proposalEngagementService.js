import { hasSupabaseConfig, supabase } from "../lib/supabase.js";

const votesTable = "public_proposal_votes";
const suggestionsTable = "public_proposal_suggestions";
const voterIdKey = "renan-public-proposal-voter-id";
const localVotesKey = "renan-public-proposal-user-votes";

const emptyTotals = (proposalIds) =>
  proposalIds.reduce((totals, proposalId) => ({ ...totals, [proposalId]: { likes: 0, dislikes: 0 } }), {});

const toCounterKey = (voteType) => (voteType === "like" ? "likes" : voteType === "dislike" ? "dislikes" : null);
const getProposalIds = (proposals) => proposals.map((proposal) => proposal.id);

const getStoredJson = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

const setStoredJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const formatSupabaseError = (error) => ({
  status: error?.status || null,
  message: error?.message || "Unknown Supabase error",
  code: error?.code || null,
});

const hasReadySupabaseClient = () => Boolean(hasSupabaseConfig && supabase);

async function testVotesTableSelect() {
  if (!hasReadySupabaseClient()) {
    return { error: { message: "Supabase client is not configured." } };
  }

  const { error } = await supabase.from(votesTable).select("id").limit(1);

  if (error) {
    console.info("Supabase public proposal votes select failed.", formatSupabaseError(error));
  }

  return { error };
}

export function getVoterId() {
  const storedVoterId = localStorage.getItem(voterIdKey);
  if (storedVoterId) return storedVoterId;

  const voterId = crypto.randomUUID ? crypto.randomUUID() : `voter-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  localStorage.setItem(voterIdKey, voterId);
  return voterId;
}

export function hasLocalVote(proposalId) {
  return Boolean(getStoredJson(localVotesKey, {})[proposalId]);
}

function setLocalVote(proposalId, voteType) {
  const votes = getStoredJson(localVotesKey, {});
  setStoredJson(localVotesKey, { ...votes, [proposalId]: voteType });
}

export function getLocalVotes() {
  return getStoredJson(localVotesKey, {});
}

export async function getProposalTotals(proposalIds) {
  const totals = emptyTotals(proposalIds);

  if (!hasReadySupabaseClient()) {
    console.info("Supabase public proposal totals skipped because client configuration is unavailable.");
    return { status: "configuration", totals };
  }

  const diagnostic = await testVotesTableSelect();
  if (diagnostic.error) {
    return { status: "error", totals, error: formatSupabaseError(diagnostic.error) };
  }

  const { data, error } = await supabase.from(votesTable).select("proposal_id, vote_type").in("proposal_id", proposalIds);

  if (error) {
    console.info("Unable to load public proposal vote totals from Supabase.", formatSupabaseError(error));
    return { status: "error", totals, error: formatSupabaseError(error) };
  }

  data.forEach((vote) => {
    const counterKey = toCounterKey(vote.vote_type);
    if (totals[vote.proposal_id] && counterKey) {
      totals[vote.proposal_id][counterKey] += 1;
    }
  });

  return { status: "ready", totals };
}

export async function getDashboardSummary(proposals) {
  const result = await getProposalTotals(getProposalIds(proposals));
  const totals = result.totals;
  const aggregate = proposals.reduce(
    (current, proposal) => {
      const counts = totals[proposal.id] || { likes: 0, dislikes: 0 };
      return { likes: current.likes + counts.likes, dislikes: current.dislikes + counts.dislikes };
    },
    { likes: 0, dislikes: 0 },
  );

  const mostSupported = proposals.reduce((selected, proposal) => {
    const selectedLikes = totals[selected.id]?.likes || 0;
    const proposalLikes = totals[proposal.id]?.likes || 0;
    return proposalLikes > selectedLikes ? proposal : selected;
  }, proposals[0]);

  return {
    ...result,
    totalLikes: aggregate.likes,
    totalDislikes: aggregate.dislikes,
    mostSupported: aggregate.likes + aggregate.dislikes > 0 ? mostSupported : null,
  };
}

export async function voteProposal(proposalId, voteType) {
  if (hasLocalVote(proposalId)) {
    return { status: "already-voted" };
  }

  if (!hasReadySupabaseClient()) {
    return { status: "configuration" };
  }

  const diagnostic = await testVotesTableSelect();
  if (diagnostic.error) {
    return { status: "error", error: formatSupabaseError(diagnostic.error) };
  }

  const voterId = getVoterId();
  const { data: existingVote, error: lookupError } = await supabase
    .from(votesTable)
    .select("id, vote_type")
    .eq("proposal_id", proposalId)
    .eq("voter_id", voterId)
    .maybeSingle();

  if (lookupError) {
    console.info("Unable to verify existing public proposal vote in Supabase.", formatSupabaseError(lookupError));
    return { status: "error", error: formatSupabaseError(lookupError) };
  }

  if (existingVote) {
    setLocalVote(proposalId, existingVote.vote_type);
    return { status: "already-voted", voteType: existingVote.vote_type };
  }

  const { error } = await supabase.from(votesTable).insert({
    proposal_id: proposalId,
    vote_type: voteType,
    voter_id: voterId,
  });

  if (error) {
    if (error.code === "23505") {
      setLocalVote(proposalId, voteType);
      return { status: "already-voted", voteType };
    }

    console.info("Unable to submit public proposal vote to Supabase.", formatSupabaseError(error));
    return { status: "error", error: formatSupabaseError(error) };
  }

  setLocalVote(proposalId, voteType);
  return { status: "success", voteType };
}

export async function submitSuggestion(proposalId, formData) {
  if (!hasReadySupabaseClient()) {
    return { status: "configuration" };
  }

  const { error } = await supabase.from(suggestionsTable).insert({
    proposal_id: proposalId,
    name: formData.name,
    email: formData.email,
    suggestion: formData.suggestion,
  });

  if (error) {
    console.info("Unable to submit public proposal suggestion to Supabase.", formatSupabaseError(error));
    return { status: "error", error: formatSupabaseError(error) };
  }

  return { status: "success" };
}

export const fetchProposalVoteTotals = getProposalTotals;
export const submitProposalVote = ({ proposalId, voteType }) => voteProposal(proposalId, voteType);
export const submitProposalSuggestion = ({ proposalId, ...formData }) => submitSuggestion(proposalId, formData);
