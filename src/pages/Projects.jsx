import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { projects } from "../data/site.js";

export default function Projects() {
  return (
    <PageTransition>
      <Seo title="Projects" description="Strategic technology and governance projects by Renan Gagliano." />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Projects"
            title="Modern project architecture for technology, governance, and public value."
            description="Each project area is designed as a portfolio-ready module with clear category framing, delivery logic, and executive communication."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title}>
                <IconBadge icon={project.icon} />
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-signal">{project.category}</p>
                <h2 className="mt-3 font-display text-2xl font-extrabold">{project.title}</h2>
                <p className="mt-4 leading-7 muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-ink/10 px-3 py-1 text-xs font-bold dark:border-white/10">
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
