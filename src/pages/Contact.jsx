import { ArrowUpRight } from "lucide-react";
import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { socials } from "../data/site.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Seo title={`${t.nav.contact} | Renan Gagliano`} description={t.contact.description} />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {socials.map((method) => (
              <Card key={method.key} className="min-h-52">
                <IconBadge icon={method.icon} />
                <h2 className="mt-5 font-display text-xl font-extrabold text-white">{method.label}</h2>
                <a
                  href={method.href}
                  className="focus-ring mt-4 inline-flex items-center gap-2 rounded-md text-base font-bold text-civic"
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {t.common.contactCta} <ArrowUpRight size={18} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
