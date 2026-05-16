import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import Seo from "../components/Seo.jsx";
import { articleLabels, articlesByLanguage } from "../data/articles.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ArticleDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const labels = articleLabels[language];
  const article = articlesByLanguage[language].find((item) => item.slug === slug);

  if (!article) {
    return (
      <PageTransition>
        <Seo title={`${labels.notFound} | Renan Gagliano`} description={labels.notFoundDescription} />
        <section className="section-pad">
          <div className="container-pad">
            <Card>
              <h1 className="font-display text-3xl font-extrabold text-white">{labels.notFound}</h1>
              <p className="mt-4 leading-7 muted">{labels.notFoundDescription}</p>
              <Link
                to="/articles"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/74 transition hover:border-civic hover:text-civic"
              >
                <ArrowLeft size={18} /> {labels.back}
              </Link>
            </Card>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Seo title={`${article.title} | Renan Gagliano`} description={article.summary} />
      <article className="section-pad">
        <div className="container-pad max-w-5xl">
          <Link
            to="/articles"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/74 transition hover:border-civic hover:text-civic"
          >
            <ArrowLeft size={18} /> {labels.back}
          </Link>

          <div className="mt-10 grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            <IconBadge icon={article.icon} />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">
                {article.category} · {article.year} · {article.readTime} {labels.readTime}
              </p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance text-white sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-8 muted">{article.summary}</p>
            </div>
          </div>

          <Card className="mt-10">
            <div className="space-y-6">
              {article.content.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </article>
    </PageTransition>
  );
}
