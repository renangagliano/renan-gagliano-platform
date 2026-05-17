import { useState } from "react";
import SuggestionForm from "./SuggestionForm.jsx";
import VotingButtons from "./VotingButtons.jsx";

function DetailList({ items }) {
  return (
    <ul className="mt-3 grid gap-2">
      {items.map((item) => (
        <li key={item} className="leading-7 muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }) {
  return (
    <section className="border-t border-white/10 pt-6">
      <h3 className="font-display text-xl font-extrabold text-white">{title}</h3>
      {children}
    </section>
  );
}

export default function ProposalModal({ counts, labels, onClose, onVote, proposal, vote, voteMessage }) {
  const [suggestionOpen, setSuggestionOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-[60] overflow-y-auto bg-graphite/82 px-4 py-8 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-graphite p-6 shadow-executive">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-civic">{proposal.category}</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
                {proposal.fullTitle}
              </h2>
              <p className="mt-4 leading-7 muted">{proposal.shortSummary}</p>
            </div>
            <button type="button" onClick={onClose} className="focus-ring rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/74">
              {labels.close}
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <VotingButtons counts={counts} labels={labels} onVote={onVote} vote={vote} voteMessage={voteMessage} />
            <button
              type="button"
              onClick={() => setSuggestionOpen(true)}
              className="focus-ring rounded-md bg-civic px-4 py-3 text-sm font-bold text-graphite"
            >
              {labels.sendSuggestion}
            </button>
          </div>

          <div className="mt-8 grid gap-7">
            <Section title={labels.executiveSummary}>
              <p className="mt-3 leading-7 muted">{proposal.executiveSummary}</p>
            </Section>
            <Section title={labels.problemStatement}>
              <p className="mt-3 leading-7 muted">{proposal.problemStatement}</p>
            </Section>
            <Section title={labels.proposedSolution}>
              <DetailList items={proposal.proposedSolution} />
            </Section>
            <Section title={labels.roadmap}>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {proposal.roadmap.map((phase) => (
                  <div key={phase.phase} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <h4 className="font-display text-lg font-extrabold text-white">{phase.phase}</h4>
                    <DetailList items={phase.items} />
                  </div>
                ))}
              </div>
            </Section>
            <Section title={labels.expectedBenefits}>
              <DetailList items={proposal.expectedBenefits} />
            </Section>
            <Section title={labels.governanceModel}>
              <DetailList items={proposal.governanceModel} />
            </Section>
            <Section title={labels.transparencyIndicators}>
              <DetailList items={proposal.transparencyIndicators} />
            </Section>
            <Section title={labels.citizenParticipation}>
              <DetailList items={proposal.citizenParticipation} />
            </Section>
            <Section title={labels.kpis}>
              <DetailList items={proposal.kpis} />
            </Section>
            <Section title={labels.conclusion}>
              <p className="mt-3 leading-7 muted">{proposal.conclusion}</p>
            </Section>
          </div>
        </div>
      </div>
      {suggestionOpen && <SuggestionForm labels={labels} proposal={proposal} onClose={() => setSuggestionOpen(false)} />}
    </>
  );
}
