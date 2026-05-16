import ProfilePortrait from "../components/ProfilePortrait.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function About() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Seo title={`${t.nav.about} | Renan Gagliano`} description={t.about.title} />
      <section className="section-pad bg-grid-dark bg-[length:48px_48px]">
        <div className="container-pad">
          <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.body[0]} />
          <div className="mt-14 grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
            <ProfilePortrait compact />
            <div>
              <div className="executive-card p-7">
                {t.about.body.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 muted first:mt-0 mt-5">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <h2 className="font-display text-2xl font-extrabold text-white">{t.about.focusTitle}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {t.about.focus.map((item) => (
                    <div key={item} className="rounded-md border border-white/10 bg-graphite/70 px-4 py-3 text-sm font-bold text-white/82">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
