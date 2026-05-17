# Supabase Setup

Use only the Supabase public anon key in this Vite app. Never use or expose a service role or secret key.

## Required Tables and Policies

Run this SQL in the Supabase SQL editor:

```sql
create table if not exists public_proposal_votes (
  id uuid primary key default gen_random_uuid(),
  proposal_id text not null,
  vote_type text not null check (vote_type in ('like', 'dislike')),
  voter_id text not null,
  created_at timestamp with time zone default now(),
  unique (proposal_id, voter_id)
);

create table if not exists public_proposal_suggestions (
  id uuid primary key default gen_random_uuid(),
  proposal_id text not null,
  name text,
  email text,
  suggestion text not null,
  created_at timestamp with time zone default now()
);

alter table public_proposal_votes enable row level security;
alter table public_proposal_suggestions enable row level security;

drop policy if exists "Allow public vote read" on public_proposal_votes;
drop policy if exists "Allow public vote insert" on public_proposal_votes;
drop policy if exists "Allow public suggestion insert" on public_proposal_suggestions;

create policy "Allow public vote read"
on public_proposal_votes
for select
using (true);

create policy "Allow public vote insert"
on public_proposal_votes
for insert
with check (true);

create policy "Allow public suggestion insert"
on public_proposal_suggestions
for insert
with check (true);
```

## GitHub Actions Variables

In GitHub, configure repository variables at:

Settings -> Secrets and variables -> Actions -> Variables

Create:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The deploy workflow injects these variables into the Vite build step.

## 401 Unauthorized Troubleshooting

The browser console intentionally logs only whether Supabase configuration exists, never the values:

```text
Supabase config { hasUrl: true, hasKey: true }
```

If `hasUrl` and `hasKey` are both `true` but Supabase still returns `401 Unauthorized`, replace `VITE_SUPABASE_ANON_KEY` with the project's Legacy anon public key from Supabase. Do not use the service role key or any secret key.

Supabase JS sends the configured anon key through its default client behavior as both:

- `apikey`
- `Authorization: Bearer <anon key>`

After updating the GitHub variable, rerun the GitHub Pages deployment so Vite rebuilds the production bundle with the corrected public key.
