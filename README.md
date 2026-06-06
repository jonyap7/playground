# ShiftMatch — Part-Timer Matching

A simple but useful tool to match part-time workers with shifts/jobs. It's a
single self-contained `index.html` file — no build step, no server, no
dependencies. Just open it in a browser.

## Run it

Open `index.html` in any modern browser (double-click it, or serve the folder).
Click **Load demo data** to try it instantly.

## What it does

- **Post jobs** — title, employer, required skills, area, pay offered, days &
  time slots needed.
- **Add workers** — name, skills, preferred area (or "Anywhere"), desired pay,
  available days & time slots.
- **Browse & Match** — pick a job to see the best-ranked workers, or pick a
  worker to see the best-ranked jobs. Each result shows a match score with a
  breakdown and a plain-English explanation.

## How matching works

Each worker↔job pair gets a 0–100 score, weighted across four factors:

| Factor        | Weight | Logic |
|---------------|:------:|-------|
| Skills / role | 35%    | Share of the job's required skills the worker has |
| Availability  | 30%    | Overlap of needed days (60%) and time slots (40%) |
| Location      | 15%    | Same area, or worker open to "Anywhere" |
| Pay           | 20%    | Full if offered ≥ desired; scaled below that |

Weights live in the `WEIGHTS` constant in `index.html` and are easy to tweak.

## Data

Everything is stored locally in your browser via `localStorage` — nothing is
sent anywhere. Use **Clear all** to reset.
