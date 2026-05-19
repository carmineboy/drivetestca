# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project goal

Personal website for a driving coach in the Niagara region (Ontario, Canada), deployed on Vercel.

- **Phase 1 (current)**: Coach personal site — showcase teaching method, pass-rate stats, testimonials. Goal is lead generation (call / WeChat).
- **Phase 2 (future)**: Coach + student community (auth, lessons, content library).

The site is **Chinese-primary with an English variant**. Niagara region serves both English-speaking locals and a Chinese-speaking newcomer audience; the coach teaches bilingually.

All textual content is currently **placeholder** ("Coach Wang", "(905) 555-0199", "niagara-coach" WeChat ID, sample testimonials, 97% / 500+ / 12年 stats). These must be replaced with the coach's real content before launch — search the codebase for `占位` / "Placeholder" to find them.

## Commands

```bash
npm install        # install deps
npm run dev        # local dev server at http://localhost:3000
npm run build      # production build (also runs type-check via Next)
npm run typecheck  # tsc --noEmit only
npm start          # serve the production build
```

There is no test suite yet. There is no lint config beyond Next's defaults — `npm run lint` is wired but no `eslint.config` is set up; add one before introducing more pages.

## Architecture

- **Next.js 15 App Router**, React 19, TypeScript strict mode, **Tailwind v4** (CSS-first config via `@theme` in [app/globals.css](app/globals.css), no `tailwind.config.*` file).
- Two top-level routes, both fully static:
  - `/` → [app/page.tsx](app/page.tsx) — Chinese (default)
  - `/en` → [app/en/page.tsx](app/en/page.tsx) — English
- No DB, no auth, no API routes yet. Every section is a server component rendering hardcoded data arrays (`STATS`, `METHOD`, `VOICES`, `TICKER` near the top of each page file).
- Shared visual primitives in [components/](components/):
  - [components/HeroScene.tsx](components/HeroScene.tsx) — bespoke SVG illustration (sun, lake, road, coach car, signpost) used in both locale heroes.
  - [components/FloatingShape.tsx](components/FloatingShape.tsx) — decorative shapes (`sun`, `ripple`, `star`, `sign`, `blob`) used as positioned background ornaments.

### Design system (committed direction)

The visual language is **明亮活力 / 友好接近** ("bright energetic, friendly approachable") — chunky black borders, hard offset shadows, sticker-style chips, hand-drawn underlines, marquee strip. Inspired by editorial/poster-art aesthetics, not generic SaaS.

Tokens live in `@theme { … }` in [app/globals.css](app/globals.css):

- **Colors**: `--color-paper` (cream), `--color-paper-warm`, `--color-ink` (deep navy-black), `--color-coral` / `--color-coral-deep` (warm sun), `--color-lake` / `--color-lake-deep` (Niagara blue), `--color-canary` (highlight yellow), `--color-mint` (signpost green).
- **Fonts**: loaded from Google Fonts in [app/layout.tsx](app/layout.tsx).
  - `--font-display`: **ZCOOL KuaiLe** (Chinese display, friendly) → fallback Smiley Sans / Noto Serif SC / PingFang SC / Fraunces.
  - `--font-accent`: **Fraunces** (variable serif, used for italics and numerals).
  - `--font-sans`: **Noto Sans SC** body.
- **Reusable utility classes** (defined in globals.css, not Tailwind utilities): `.sticker`, `.card-flat`, `.underline-wobble`, `.stagger` (page-load reveal).
- **Animations**: `@keyframes float`, `rise`, `drift`, `marquee`, registered as `--animate-*` tokens. Respect `prefers-reduced-motion`.

When editing or adding pages, **commit to this aesthetic** — chunky borders + hard shadows + sticker chips + bold display type. Do **not** drift toward generic AI design (Inter, soft purple gradients, rounded SaaS cards with subtle shadows). The local skill at [.claude/skills/frontend-design/SKILL.md](.claude/skills/frontend-design/SKILL.md) — copied in from the global `frontend-design` plugin — captures this principle and auto-loads in future sessions.

### Locale strategy (today, and the trap to avoid)

The split is **flat**: `/` is Chinese, `/en` is English. Both are static; there's no middleware-based negotiation. The root layout in [app/layout.tsx](app/layout.tsx) hardcodes `<html lang="zh-CN">`, so the English page currently inherits the wrong `lang` attribute — an SEO/a11y bug worth fixing before launch (likely by moving to `app/[locale]/` route groups or splitting the root layout). The two pages duplicate a lot of structure intentionally to keep things readable while content is still placeholder; once content stabilizes, consider extracting sections into shared components keyed on a small `dict` object.

### Deploying to Vercel

The repo is Vercel-ready as-is: framework auto-detects Next.js, no `vercel.json` needed. `npm run build` is the build command, output is the `.next/` directory. Both routes prerender to static HTML.

## Working in this codebase

- Keep new sections inside the existing aesthetic vocabulary (sticker / card-flat / underline-wobble / display font). If a section needs a new pattern, add it to `globals.css` rather than scattering inline styles.
- When adding placeholder content, **mark it** with `占位` (Chinese) or `Placeholder` (English) so it's grep-able pre-launch.
- The hero SVG ([components/HeroScene.tsx](components/HeroScene.tsx)) is intentionally hand-coded, not a library asset — keep it that way; it's part of the brand.
- Phone, WeChat ID, and service-area copy live in the `CTA` component of each page — single source per locale, easy to swap.
