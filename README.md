# Niagara Drive Coach

Personal website for a driving coach in the Niagara region (Ontario, Canada). Chinese-primary with English variant. Built to be deployed on Vercel.

> Phase 1 — coach personal showcase & lead generation.
> Phase 2 (future) — coach + student community.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config, no `tailwind.config.*`)
- Static prerender, Vercel-ready

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run typecheck   # tsc --noEmit
npm start           # serve the build
```

## Routes

| Path  | Language | File |
| ----- | -------- | ---- |
| `/`   | 中文     | [app/page.tsx](app/page.tsx) |
| `/en` | English  | [app/en/page.tsx](app/en/page.tsx) |

## Project structure

```
app/
  layout.tsx       # root <html>, font imports, metadata
  globals.css      # Tailwind v4 @theme tokens, animations, utility classes
  page.tsx         # Chinese homepage
  en/page.tsx      # English homepage
components/
  HeroScene.tsx    # bespoke hero SVG (sun, lake, road, coach car)
  FloatingShape.tsx
.claude/
  skills/frontend-design/SKILL.md   # auto-loaded design-system guide
CLAUDE.md          # guidance for Claude Code sessions
```

## Replacing placeholder content

The site ships with placeholder copy. Before launch, search for `占位` and `Placeholder`, and update:

- Coach name & bio — `About` section in both page files.
- Stats — `STATS` array near top of [app/page.tsx](app/page.tsx) and [app/en/page.tsx](app/en/page.tsx).
- Testimonials — `VOICES` array.
- Phone / WeChat / service area — `CTA` component.
- Real coach photo at `public/coach.jpg`, then swap the gradient placeholder in the `About` section.

## Deploying to Vercel

Push to a Git remote, import the repo in Vercel — framework auto-detects, no extra config needed.
