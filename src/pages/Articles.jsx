import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { articles } from "../data/site.js";

export default function Articles() {
  return (
    <PageTransition>
      <Seo title="Articles" description="Articles and institutional thinking by Renan Gagliano on technology, governance, AI, and public trust." />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Articles"
            title="Institutional thinking for the next generation of public technology."
            description="Articles are structured for thought leadership, search visibility, and credibility across governance, innovation, AI, and digital transformation."
          />
          <div className="mt-12 grid gap-5">
            {articles.map((article) => (
              <Card key={article.title} className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
                <IconBadge icon={article.icon} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">{article.date}</p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold">{article.title}</h2>
                  <p className="mt-3 leading-7 muted">{article.excerpt}</p>
                </div>
                <span className="rounded-md border border-ink/10 px-3 py-2 text-sm font-bold dark:border-white/10">Editorial</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
