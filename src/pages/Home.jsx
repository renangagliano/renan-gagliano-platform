import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import Seo from "../components/Seo.jsx";
import { pillars, projects, quickLinks, stats } from "../data/site.js";

export default function Home() {
  return (
    <PageTransition>
      <Seo
        title="Institutional Technology Platform"
        description="Executive platform for Renan Gagliano covering technology governance, public innovation, strategic projects, proposals, articles, and contact."
      />
      <section className="relative overflow-hidden bg-ink text-white dark:bg-graphite">
        <img
          src="/renan-institutional-hero.svg"
          alt="Abstract institutional technology command center with data infrastructure and governance aesthetics"
          className="absolute inset-0 h-full w-full object-cover opacity-52"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/[0.82] to-graphite/20" />
        <div className="absolute inset-0 bg-grid-dark bg-[length:44px_44px] opacity-20" />
        <div className="container-pad relative grid min-h-[calc(100vh-5rem)] items-center gap-10 py-20 lg:grid-cols-[1fr_.78fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="eyebrow">Executive Institutional Platform</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
              Renan Gagliano
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/[0.76]">
              Technology leadership, public governance, and innovation strategy shaped for institutions that need clarity, trust, and durable digital capability.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-civic px-5 py-3 font-bold text-graphite transition hover:bg-civic/90"
              >
                Explore projects <ArrowRight size={18} />
              </Link>
              <Link
                to="/public-proposals"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.22] px-5 py-3 font-bold text-white transition hover:border-civic hover:text-civic"
              >
                Public proposals
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="executive-card border-white/[0.12] bg-white/[0.08] p-5 text-white"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-civic">Strategic domains</p>
            <div className="mt-5 grid gap-3">
              {["Digital governance", "Responsible AI", "Citizen services", "Executive dashboards"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.08] p-4">
                  <CheckCircle2 className="text-signal" size={20} />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white/80 py-8 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="container-pad grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-ink/10 p-5 dark:border-white/10">
              <p className="font-display text-4xl font-extrabold text-civic">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Operating Thesis</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold text-balance">Technology becomes institutional value when governance is designed into delivery.</h2>
            </div>
            <p className="text-lg leading-8 muted">
              The platform presents a clear public-facing architecture for Renan Gagliano: biography, experience, projects, policy proposals, articles, and contact channels in one modern executive presence.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title}>
                <IconBadge icon={pillar.icon} />
                <h3 className="mt-5 font-display text-xl font-extrabold">{pillar.title}</h3>
                <p className="mt-3 leading-7 muted">{pillar.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white dark:bg-white/[0.03]">
        <div className="container-pad">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold">Projects with public value logic</h2>
            </div>
            <Link to="/projects" className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/[0.16] px-4 py-3 font-bold">
              See all <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="border-white/10 bg-white/[0.06] text-white">
                <IconBadge icon={project.icon} />
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-signal">{project.category}</p>
                <h3 className="mt-3 font-display text-xl font-extrabold">{project.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad grid gap-5 md:grid-cols-2">
          {quickLinks.map((link) => (
            <Link key={link.label} to={link.href} className="focus-ring executive-card flex items-center justify-between gap-4 p-6">
              <span className="flex items-center gap-4">
                <IconBadge icon={link.icon} />
                <span className="font-display text-2xl font-extrabold">{link.label}</span>
              </span>
              <ArrowRight className="text-civic" />
            </Link>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
