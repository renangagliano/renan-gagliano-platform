import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Seo title={`${t.nav.projects} | Renan Gagliano`} description={t.projects.title} />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} description={t.identity.summary} />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {t.projects.items.map((project) => (
              <Card key={project.title}>
                <div className="flex items-start justify-between gap-5">
                  <IconBadge icon={project.icon} />
                  <p className="rounded-md border border-signal/20 bg-signal/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-signal">
                    {project.category}
                  </p>
                </div>
                <h2 className="mt-6 font-display text-2xl font-extrabold text-white">{project.title}</h2>
                <p className="mt-4 leading-7 muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/10 px-3 py-1 text-xs font-bold text-white/72">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
