import Card from "../components/Card.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { experience } from "../data/site.js";

export default function Experience() {
  return (
    <PageTransition>
      <Seo title="Experience" description="Professional experience and strategic domains for Renan Gagliano." />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Experience"
            title="A trajectory organized around strategy, delivery, and institutional trust."
            description="Experience is presented as a living executive narrative rather than a static resume, emphasizing the domains that shape modern public technology leadership."
          />
          <div className="mt-12 grid gap-5">
            {experience.map((item) => (
              <Card key={item.title} className="grid gap-4 md:grid-cols-[12rem_1fr] md:items-start">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-civic">{item.period}</p>
                <div>
                  <h2 className="font-display text-2xl font-extrabold">{item.title}</h2>
                  <p className="mt-1 font-semibold text-signal">{item.organization}</p>
                  <p className="mt-4 leading-7 muted">{item.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
