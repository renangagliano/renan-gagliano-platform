import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Articles() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Seo title={`${t.nav.articles} | Renan Gagliano`} description={t.articles.title} />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader eyebrow={t.articles.eyebrow} title={t.articles.title} description={t.meta.description} />
          <div className="mt-12 grid gap-5">
            {t.articles.items.map((article) => (
              <Card key={article.title} className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
                <IconBadge icon={article.icon} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">{article.date}</p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold text-white">{article.title}</h2>
                  <p className="mt-3 leading-7 muted">{article.excerpt}</p>
                </div>
                <span className="rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-white/74">
                  {t.common.read}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
