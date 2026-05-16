import Card from "../components/Card.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Proposals() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Seo title={`${t.nav.proposals} | Renan Gagliano`} description={t.proposals.title} />
      <section className="section-pad bg-white/[0.03]">
        <div className="container-pad">
          <SectionHeader eyebrow={t.proposals.eyebrow} title={t.proposals.title} description={t.identity.summary} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.proposals.items.map((proposal) => (
              <Card key={proposal.title}>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-civic">{proposal.status}</p>
                <h2 className="mt-4 font-display text-2xl font-extrabold text-white">{proposal.title}</h2>
                <p className="mt-4 leading-7 muted">{proposal.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
