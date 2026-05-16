import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { languages, navOrder } from "../data/site.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const getStoredTheme = () => localStorage.getItem("theme") || "dark";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getStoredTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [isDark, theme]);

  const navItems = navOrder.map(([key, path]) => ({ key, path, label: t.nav[key] }));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite/82 backdrop-blur-2xl">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-civic focus:px-4 focus:py-2 focus:text-graphite"
      >
        {t.common.skip}
      </a>
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center rounded-lg bg-civic text-sm font-black text-graphite shadow-glow">
            RG
          </span>
          <span className="min-w-0">
            <span className="block font-display text-base font-extrabold leading-5 text-white">Renan Gagliano</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-civic sm:block">
              ICT Operations
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-white text-graphite" : "text-white/72 hover:bg-white/8 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-md border border-white/10 bg-white/[0.06] p-1 sm:flex" aria-label={t.common.language}>
            {Object.entries(languages).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setLanguage(key)}
                className={`focus-ring rounded px-3 py-2 text-sm font-bold transition ${
                  language === key ? "bg-civic text-graphite" : "text-white/70 hover:text-white"
                }`}
                aria-pressed={language === key}
              >
                <span aria-hidden="true">{item.flag}</span> {key.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
            className="focus-ring grid size-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-white transition hover:border-civic"
            aria-label={t.common.dark}
          >
            {isDark ? <Moon size={19} /> : <Sun size={19} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid size-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-white xl:hidden"
            aria-label={t.common.menu}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-graphite px-5 py-4 xl:hidden">
          <div className="mb-3 grid grid-cols-2 gap-2 sm:hidden">
            {Object.entries(languages).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setLanguage(key)}
                className={`focus-ring rounded-md px-4 py-3 text-sm font-bold ${
                  language === key ? "bg-civic text-graphite" : "bg-white/[0.08] text-white"
                }`}
              >
                <span aria-hidden="true">{item.flag}</span> {item.nativeLabel}
              </button>
            ))}
          </div>
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `focus-ring rounded-md px-4 py-3 text-sm font-bold ${
                    isActive ? "bg-white text-graphite" : "bg-white/[0.08] text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
