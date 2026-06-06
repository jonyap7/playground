# WhatsBiz GIG ⚡

**Find Work Today. Find Staff Today.**

A focused gig-work app for Malaysia — *not* another job portal. The whole point
is speed:

> Employer posts a job in 30 seconds. Worker finds a job in 30 seconds.

It's a single self-contained `index.html` — no build, no server, no
dependencies. Open it in a phone browser (it's mobile-first) and tap **Load
demo** to try the full loop.

## The core loop (Phase-1 MVP)

1. **Post Job** — employer fills 6 fields (title, location, date, time, pay,
   number needed) + urgency, then publishes.
2. **Browse Jobs** — workers see swipeable cards, sorted **urgent first, then
   nearest**, with distance ("5 km away"), pay, and spots left.
3. **Apply** — one tap. No CV, no resume. **Apply alone** or **with a friend**
   (Work Buddy mode).
4. **Applicants by reliability** — the employer sees each applicant's ⭐
   Reliability Score, completed jobs and no-shows, and Accepts/Declines.
5. **Chat** — a simple thread per applicant.
6. **Ratings & Reliability** — employer marks "✓ Showed up" or "No-show", which
   updates the worker's Reliability Score. Workers rate employers back (★).

## Key ideas

- **Reliability over resumes** — employers care that staff show up. Every worker
  has a `Reliability % = completed / (completed + no-shows)`.
- **Work Buddy mode** — apply with a friend to reduce fear and lift application
  rates; a buddy application fills 2 spots.
- **Urgent jobs** — `⚡ Need staff today / tomorrow` are pinned to the top.
- **Nearby** — distance-based filtering (within 2 / 5 / 10 km), computed from the
  worker's town. (Penang towns are used as a demo distance grid; real GPS can
  drop in later.)
- **Multilingual** — full UI in English, Bahasa, 中文 and বাংলা, because a big
  share of gig workers are foreign workers.

## Target gigs

Event crew, promoters, waiters, retail helpers, warehouse workers, roadshow
staff, emcees, photographers, dancers, freelancers — the "I need 10 promoters
tomorrow" problem, not full-time hiring.

## Revenue model (not built yet — product direction)

- **Free** — 5 job posts/month
- **RM29/month** — unlimited posts + priority listing
- **RM99/month** — featured jobs + applicant boost + company badge

## Notes

- All data is stored locally in your browser (`localStorage`); the demo runs
  both sides (worker + employer) in one browser so you can see the whole loop.
  Use the **Demo: act as** picker on the Profile screen to apply as different
  workers.
- This is a clickable prototype. A production build would add real accounts,
  GPS, payments, and push notifications.
