import { hasSupabaseConfig, supabase } from "../lib/supabaseClient.js";

const emptyTotals = (proposalIds) =>
  proposalIds.reduce((totals, proposalId) => ({ ...totals, [proposalId]: { likes: 0, dislikes: 0 } }), {});

const toStoredVoteType = (voteType) => (voteType === "likes" ? "like" : voteType === "dislikes" ? "dislike" : voteType);
const toCounterKey = (voteType) => (voteType === "like" ? "likes" : voteType === "dislike" ? "dislikes" : null);

// Required Supabase RLS outline:
// - Enable RLS on public.proposal_votes and public.proposal_suggestions.
// - Allow anon SELECT on proposal_votes so public counters can be read.
// - Allow anon INSERT on proposal_votes only for proposal_id, vote_type, voter_id and vote_type in ('like', 'dislike').
// - Add a unique index on proposal_votes(proposal_id, voter_id) to enforce one vote per browser/device id.
// - Allow anon INSERT on proposal_suggestions for proposal_id, name, email and suggestion; do not expose UPDATE/DELETE.
// - Never expose a service role key in Vite; this client uses only the public anon key.

export async function fetchProposalVoteTotals(proposalIds) {
  const totals = emptyTotals(proposalIds);

  if (!hasSupabaseConfig) {
    return { available: false, totals };
  }

  const { data, error } = await supabase.from("proposal_votes").select("proposal_id, vote_type").in("proposal_id", proposalIds);

  if (error) {
    console.info("Unable to load proposal vote totals from Supabase.", error.message);
    return { available: false, totals };
  }

  data.forEach((vote) => {
    const counterKey = toCounterKey(vote.vote_type);
    if (totals[vote.proposal_id] && counterKey) {
      totals[vote.proposal_id][counterKey] += 1;
    }
  });

  return { available: true, totals };
}

export async function hasVotedForProposal(proposalId, voterId) {
  if (!hasSupabaseConfig) return { available: false, hasVoted: false };

  const { data, error } = await supabase
    .from("proposal_votes")
    .select("id, vote_type")
    .eq("proposal_id", proposalId)
    .eq("voter_id", voterId)
    .maybeSingle();

  if (error) {
    console.info("Unable to verify existing proposal vote in Supabase.", error.message);
    return { available: false, hasVoted: false };
  }

  return { available: true, hasVoted: Boolean(data), voteType: data?.vote_type || null };
}

export async function submitProposalVote({ proposalId, voteType, voterId }) {
  if (!hasSupabaseConfig) return { available: false, inserted: false, alreadyVoted: false };

  const existingVote = await hasVotedForProposal(proposalId, voterId);
  if (existingVote.hasVoted) {
    return { available: true, inserted: false, alreadyVoted: true, voteType: existingVote.voteType };
  }

  const { error } = await supabase.from("proposal_votes").insert({
    proposal_id: proposalId,
    vote_type: toStoredVoteType(voteType),
    voter_id: voterId,
  });

  if (error) {
    if (error.code === "23505") {
      return { available: true, inserted: false, alreadyVoted: true };
    }

    console.info("Unable to submit proposal vote to Supabase.", error.message);
    return { available: false, inserted: false, alreadyVoted: false };
  }

  return { available: true, inserted: true, alreadyVoted: false };
}

export async function submitProposalSuggestion({ proposalId, name, email, suggestion }) {
  if (!hasSupabaseConfig) return { available: false, inserted: false };

  const { error } = await supabase.from("proposal_suggestions").insert({
    proposal_id: proposalId,
    name,
    email,
    suggestion,
  });

  if (error) {
    console.info("Unable to submit proposal suggestion to Supabase.", error.message);
    return { available: false, inserted: false };
  }

  return { available: true, inserted: true };
}
