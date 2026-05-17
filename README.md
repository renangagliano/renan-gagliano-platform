# Renan Gagliano Institutional Platform

Modern institutional platform for Renan Gagliano, built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- Responsive executive UI with dark mode
- Pages for Home, About, Experience, Projects, Public Proposals, Articles, and Contact
- Reusable React components and data-driven content
- SEO metadata and social preview image
- Optimized institutional technology hero asset
- GitHub Pages workflow and SPA `404.html` fallback
- Supabase-backed global engagement for Public Proposals

## Local Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

## Supabase Environment

Copy `.env.example` to `.env` for local development and configure:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Use only the Supabase publishable/anon key. Never use a service role or secret key in this frontend project.

For GitHub Pages deployment, add repository variables in:

Settings -> Secrets and variables -> Actions -> Variables

Create:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The deploy workflow passes these variables to the Vite build step.

See `SUPABASE_SETUP.md` for the required SQL tables and RLS policies.

## Production Build

```bash
npm run build
```

The build output is generated in `dist`.

## GitHub Pages

The included workflow deploys pushes to the `main` branch through GitHub Pages. In the repository settings, set Pages to use GitHub Actions.
