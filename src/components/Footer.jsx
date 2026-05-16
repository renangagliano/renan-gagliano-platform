import { Link } from "react-router-dom";
import { identity, navItems } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/70 py-10 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="container-pad grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div>
          <p className="font-display text-xl font-extrabold">{identity.name}</p>
          <p className="mt-3 max-w-2xl leading-7 muted">{identity.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="focus-ring rounded-md border border-ink/10 px-3 py-2 text-sm font-semibold hover:border-civic dark:border-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-pad mt-8 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm muted sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <p>© {new Date().getFullYear()} Renan Gagliano. Institutional technology platform.</p>
        <p>Built for GitHub Pages with React, Vite, TailwindCSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
