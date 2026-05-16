import SectionHeader from "../components/SectionHeader.jsx";
import PageTransition from "../components/PageTransition.jsx";
import Seo from "../components/Seo.jsx";
import { pillars } from "../data/site.js";

export default function About() {
  return (
    <PageTransition>
      <Seo title="About" description="About Renan Gagliano and his institutional focus on technology, governance, and public innovation." />
      <section className="section-pad bg-grid-light bg-[length:48px_48px] dark:bg-grid-dark">
        <div className="container-pad">
          <SectionHeader
            eyebrow="About"
            title="An executive profile for technology, governance, and public innovation."
            description="Renan Gagliano's institutional positioning connects strategic technology work with practical governance, citizen-centered modernization, and responsible digital transformation."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="executive-card p-7">
              <p className="text-lg leading-8 muted">
                This platform frames a public identity around disciplined execution: translating complex technology agendas into proposals, portfolios, decisions, and communication that institutions can trust.
              </p>
              <p className="mt-5 text-lg leading-8 muted">
                The visual system balances executive restraint with innovation signals, giving space to long-form ideas, public proposals, and project evidence without losing institutional polish.
              </p>
            </div>
            <div className="grid gap-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-lg border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                  <h2 className="font-display text-xl font-extrabold">{pillar.title}</h2>
                  <p className="mt-2 leading-7 muted">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
