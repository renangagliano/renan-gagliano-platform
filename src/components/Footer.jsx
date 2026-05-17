import { Link } from "react-router-dom";
import { navOrder, socials } from "../data/site.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();
  const navItems = navOrder.map(([key, path]) => ({ key, path, label: t.nav[key] }));

  return (
    <footer className="border-t border-white/10 bg-white/[0.03] py-10 text-white">
      <div className="container-pad grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div>
          <p className="font-display text-xl font-extrabold">{t.identity.name}</p>
          <p className="mt-3 max-w-2xl leading-7 muted">{t.identity.footerSummary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-white hover:border-civic hover:text-civic"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="focus-ring rounded-md border border-white/10 px-3 py-2 text-sm font-semibold text-white/76 hover:border-civic hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-pad mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Renan Gagliano. Institutional technology platform.</p>
        <p>{t.common.built}</p>
      </div>
    </footer>
  );
}
