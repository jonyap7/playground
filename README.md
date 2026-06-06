# WhatsBiz GIG ⚡

**Find Work Today. Find Staff Today.**

A focused gig-work app for Malaysia — *not* another job portal. The whole point
is speed:

> Employer posts a job in 30 seconds. Worker finds a job in 30 seconds.

This is a **Next.js** app (so it deploys to Vercel out of the box). The whole
WhatsBiz GIG experience is a self-contained mobile-first UI.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Build / production:

```bash
npm run build
npm run start
```

## Deploy (Vercel)

Push this repo and import it in Vercel. Because `package.json` lists `next`,
Vercel auto-detects the framework — no config needed. Make sure the project's
**Root Directory** points at the repo root (where `package.json` lives).

## Project structure

```
app/
  layout.js      # root layout, metadata, global CSS
  page.js        # renders the app shell + loads the logic
  globals.css    # all styles
  icon.svg       # favicon
public/
  gig.js               # the WhatsBiz GIG app logic (vanilla JS, runs client-side)
  manifest.webmanifest # PWA manifest
  sw.js                # service worker (network-first, cache fallback)
  icon-192/512/maskable.png  # PWA icons
  standalone.html      # the original zero-build single-file version (open in any browser)
```

The app is intentionally framework-light: `page.js` renders the static shell and
loads `public/gig.js`, which drives the whole UI. This keeps the prototype fast
to iterate on; it can be ported to React components incrementally as it grows.

## The core loop (Phase-1 MVP)

1. **Post Job** — employer fills 6 fields (title, location, date, time, pay,
   number needed) + urgency, then publishes.
2. **Browse Jobs** — workers see cards, sorted **urgent first, then nearest**,
   with distance, pay, and spots left.
3. **Apply** — one tap. No CV. **Apply alone** or **with a friend** (Work Buddy).
4. **Applicants by reliability** — employer sees each applicant's ⭐ Reliability
   Score, completed jobs and no-shows, and Accepts/Declines.
5. **Chat** — a simple thread per applicant.
6. **Ratings & Reliability** — employer marks "✓ Showed up" or "No-show", which
   updates the worker's Reliability Score. Workers rate employers back (★).

## Key ideas

- **Reliability over resumes** — `Reliability % = completed / (completed + no-shows)`.
- **Work Buddy mode** — apply with a friend; a buddy application fills 2 spots.
- **Urgent jobs** — `⚡ Need staff today / tomorrow` are pinned to the top.
- **Nearby** — distance filtering (within 2 / 5 / 10 km), with optional **live GPS**
  ("Use my location" → haversine distance, falling back to the town grid).
- **Notifications** — in-app bell + feed: applies, accept/decline, new messages,
  and new urgent jobs.
- **Share to WhatsApp** — every job has a one-tap share that opens WhatsApp with
  the job details and a deep link (`/?job=<id>`) that drops the recipient
  straight into the apply screen. This is how gig staffing actually spreads.
- **Installable PWA** — manifest + icons + service worker, so it can be added to
  the home screen and works offline. An in-app **Install** button appears when
  the browser offers it.
- **Multilingual** — full UI in English, Bahasa, 中文 and বাংলা.

## Monetization (built into the prototype)

Employers have a **plan** (set on the Business screen):

- **Free (RM0)** — capped at 5 job posts (with an upgrade prompt).
- **Pro (RM29/mo)** — unlimited posts + priority listing.
- **Premium (RM99/mo)** — Featured jobs (gold, pinned to the top) + company badge.

## Revenue model (product direction)

- **Free** — 5 job posts/month
- **RM29/month** — unlimited posts + priority listing
- **RM99/month** — featured jobs + applicant boost + company badge

## Notes

- Data is stored locally in the browser (`localStorage`); the demo runs both
  sides (worker + employer) in one browser. Use **Demo: act as** on the Profile
  screen to apply as different workers.
- This is a clickable prototype. Production would add real accounts, GPS,
  payments, and push notifications.
