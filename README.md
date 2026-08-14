# snaity.dev

![snaity.dev](public/opengraph-image.png)

Personal link-hub page for [@snaity](https://github.com/adrianopteodoro) — a single-page site listing Discord, blog, streaming, and social links, served at [snaity.dev](https://snaity.dev).

Built with [Next.js](https://nextjs.org/) (App Router, static export), [Tailwind CSS](https://tailwindcss.com/), and TypeScript. Deployed to GitHub Pages behind a custom domain.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # static export to ./out
npm run lint    # eslint
npm run start   # serve a production build (not used for deployment)
```

## Project structure

- `app/page.tsx` — the page itself: profile, tag pills, link cards, social icons. Content (links, colors, icons) lives in plain arrays at the top of the file.
- `app/layout.tsx` — fonts (Orbitron for the wordmark, JetBrains Mono for body text) and all metadata (Open Graph, Twitter card, robots, icons).
- `app/robots.ts` / `app/sitemap.ts` — generate `robots.txt` / `sitemap.xml` at build time.
- `public/background.jpg`, `public/avatar.jpg`, `public/icon.png`, `public/apple-icon.png`, `public/opengraph-image.png` — static image assets. Icons and the OG image are committed as plain PNGs rather than using Next's dynamic `icon.tsx`/`opengraph-image.tsx` route convention, since GitHub Pages serves files by extension and that convention's extensionless output gets served with the wrong `Content-Type`.
- `public/CNAME` — pins the custom domain for GitHub Pages.

## Deployment

Pushing to `main` triggers `.github/workflows/nextjs.yml`, which builds the static export and publishes it to GitHub Pages. The domain (`snaity.dev`) points at GitHub Pages via A/AAAA records; `public/CNAME` keeps GitHub Pages aware of it across deploys.

Notes for future changes:
- `next.config.mjs` uses `output: "export"` — no server-only features (API routes, server actions, dynamic image optimization) are available.
- There's no `basePath`: the site serves from the domain root, not a `/snaity.dev` subpath.
