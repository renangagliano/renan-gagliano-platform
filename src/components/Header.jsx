import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { identity, navItems } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-porcelain/[0.82] backdrop-blur-xl dark:border-white/10 dark:bg-graphite/[0.78]">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-civic focus:px-4 focus:py-2 focus:text-graphite"
      >
        Skip to content
      </a>
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center rounded-lg bg-ink text-sm font-black text-white shadow-glow dark:bg-porcelain dark:text-graphite">
            RG
          </span>
          <span className="min-w-0">
            <span className="block font-display text-base font-extrabold leading-5">{identity.name}</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-civic sm:block">
              Institutional Tech
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-ink text-white dark:bg-white dark:text-graphite" : "text-ink/[0.72] hover:text-ink dark:text-white/[0.72] dark:hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className="focus-ring grid size-11 place-items-center rounded-md border border-ink/10 bg-white/70 text-ink transition hover:border-civic dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid size-11 place-items-center rounded-md border border-ink/10 bg-white/70 text-ink lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-porcelain px-5 py-4 lg:hidden dark:border-white/10 dark:bg-graphite">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `focus-ring rounded-md px-4 py-3 text-sm font-bold ${
                    isActive ? "bg-ink text-white dark:bg-white dark:text-graphite" : "bg-white/60 dark:bg-white/[0.08]"
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
