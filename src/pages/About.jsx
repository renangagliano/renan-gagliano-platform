import ProfilePortrait from "../components/ProfilePortrait.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const aboutContent = {
  pt: {
    seoTitle: "Renan Gagliano | Tecnologia, Governança e Transformação Digital",
    headline: "Tecnologia, gestão e transformação construídas com experiência real.",
    support:
      "Profissional brasileiro com mais de duas décadas de atuação em tecnologia, operações, governança e transformação digital, conectando experiência prática, liderança executiva e visão institucional.",
    biographyTitle: "Biografia executiva",
    biography: [
      "Renan Gagliano construiu sua trajetória profissional iniciando em funções operacionais e de atendimento, evoluindo ao longo dos anos até posições de liderança em tecnologia, governança e transformação digital.",
      "Sua experiência reúne atuação em operações críticas, segurança da informação, infraestrutura, cloud, compliance, DevOps e modernização institucional, sempre conectando tecnologia à eficiência operacional e geração de valor público e corporativo.",
      "Ao longo da carreira, atuou em empresas de diferentes segmentos, desde varejo e serviços até grandes ambientes corporativos de telecomunicações e tecnologia, desenvolvendo uma visão prática sobre gestão, pessoas, inovação e sustentabilidade operacional.",
    ],
    timelineTitle: "Trajetória profissional",
    timeline: [
      {
        year: "2001",
        organization: "Super Big X Comércio de Alimentos",
        description: "Primeira experiência profissional com atendimento ao público e operação.",
      },
      {
        year: "2001",
        organization: "Venture Comércio de Alimentos",
        description: "Experiência operacional e desenvolvimento de disciplina profissional.",
      },
      {
        year: "2003",
        organization: "Ability Tecnologia e Serviços",
        description: "Entrada no setor de tecnologia e serviços.",
      },
      {
        year: "2003",
        organization: "Goresbridge Construções",
        description: "Experiência administrativa e suporte operacional.",
      },
      {
        year: "2006",
        organization: "Rede Lingerie",
        description: "Atuação logística e organizacional.",
      },
      {
        year: "2007",
        organization: "Telsul Serviços",
        description: "Evolução para ambientes técnicos e operações corporativas.",
      },
      {
        year: "2009",
        organization: "Icatel Telematica",
        description: "Experiência em telecomunicações e suporte operacional.",
      },
      {
        year: "2009",
        organization: "Koerich Telecom",
        description: "Atuação em ambientes corporativos e infraestrutura.",
      },
      {
        year: "2009+",
        organization: "Ericsson",
        description:
          "Construção de carreira executiva em ICT Operations, governança, segurança da informação, transformação digital, cloud, DevOps, compliance e modernização operacional.",
      },
    ],
    purposeTitle: "Visão e propósito",
    purposeLead: "Tecnologia precisa servir pessoas, instituições e a sociedade.",
    purpose:
      "A proposta profissional e institucional construída por Renan Gagliano conecta inovação, governança, transparência e modernização responsável, defendendo o uso estratégico da tecnologia para melhorar serviços, ampliar eficiência e gerar impacto positivo em ambientes públicos e privados.",
    humanTitle: "Dimensão humana e formação",
    humanFacts: [
      "Casado",
      "Pai de três filhos",
      "Mais de 20 anos de experiência em tecnologia",
      "Formação em Gestão de TI",
      "Pós-graduação em Segurança da Informação",
      "Defensor da educação tecnológica e inovação responsável",
    ],
  },
  en: {
    seoTitle: "Renan Gagliano | Technology, Governance and Digital Transformation",
    headline: "Technology, management and transformation built through real experience.",
    support:
      "Brazilian professional with more than two decades in technology, operations, governance and digital transformation, connecting practical experience, executive leadership and institutional vision.",
    biographyTitle: "Executive biography",
    biography: [
      "Renan Gagliano built his professional trajectory starting in operational and customer-facing roles, evolving over the years into leadership positions in technology, governance and digital transformation.",
      "His experience brings together critical operations, information security, infrastructure, cloud, compliance, DevOps and institutional modernization, always connecting technology to operational efficiency and public and corporate value generation.",
      "Throughout his career, he has worked in companies across different segments, from retail and services to large corporate telecommunications and technology environments, developing a practical view of management, people, innovation and operational sustainability.",
    ],
    timelineTitle: "Professional trajectory",
    timeline: [
      {
        year: "2001",
        organization: "Super Big X Comércio de Alimentos",
        description: "First professional experience with public service and operations.",
      },
      {
        year: "2001",
        organization: "Venture Comércio de Alimentos",
        description: "Operational experience and development of professional discipline.",
      },
      {
        year: "2003",
        organization: "Ability Tecnologia e Serviços",
        description: "Entry into the technology and services sector.",
      },
      {
        year: "2003",
        organization: "Goresbridge Construções",
        description: "Administrative experience and operational support.",
      },
      {
        year: "2006",
        organization: "Rede Lingerie",
        description: "Logistics and organizational work.",
      },
      {
        year: "2007",
        organization: "Telsul Serviços",
        description: "Evolution into technical environments and corporate operations.",
      },
      {
        year: "2009",
        organization: "Icatel Telematica",
        description: "Experience in telecommunications and operational support.",
      },
      {
        year: "2009",
        organization: "Koerich Telecom",
        description: "Work in corporate environments and infrastructure.",
      },
      {
        year: "2009+",
        organization: "Ericsson",
        description:
          "Executive career development in ICT Operations, governance, information security, digital transformation, cloud, DevOps, compliance and operational modernization.",
      },
    ],
    purposeTitle: "Vision and purpose",
    purposeLead: "Technology must serve people, institutions and society.",
    purpose:
      "The professional and institutional proposition built by Renan Gagliano connects innovation, governance, transparency and responsible modernization, advocating the strategic use of technology to improve services, increase efficiency and generate positive impact in public and private environments.",
    humanTitle: "Human dimension and education",
    humanFacts: [
      "Married",
      "Father of three children",
      "More than 20 years of experience in technology",
      "Degree in IT Management",
      "Postgraduate studies in Information Security",
      "Advocate for technology education and responsible innovation",
    ],
  },
};

export default function About() {
  const { language, t } = useLanguage();
  const about = aboutContent[language];

  return (
    <PageTransition>
      <Seo title={about.seoTitle} description={about.support} />
      <section className="section-pad bg-grid-dark bg-[length:48px_48px]">
        <div className="container-pad">
          <SectionHeader eyebrow={t.about.eyebrow} title={about.headline} description={about.support} />

          <div className="mt-14 grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <ProfilePortrait compact />
            </div>

            <div className="grid gap-6">
              <div className="executive-card p-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-civic">{about.biographyTitle}</p>
                {about.biography.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-lg leading-8 muted first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
                <h2 className="font-display text-2xl font-extrabold text-white">{about.timelineTitle}</h2>
                <div className="mt-6 grid gap-4">
                  {about.timeline.map((item) => (
                    <div key={`${item.year}-${item.organization}`} className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-[92px_1fr]">
                      <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-signal">{item.year}</div>
                      <div>
                        <h3 className="font-display text-lg font-extrabold text-white">{item.organization}</h3>
                        <p className="mt-2 leading-7 muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="executive-card p-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-civic">{about.purposeTitle}</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white">{about.purposeLead}</h2>
                <p className="mt-5 text-lg leading-8 muted">{about.purpose}</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <h2 className="font-display text-2xl font-extrabold text-white">{about.humanTitle}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {about.humanFacts.map((item) => (
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
