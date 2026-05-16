import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { articleLabels, articlePageSize, articlesByLanguage } from "../data/articles.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { Link, useSearchParams } from "react-router-dom";

export default function Articles() {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const labels = articleLabels[language];
  const articles = articlesByLanguage[language];
  const pageCount = Math.ceil(articles.length / articlePageSize);
  const requestedPage = Number(searchParams.get("page") || "1");
  const currentPage = Math.min(Math.max(Number.isNaN(requestedPage) ? 1 : requestedPage, 1), pageCount);
  const pageStart = (currentPage - 1) * articlePageSize;
  const visibleArticles = articles.slice(pageStart, pageStart + articlePageSize);

  const goToPage = (page) => {
    setSearchParams(page === 1 ? {} : { page: String(page) });
  };

  return (
    <PageTransition>
      <Seo title={`${t.nav.articles} | Renan Gagliano`} description={t.articles.title} />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader eyebrow={t.articles.eyebrow} title={t.articles.title} description={t.meta.description} />
          <div className="mt-12 grid gap-5">
            {visibleArticles.map((article) => (
              <Card key={article.title} className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
                <IconBadge icon={article.icon} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">
                    {article.year} · {article.category}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold text-white">{article.title}</h2>
                  <p className="mt-3 leading-7 muted">{article.summary}</p>
                </div>
                <Link
                  to={`/articles/${article.slug}`}
                  className="focus-ring inline-flex justify-center rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-white/74 transition hover:border-civic hover:text-civic"
                >
                  {t.common.read}
                </Link>
              </Card>
            ))}
          </div>

          <nav className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" aria-label={t.nav.articles}>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">
              {labels.page} {currentPage} {labels.of} {pageCount}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="focus-ring rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-white/74 transition hover:border-civic hover:text-civic disabled:pointer-events-none disabled:opacity-40"
              >
                {labels.previous}
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`focus-ring rounded-md border px-3 py-2 text-sm font-bold transition ${
                    page === currentPage
                      ? "border-civic bg-civic text-graphite"
                      : "border-white/10 text-white/74 hover:border-civic hover:text-civic"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="focus-ring rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-white/74 transition hover:border-civic hover:text-civic disabled:pointer-events-none disabled:opacity-40"
              >
                {labels.next}
              </button>
            </div>
          </nav>
        </div>
      </section>
    </PageTransition>
  );
}
