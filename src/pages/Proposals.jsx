import { useEffect, useMemo, useState } from "react";
import ParticipationDashboard from "../components/ParticipationDashboard.jsx";
import PageTransition from "../components/PageTransition.jsx";
import ProposalModal from "../components/ProposalModal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { proposalLabels, proposalsByLanguage } from "../data/proposals.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { fetchProposalVoteTotals, submitProposalVote } from "../services/proposalEngagementService.js";

const userVotesKey = "renan-public-proposal-user-votes";
const voterIdKey = "renan-public-proposal-voter-id";

const getStoredJson = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

const getVoterId = () => {
  const storedVoterId = localStorage.getItem(voterIdKey);
  if (storedVoterId) return storedVoterId;

  const voterId = crypto.randomUUID ? crypto.randomUUID() : `voter-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  localStorage.setItem(voterIdKey, voterId);
  return voterId;
};

const emptyTotals = (proposals) => proposals.reduce((totals, proposal) => ({ ...totals, [proposal.id]: { likes: 0, dislikes: 0 } }), {});

const engagementLabels = {
  pt: {
    alreadyVoted: "Você já registrou sua opinião nesta proposta.",
    unavailable: "Indisponível",
    privacyNote: "Seus dados serão utilizados apenas para retorno sobre esta sugestão.",
    suggestionSuccess: "Sugestão registrada com sucesso. Obrigado pela contribuição.",
    suggestionFallback: "Não foi possível registrar no banco agora. Abrimos seu aplicativo de e-mail como alternativa.",
    submitting: "Enviando...",
  },
  en: {
    alreadyVoted: "You have already submitted your opinion for this proposal.",
    unavailable: "Unavailable",
    privacyNote: "Your data will only be used to follow up on this suggestion.",
    suggestionSuccess: "Suggestion submitted successfully. Thank you for contributing.",
    suggestionFallback: "We could not save it to the database right now. Your email app was opened as a fallback.",
    submitting: "Sending...",
  },
};

export default function Proposals() {
  const { language, t } = useLanguage();
  const proposals = proposalsByLanguage[language];
  const labels = useMemo(() => ({ ...proposalLabels[language], ...engagementLabels[language] }), [language]);
  const [activeProposal, setActiveProposal] = useState(null);
  const [votes, setVotes] = useState(() => emptyTotals(proposals));
  const [userVotes, setUserVotes] = useState(() => getStoredJson(userVotesKey, {}));
  const [voterId, setVoterId] = useState("");
  const [engagementAvailable, setEngagementAvailable] = useState(true);
  const [voteMessage, setVoteMessage] = useState("");

  useEffect(() => {
    setVoterId(getVoterId());
  }, []);

  useEffect(() => {
    localStorage.setItem(userVotesKey, JSON.stringify(userVotes));
  }, [userVotes]);

  useEffect(() => {
    let isActive = true;

    const loadTotals = async () => {
      const result = await fetchProposalVoteTotals(proposals.map((proposal) => proposal.id));
      if (!isActive) return;
      setVotes(result.totals);
      setEngagementAvailable(result.available);
    };

    loadTotals();

    return () => {
      isActive = false;
    };
  }, [proposals]);

  const getCounts = (proposalId) => votes[proposalId] || { likes: 0, dislikes: 0 };

  const refreshTotals = async () => {
    const result = await fetchProposalVoteTotals(proposals.map((proposal) => proposal.id));
    setVotes(result.totals);
    setEngagementAvailable(result.available);
  };

  const handleVote = async (proposalId, type) => {
    if (userVotes[proposalId]) {
      setVoteMessage(labels.alreadyVoted);
      return;
    }

    const result = await submitProposalVote({ proposalId, voteType: type, voterId });

    if (result.alreadyVoted) {
      setUserVotes((currentVotes) => ({ ...currentVotes, [proposalId]: result.voteType || type }));
      setVoteMessage(labels.alreadyVoted);
      await refreshTotals();
      return;
    }

    if (result.inserted) {
      setUserVotes((currentVotes) => ({ ...currentVotes, [proposalId]: type }));
      setVoteMessage("");
      await refreshTotals();
    }
  };

  return (
    <PageTransition>
      <Seo title={`${t.nav.proposals} | Renan Gagliano`} description={t.proposals.title} />
      <section className="section-pad bg-white/[0.03]">
        <div className="container-pad">
          <SectionHeader eyebrow={t.proposals.eyebrow} title={t.proposals.title} description={t.identity.summary} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {proposals.map((proposal) => (
              <button
                key={proposal.id}
                type="button"
                onClick={() => {
                  setActiveProposal(proposal);
                  setVoteMessage("");
                }}
                className="executive-card focus-ring p-6 text-left"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-civic">{proposal.category}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-signal">{labels.ideaType}</p>
                <h2 className="mt-4 font-display text-2xl font-extrabold text-white">{proposal.title}</h2>
                <p className="mt-4 leading-7 muted">{proposal.shortSummary}</p>
                <span className="mt-6 inline-flex rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-white/74 transition hover:border-civic hover:text-civic">
                  {labels.viewFull}
                </span>
              </button>
            ))}
          </div>
          <ParticipationDashboard labels={labels} proposals={proposals} votes={votes} available={engagementAvailable} />
        </div>
      </section>
      {activeProposal && (
        <ProposalModal
          counts={getCounts(activeProposal.id)}
          labels={labels}
          onClose={() => setActiveProposal(null)}
          onVote={(type) => handleVote(activeProposal.id, type)}
          proposal={activeProposal}
          vote={userVotes[activeProposal.id]}
          voteMessage={voteMessage}
        />
      )}
    </PageTransition>
  );
}
