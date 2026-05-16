import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import IconBadge from "../components/IconBadge.jsx";
import PageTransition from "../components/PageTransition.jsx";
import ProfilePortrait from "../components/ProfilePortrait.jsx";
import Seo from "../components/Seo.jsx";
import { themeSignals } from "../data/site.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Home() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Seo title={t.meta.siteTitle} description={t.meta.description} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(19,181,166,.24),transparent_34%),radial-gradient(circle_at_18%_28%,rgba(214,170,91,.13),transparent_28%)]" />
        <div className="absolute inset-0 bg-grid-dark bg-[length:54px_54px] opacity-[0.12]" />
        <div className="container-pad relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.78fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] text-balance text-white sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold text-civic sm:text-xl">{t.identity.badge}</p>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/74">{t.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/about"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-civic px-5 py-3 font-bold text-graphite transition hover:bg-civic/90"
              >
                {t.hero.primary} <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.18] px-5 py-3 font-bold text-white transition hover:border-civic hover:text-civic"
              >
                {t.hero.secondary}
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.hero.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                  <p className="font-display text-2xl font-extrabold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm leading-5 muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <ProfilePortrait />
        </div>
      </section>

      <section className="glass-band py-7">
        <div className="container-pad flex flex-wrap items-center justify-center gap-3">
          {themeSignals.map((signal) => (
            <div key={signal.label} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/80">
              <signal.icon size={16} className="text-civic" />
              {signal.label}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-white">{t.identity.title}</h2>
            </div>
            <p className="text-lg leading-8 muted">{t.identity.summary}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.pillars.map((pillar) => (
              <Card key={pillar.title}>
                <IconBadge icon={pillar.icon} />
                <h3 className="mt-5 font-display text-xl font-extrabold text-white">{pillar.title}</h3>
                <p className="mt-3 leading-7 muted">{pillar.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/[0.03]">
        <div className="container-pad grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white">{t.experience.title}</h2>
            <div className="mt-8 grid gap-3">
              {t.about.focus.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.05] p-4">
                  <CheckCircle2 className="text-signal" size={20} />
                  <span className="font-semibold text-white/86">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-executive">
            <img
              src="/renan-institutional-hero.svg"
              alt=""
              className="aspect-[16/10] w-full rounded-xl object-cover opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
