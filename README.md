# CodeVira Website

The official website of **CodeVira**, a software and digital growth agency (app, game and web development, SEO, ASO, digital marketing, QA, Amazon e-commerce and AI services).

Live: https://codeviratec.github.io/codevirasite/ · Domain (coming soon): https://codevira.uk

> **© Dev-Hussnain (CodeVira). All rights reserved.**
> This is proprietary software. The code is public only for GitHub Pages hosting. Copying, modifying, reusing or redistributing any part of it is **not permitted** without written permission. See [LICENSE](LICENSE).

## Tech stack
Next.js 16 (App Router, static export), React 19, Tailwind CSS 4 and TypeScript. Every page is pre-rendered to static HTML for fast loading and Google indexing.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static build in the out/ folder
```

## Configuration
- **Company info** (name, phone, email, address, domain): `lib/site.ts`
- **Services content**: `lib/services.ts`
- **Contact form**: get a free access key at https://web3forms.com, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_KEY`, then redeploy.
- **Logo files**: `public/logo.svg`, `public/logo-mark.svg`, favicon `app/icon.svg`

## Deploy to GitHub Pages
The site is published from the `gh-pages` branch.

```bash
bash scripts/deploy-pages.sh                              # github.io/codevirasite
CUSTOM_DOMAIN=codevira.uk bash scripts/deploy-pages.sh    # after connecting the custom domain
```

Connecting `codevira.uk`:
1. At your domain registrar, add `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, and a `CNAME` record for `www` pointing to `codeviratec.github.io`.
2. In the repository, open **Settings → Pages**, enter `codevira.uk` as the custom domain and enable **Enforce HTTPS**.
3. Redeploy with `CUSTOM_DOMAIN=codevira.uk` (shown above).

## SEO
- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter cards
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- JSON-LD structured data: Organization, WebSite, BreadcrumbList, Service, FAQPage, AboutPage and ContactPage

After the domain is live, add `codevira.uk` in [Google Search Console](https://search.google.com/search-console) and submit `https://codevira.uk/sitemap.xml`.
