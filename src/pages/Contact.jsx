import { ArrowUpRight } from "lucide-react";
import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Seo from "../components/Seo.jsx";
import { contactMethods } from "../data/site.js";

export default function Contact() {
  return (
    <PageTransition>
      <Seo title="Contact" description="Contact Renan Gagliano for institutional technology, governance, and innovation conversations." />
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Contact"
            title="Start a conversation about technology, governance, and institutional innovation."
            description="Use the contact channels below for proposals, partnerships, public innovation conversations, and executive technology initiatives."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <Card key={method.label}>
                <IconBadge icon={method.icon} />
                <h2 className="mt-5 font-display text-2xl font-extrabold">{method.label}</h2>
                <a
                  href={method.href}
                  className="focus-ring mt-4 inline-flex items-center gap-2 rounded-md text-base font-bold text-civic"
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {method.value} <ArrowUpRight size={18} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
