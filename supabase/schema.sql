-- WhatsBiz GIG — minimal cloud sync schema
-- One JSON document per "room"; the app reads/writes the whole blob and
-- subscribes to realtime changes so devices in the same room stay in sync.

create table if not exists public.gig_rooms (
  id          text primary key,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.gig_rooms enable row level security;

-- PROTOTYPE policies: allow the anon key to read/write the shared room.
-- Tighten these (per-user auth, room ownership) before any real launch.
drop policy if exists "gig anon read"   on public.gig_rooms;
drop policy if exists "gig anon insert" on public.gig_rooms;
drop policy if exists "gig anon update" on public.gig_rooms;
create policy "gig anon read"   on public.gig_rooms for select using (true);
create policy "gig anon insert" on public.gig_rooms for insert with check (true);
create policy "gig anon update" on public.gig_rooms for update using (true) with check (true);

-- Enable realtime for live sync across devices.
alter publication supabase_realtime add table public.gig_rooms;
