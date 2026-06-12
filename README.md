# WhatsBiz GIG ⚡

**Find Work Today. Find Staff Today.**

A focused gig-work app for Malaysia — *not* another job portal. The whole point
is speed:

> Employer posts a job in 30 seconds. Worker finds a job in 30 seconds.

This is a **Next.js 16 / React 19** app (so it deploys to Vercel out of the
box). The whole WhatsBiz GIG experience is a self-contained mobile-first UI.

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
6. **Two-way ratings & Reliability** — employer marks "✓ Showed up" or "No-show"
   (updating Reliability), then rates the worker ★1–5. That ★ score shows on the
   worker's applicant card and profile, so the next employer trusts them faster.
   Workers rate employers back (★) too — reputation flows both ways.

## Key ideas

- **Reliability over resumes** — `Reliability % = completed / (completed + no-shows)`.
- **Two-way reputation** — workers rate employers *and* employers rate workers
  (`★ = ratingSum / ratingCount`). The closed loop is the marketplace's trust moat.
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
- **Categories & search** — jobs are tagged by gig type (Event Crew, Promoter,
  Waiter, Retail, Warehouse, Roadshow, Kitchen, Cleaning, Emcee, Photographer…)
  with icons, a quick category filter row, and a keyword search box.
- **Map view** — a List ⇄ Map toggle shows nearby jobs on a real OpenStreetMap
  map (Leaflet, no API key); tap a marker to apply. Falls back to an offline
  distance-ring mini-map if map tiles can't load.
- **Saved jobs & history** — bookmark jobs (🔖) and filter to saved only; filter
  your applications by status (Waiting / Accepted / Completed).
- **Multilingual** — full UI in English, Bahasa, 中文 and বাংলা.

## Cloud sync (optional)

By default everything is local to the browser. Add a Supabase project and the
app live-syncs across devices in the same **room**, so two phones actually see
each other's jobs, applications and chat.

1. Create a project at supabase.com and run `supabase/schema.sql`.
2. Set the env vars (see `.env.example`) locally and in Vercel:
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
   `NEXT_PUBLIC_GIG_ROOM`.

When configured, the Profile/Business screen shows **☁️ Cloud sync on**;
otherwise **📴 Local only**. The Supabase client is loaded from a CDN at
runtime, so no extra build dependency is added. (The included RLS policies are
permissive for prototyping — tighten them before a real launch.)

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
