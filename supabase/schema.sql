-- C&C AI Academy – Supabase Schema
-- Im Supabase-Dashboard unter "SQL Editor" einmalig ausführen.

-- 1) Profile (1:1 zum Auth-User)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default 'Mitglied',
  level text,
  points integer not null default 0,
  streak integer not null default 0,
  last_active date,
  created_at timestamptz not null default now()
);

-- 2) Lektions-Fortschritt
create table if not exists public.lesson_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_id text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

-- 3) Row Level Security
alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;

-- Profile: jede:r darf nur das EIGENE Profil lesen und ändern.
drop policy if exists "profiles_select_all" on public.profiles;
drop policy if exists "profiles_select_self" on public.profiles;
create policy "profiles_select_self" on public.profiles
  for select to authenticated using (auth.uid() = id);

drop policy if exists "profiles_insert_self" on public.profiles;
create policy "profiles_insert_self" on public.profiles
  for insert to authenticated with check (auth.uid() = id);

drop policy if exists "profiles_update_self" on public.profiles;
create policy "profiles_update_self" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Fortschritt: nur eigener Lesezugriff/Schreibzugriff
drop policy if exists "progress_select_self" on public.lesson_progress;
create policy "progress_select_self" on public.lesson_progress
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "progress_modify_self" on public.lesson_progress;
create policy "progress_modify_self" on public.lesson_progress
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
