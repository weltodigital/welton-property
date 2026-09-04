# Welton Property

Marketing site for **Welton Property** — a construction company in Portsmouth covering
building, architectural design, plumbing, electrics, landscaping, plastering and
project management across Hampshire and the south coast.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npx eslint src   # lint
npx tsc --noEmit # typecheck
```

---

## Before this goes live

These are the things I could not determine and had to leave as placeholders.
Each one is marked with a `TODO` in the source.

| What | Where | Why it matters |
|---|---|---|
| **Trading address** | `src/lib/site.ts` | Only the town is set. A full address improves local search and Google Business Profile matching. |
| **"Fully insured" claim** | `src/app/page.tsx` (hero bullet + FAQ) | The £2m figure was removed from the trust bar, but the homepage still says "Fully insured" and answers "Are you insured?". Keep or cut. |
| **Accreditations** | service FAQs | Gas Safe, NICEIC/NAPIT, TrustMark, Checkatrade — name the real ones or remove the claim. |
| **Project locations** | `src/lib/projects.ts` | I assigned plausible towns to the photos. Correct them so you are not claiming work in the wrong place. |
| **Founding story / team** | `src/app/about/page.tsx` | Written generically on purpose. Harry's own account will read far better. |
| **Social links** | `src/lib/site.ts` | Empty. Add or leave out. |
| **Privacy policy** | `src/app/privacy/page.tsx` | Plain-English placeholder, not legally reviewed. |

### Contact form email

The form is fully built and validated, but **no email is sent until you add credentials.**
Until then it tells visitors to email `harry@weltonproperty.co.uk` directly rather than
silently swallowing the enquiry.

1. Create a [Resend](https://resend.com) account and verify the `weltonproperty.co.uk` domain.
2. Set these in Vercel (Project → Settings → Environment Variables), or in `.env.local` locally:

```
RESEND_API_KEY=re_xxxxxxxxxx
CONTACT_FROM_EMAIL=website@weltonproperty.co.uk
```

`CONTACT_FROM_EMAIL` must be on a domain verified in Resend. Enquiries are delivered to
the address in `site.email`, with `reply_to` set to the enquirer so you can just hit reply.

---

## Deploying

```bash
npx vercel        # preview deploy
npx vercel --prod # production
```

Then point `weltonproperty.co.uk` at Vercel. Note the domain currently serves a
"suspended page" notice from the old host — that hosting needs cancelling and the
DNS repointing.

---

## How it is put together

```
src/
├── app/
│   ├── layout.tsx              root layout, fonts, metadata, LocalBusiness schema
│   ├── page.tsx                homepage
│   ├── services/page.tsx       services index
│   ├── services/[slug]/        one statically generated page per service
│   ├── projects/page.tsx       project gallery
│   ├── about/, contact/, privacy/
│   ├── api/contact/route.ts    form handler (validation, honeypot, Resend)
│   ├── sitemap.ts, robots.ts, not-found.tsx
│   └── globals.css             Tailwind theme + brand palette
├── components/                 Header, Footer, cards, form, CTA band…
└── lib/
    ├── site.ts                 business details, areas covered, nav  ← edit this first
    ├── services.ts             all service page copy
    ├── projects.ts             gallery entries
    ├── credentials.ts          trust-bar claims
    └── testimonials.ts         empty by design — see below
```

**Content lives in `src/lib/`, not in the pages.** To add a service, add an entry to
`services.ts` — the nav, footer, homepage grid, sitemap, dropdown and its own page all
pick it up automatically.

### Testimonials

`src/lib/testimonials.ts` is deliberately an empty array, and the section hides itself
when empty. I did not write fake customer quotes — inventing reviews on a live trading
site is both misleading and a advertising-standards problem. Paste in real ones and the
section appears.

---

## Design notes

The brand colour `#bcdefb` is a very light pastel. At that lightness it fails WCAG
contrast for text and buttons (roughly 1.3:1 on white), so it is used as the *accent* —
washes, rules, section backgrounds, and buttons on dark backgrounds — while a deeper
blue from the same hue family carries text and primary buttons.

The full scale is in `globals.css` as `--color-brand-50` … `--color-brand-900`, with
`#bcdefb` sitting at `brand-200`. Change that one value and the accent shifts everywhere.

### Images

`public/images/` holds web-optimised JPEGs (1920px wide) converted from the originals.
The untouched originals are kept in `source-images/`, which is gitignored and not deployed.
Next.js serves resized WebP/AVIF automatically, so drop replacements in at full quality.

---

## SEO

- Per-service pages targeting "<trade> Portsmouth" style searches
- `GeneralContractor` schema with `areaServed` and `makesOffer`
- `FAQPage` schema on every service page
- Generated `sitemap.xml` and `robots.txt`, canonical URLs, OpenGraph and Twitter cards

**Worth doing next:** dedicated area pages (`/areas/fareham`, `/areas/havant`, …) built
from the same service data. That is usually the single biggest local-search win for a
trades business, and the content structure is already set up to support it.
