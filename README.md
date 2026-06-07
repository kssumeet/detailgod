# Detail God India — Futuristic Automotive Preservation Experience

A production-grade, cinematic website for **Detail God India** — positioned not as a detailing center, but as automotive perfection engineers. Built with Next.js 15 App Router, React Three Fiber, GSAP, Framer Motion and a futuristic "automotive lab" design system.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router), React 18, TypeScript |
| Styling | TailwindCSS, design tokens, shadcn-style primitives |
| Motion | Framer Motion, GSAP + ScrollTrigger, Lenis smooth scroll |
| 3D | React Three Fiber, Three.js, Drei (procedural studio env) |
| Forms | React Hook Form + Zod |
| Backend | Supabase (lead capture, optional) |
| Icons | Lucide |

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # fill in values (optional for dev)
npm run dev                         # http://localhost:3000
```

> The site runs fully **without** Supabase configured — lead forms degrade gracefully
> (success UX + dev-console logging). Add Supabase keys to persist leads.

### Scripts
- `npm run dev` — dev server
- `npm run build` / `npm run start` — production build & serve
- `npm run typecheck` — TypeScript, no emit

## Supabase Lead Table

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text, phone text, email text, vehicle_model text,
  paint_score int, gloss_score int, protection_rating int,
  recommended_service text, source text
);
```
Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.

## Architecture

```
app/                Next routes, layout, metadata, robots, sitemap, OG image
components/          Reusable UI (button, magnetic, section-heading, hud-frame…),
                    providers/ (Lenis smooth scroll), preloader, navbar, marquee
sections/           One file per page section (hero, scanner, storytelling, …)
three/              R3F scene, procedural vehicle, particle system
hooks/              Media query, pointer, reduced-motion
animations/         Shared Framer Motion variants
lib/                utils, supabase client, lead submission, Zod schemas, SEO/schema
config/             site config, services, content data (single source of truth)
types/              Shared TS types
```

Every section is modular and data-driven from `config/`. Below-the-fold sections are
code-split via `next/dynamic`; the 3D hero scene is client-only (`ssr: false`).

## Sections

Preloader → Hero (3D) → Digital Vehicle Scanner → Scroll Storytelling (GSAP pinned) →
Enhancement Modules → Protection Visualizer → Before/After → Technology → Gallery →
Client Success Logs → Protection Protocol → AI Vehicle Analyzer → Protection Programs →
Contact → Footer.

## Performance & SEO
- Static prerender, dynamic imports, code splitting, `next/image`, lazy loading.
- Reduced-motion aware (disables Lenis/GSAP, honors `prefers-reduced-motion`).
- Metadata, Open Graph, Twitter cards, generated OG image, JSON-LD
  (LocalBusiness / Service / FAQ), `robots.txt`, `sitemap.xml`, canonical URLs.

## Deploy
Vercel-ready. Push to a Git repo, import in Vercel, add the env vars from
`.env.local.example`, deploy.

---
Designed & Developed by **Arobuz Digital Engineering**.
