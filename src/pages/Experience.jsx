import Card from "../components/Card.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Seo title={`${t.nav.experience} | Renan Gagliano`} description={t.experience.title} />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader eyebrow={t.experience.eyebrow} title={t.experience.title} description={t.identity.summary} />
          <div className="mt-12 grid gap-5">
            {t.experience.items.map((item) => (
              <Card key={item.title} className="grid gap-5 md:grid-cols-[13rem_1fr] md:items-start">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-civic">{item.period}</p>
                <div>
                  <h2 className="font-display text-2xl font-extrabold text-white">{item.title}</h2>
                  <p className="mt-1 font-semibold text-signal">{item.organization}</p>
                  <p className="mt-4 leading-7 muted">{item.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-white/74">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
