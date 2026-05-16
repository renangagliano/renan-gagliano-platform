import Card from "../components/Card.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { proposals } from "../data/site.js";

export default function Proposals() {
  return (
    <PageTransition>
      <Seo title="Public Proposals" description="Public proposals for digital governance, innovation labs, AI procurement, and civic technology." />
      <section className="section-pad bg-ink text-white dark:bg-white/[0.03]">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Public Proposals"
            title="Policy-ready ideas for transparent, responsible, and modern institutions."
            description="A dedicated space for civic technology proposals, governance frameworks, and modernization concepts that can evolve into public programs."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {proposals.map((proposal) => (
              <Card key={proposal.title} className="border-white/10 bg-white/[0.06] text-white">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-civic">{proposal.status}</p>
                <h2 className="mt-4 font-display text-2xl font-extrabold">{proposal.title}</h2>
                <p className="mt-4 leading-7 text-white/70">{proposal.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
