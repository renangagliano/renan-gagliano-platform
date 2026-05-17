import { useEffect, useState } from "react";
import ParticipationDashboard from "../components/ParticipationDashboard.jsx";
import PageTransition from "../components/PageTransition.jsx";
import ProposalModal from "../components/ProposalModal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { proposalLabels, proposalsByLanguage } from "../data/proposals.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const votesKey = "renan-public-proposal-votes";
const userVotesKey = "renan-public-proposal-user-votes";

const getStoredJson = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

export default function Proposals() {
  const { language, t } = useLanguage();
  const proposals = proposalsByLanguage[language];
  const labels = proposalLabels[language];
  const [activeProposal, setActiveProposal] = useState(null);
  const [votes, setVotes] = useState(() => getStoredJson(votesKey, {}));
  const [userVotes, setUserVotes] = useState(() => getStoredJson(userVotesKey, {}));

  useEffect(() => {
    localStorage.setItem(votesKey, JSON.stringify(votes));
  }, [votes]);

  useEffect(() => {
    localStorage.setItem(userVotesKey, JSON.stringify(userVotes));
  }, [userVotes]);

  const getCounts = (proposalId) => votes[proposalId] || { likes: 0, dislikes: 0 };

  const handleVote = (proposalId, type) => {
    if (userVotes[proposalId]) return;

    setVotes((currentVotes) => {
      const current = currentVotes[proposalId] || { likes: 0, dislikes: 0 };
      return {
        ...currentVotes,
        [proposalId]: {
          ...current,
          [type]: current[type] + 1,
        },
      };
    });
    setUserVotes((currentVotes) => ({ ...currentVotes, [proposalId]: type }));
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
                onClick={() => setActiveProposal(proposal)}
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
          <ParticipationDashboard labels={labels} proposals={proposals} votes={votes} />
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
        />
      )}
    </PageTransition>
  );
}
