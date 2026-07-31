# Saidakbar Usmonov — Portfolio

A personal site for a Machine Learning / Data Engineer, built around a **pipeline** metaphor: the page is a DAG you scroll through. Each section is a *stage* rendered on an inverted slab, so the site alternates between ink and paper rather than being a dark theme or a light one.

Built with Next.js 16, TypeScript, Tailwind CSS v4 and Framer Motion.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build for a Node host |
| `npm start` | Serve the production build |
| `npm run build:static` | Static export into `./out` (no server needed) |
| `npm run preview:static` | Serve `./out` locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

---

## Deploying for free

The site is fully static — every route prerenders at build time — so any of these work at zero cost.

### 1. Vercel — easiest

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new). Next.js is detected automatically; no configuration needed. Free Hobby tier, custom domain included.

### 2. GitHub Pages — free, nothing beyond a GitHub account

A workflow is already included at `.github/workflows/deploy-pages.yml`.

1. Push the repo to GitHub.
2. Go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. Push to `main`. The workflow builds the static export and publishes it.

It sets `BASE_PATH` for you: `/` for a `<username>.github.io` repo, `/<repo-name>` for any other.

### 3. Netlify / Cloudflare Pages

Connect the repo and use:

- **Build command:** `npm run build:static`
- **Publish directory:** `out`

### 4. Any static host / drag-and-drop

```bash
npm run build:static
```

Then upload the `out/` folder anywhere — Netlify Drop, Surge, S3, nginx.

### 5. Node hosts (Render, Railway, Fly)

- **Build:** `npm run build`
- **Start:** `npm start`

> Set `SITE.url` in `src/constants/site.ts` to your real domain before deploying — it drives canonical URLs, `sitemap.xml`, `robots.txt` and every Open Graph / Twitter tag.

---

## Making it yours

Everything a recruiter reads lives in `src/data/` and `src/constants/`. No component edits needed for content changes.

| File | Contents |
| --- | --- |
| `src/constants/site.ts` | Name, domain, meta description, email, phone, social URLs, CV path |
| `src/constants/navigation.ts` | Pipeline stages: order, labels, stage numbers, and **which tone each slab uses** |
| `src/constants/assets.ts` | Image paths + the allowlist that turns placeholders into real images |
| `src/data/profile.ts` | Hero copy, About paragraphs, facts, principles, languages |
| `src/data/experience.ts` | Roles, achievements, metrics, stacks |
| `src/data/projects.ts` | Full project case studies |
| `src/data/skills.ts` | Skill groups and proficiency levels (0–100) |
| `src/data/education.ts` | Degree and certificates |
| `src/data/stats.ts` | Headline counters and achievements |

### Replacing the placeholder images

Every visual slot renders a labelled placeholder that names the file it wants. To swap one in:

1. Drop the file in `/public` at the exact path shown on the placeholder — e.g. `public/images/profile.jpg`.
2. Uncomment that path in `AVAILABLE_ASSETS` in `src/constants/assets.ts`.

That's it. `next/image`, lazy loading and correct `sizes` are already wired. Nothing needs filling in for the site to build and deploy.

### Your CV

`public/Usmonov_Saidakbar_CV.docx` is what the **Download CV** button serves. Export a PDF over it and change `SITE.resumePath` to `.pdf` — recruiters can open a PDF in-browser, whereas `.docx` forces a download.

### The contact form

It composes a `mailto:` link and hands off to the visitor's mail client, so there's **no backend and nothing to pay for**. To use a real endpoint instead, swap the `window.location.href` line in `src/components/sections/Contact.tsx` for a `fetch` to Formspree, Web3Forms or a Next.js route handler.

---

## Design system

Defined entirely in `src/app/globals.css`.

**Slabs.** `slab-ink` and `slab-paper` each declare a full set of surface tokens — `--surface`, `--fg`, `--fg-muted`, `--line`, `--accent`, `--on-accent`. Components style themselves from those variables, so any component works on either tone with no conditional logic. Change a section's tone by flipping one field in `navigation.ts`.

**Fixed chrome.** The DAG rail and top bar float above slabs that invert underneath them, so they read the surface tone at runtime via `useSurfaceTone()` (which tracks `[data-tone]` elements) and recolour themselves. This is deliberately separate from `useScrollSpy()` — "which stage is active" and "what colour is behind the rail" are different questions, and interstitial bands like the stats ledger have a tone without being a stage.

**Type.** Geist Sans and Geist Mono. Display sizes use `clamp()` so headings scale continuously rather than stepping at breakpoints.

---

## Structure

```
src/
├── app/              # Routes, metadata, sitemap, robots, manifest, OG image
├── components/
│   ├── animations/   # Reveal, Parallax, WordReveal, TypingText, counters
│   ├── common/       # QueryHeading, Placeholder, icon registry, marquee
│   ├── layout/       # PipelineRail, TopBar, Slab, Preloader, CommandPalette
│   ├── sections/     # One file per page section
│   └── ui/           # Panel, Dialog primitives
├── constants/        # Site config, navigation, asset allowlist
├── data/             # All content
├── hooks/            # useScrollSpy, useSurfaceTone, useMediaQuery, useMounted
├── lib/              # cn(), motion variants, JSON-LD builder
└── types/            # Shared types
```

---

## Accessibility & performance

- Every route is statically prerendered; the whole export is ~2 MB.
- `prefers-reduced-motion` is respected globally, and the scroll-jacked horizontal project deck falls back to a native swipe carousel.
- Keyboard navigable throughout, with a skip link and a `⌘K` command palette.
- Semantic landmarks, ARIA labels on icon-only controls, and `role="progressbar"` with real values on every meter.
- The typing effect exposes the full role list to screen readers instead of a mutating string.

---

## Note on content

Copy was rewritten from the CV to lead with outcomes rather than responsibilities. The project case studies expand on the CV with the engineering detail a reader expects — **review those narrative sections before publishing** and adjust anything that doesn't match how the systems actually work.

One thing to check: the ISLAB dates read `Aug 2026 — Aug 2027`, copied verbatim from the CV. That range hasn't started yet but is written in the past tense, so it looks like a typo. Fix it in `src/data/experience.ts`.
