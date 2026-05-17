import { useEffect, useMemo, useState } from "react";
import ParticipationDashboard from "../components/ParticipationDashboard.jsx";
import PageTransition from "../components/PageTransition.jsx";
import ProposalModal from "../components/ProposalModal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { proposalLabels, proposalsByLanguage } from "../data/proposals.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { getLocalVotes, getProposalTotals, voteProposal } from "../services/proposalEngagementService.js";

const emptyTotals = (proposals) => proposals.reduce((totals, proposal) => ({ ...totals, [proposal.id]: { likes: 0, dislikes: 0 } }), {});

const engagementLabels = {
  pt: {
    alreadyVoted: "Você já registrou sua opinião nesta proposta.",
    dashboardConfigurationTitle: "Painel em configuração",
    dashboardConfigurationText: "Em breve os votos públicos estarão disponíveis.",
    dashboardErrorTitle: "Painel temporariamente indisponível",
    dashboardErrorText: "Não foi possível carregar os votos públicos agora. Detalhes técnicos foram registrados no console.",
    privacyNote: "Seus dados serão utilizados apenas para retorno sobre esta sugestão.",
    suggestionSuccess: "Sugestão registrada com sucesso. Obrigado pela contribuição.",
    suggestionError: "Não foi possível registrar sua sugestão agora. Tente novamente em alguns instantes.",
    submitting: "Enviando...",
  },
  en: {
    alreadyVoted: "You have already submitted your opinion for this proposal.",
    dashboardConfigurationTitle: "Dashboard under configuration",
    dashboardConfigurationText: "Public votes will be available soon.",
    dashboardErrorTitle: "Dashboard temporarily unavailable",
    dashboardErrorText: "Public votes could not be loaded right now. Technical details were logged in the console.",
    privacyNote: "Your data will only be used to follow up on this suggestion.",
    suggestionSuccess: "Suggestion submitted successfully. Thank you for contributing.",
    suggestionError: "We could not submit your suggestion right now. Please try again in a moment.",
    submitting: "Sending...",
  },
};

export default function Proposals() {
  const { language, t } = useLanguage();
  const proposals = proposalsByLanguage[language];
  const labels = useMemo(() => ({ ...proposalLabels[language], ...engagementLabels[language] }), [language]);
  const [activeProposal, setActiveProposal] = useState(null);
  const [votes, setVotes] = useState(() => emptyTotals(proposals));
  const [userVotes, setUserVotes] = useState(() => getLocalVotes());
  const [engagementStatus, setEngagementStatus] = useState("loading");
  const [voteMessage, setVoteMessage] = useState("");

  useEffect(() => {
    let isActive = true;

    const loadTotals = async () => {
      const result = await getProposalTotals(proposals.map((proposal) => proposal.id));
      if (!isActive) return;
      setVotes(result.totals);
      setEngagementStatus(result.status);
      setUserVotes(getLocalVotes());
    };

    loadTotals();

    return () => {
      isActive = false;
    };
  }, [proposals]);

  const getCounts = (proposalId) => votes[proposalId] || { likes: 0, dislikes: 0 };

  const refreshTotals = async () => {
    const result = await getProposalTotals(proposals.map((proposal) => proposal.id));
    setVotes(result.totals);
    setEngagementStatus(result.status);
    setUserVotes(getLocalVotes());
  };

  const handleVote = async (proposalId, type) => {
    if (userVotes[proposalId]) {
      setVoteMessage(labels.alreadyVoted);
      return;
    }

    const result = await voteProposal(proposalId, type);

    if (result.status === "already-voted") {
      setUserVotes(getLocalVotes());
      setVoteMessage(labels.alreadyVoted);
      await refreshTotals();
      return;
    }

    if (result.status === "success") {
      setUserVotes(getLocalVotes());
      setVoteMessage("");
      await refreshTotals();
      return;
    }

    setEngagementStatus(result.status);
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
          <ParticipationDashboard labels={labels} proposals={proposals} votes={votes} status={engagementStatus} />
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
