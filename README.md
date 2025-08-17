# The 12 Startup Challenge (Project #0)

A minimal Next.js + Tailwind site to announce and track "12 Startups in 12 Months" — built in public.

## Local dev
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Stripe tip button
Set an env var for a Stripe **Payment Link** (no backend needed):
```
NEXT_PUBLIC_PAYMENT_LINK=https://buy.stripe.com/your_link
```

## Edit content
- Scoreboard projects: `src/data/projects.ts`
- Changelog updates: `src/data/updates.json`
- Metrics: `src/data/metrics.json` (static import)

## Deploy to Cloudflare Pages
Use **Next on Pages**:
- Build command: `npx @cloudflare/next-on-pages@1`
- Output dir: `.vercel/output/static`
- Functions dir is auto-detected from `.vercel/output/functions`.
