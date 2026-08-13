-- ============================================================
-- FRENCH STUDY HUB — DATABASE SCHEMA
-- Run this in the Supabase SQL Editor for a fresh project setup
-- ============================================================

-- =========================
-- PROFILES
-- =========================
create table public.profiles (
    id uuid references auth.users(id) on delete cascade primary key,
    email text,
    username text,
    created_at timestamp with time zone default now()
);

-- =========================
-- XP TABLE
-- =========================
create table public.user_xp (
    id uuid default gen_random_uuid() primary key,
    user_id uuid
        references auth.users(id)
        on delete cascade
        unique,
    xp integer default 0,
    level integer default 1,
    created_at timestamp with time zone default now()
);

-- =========================
-- NOTES
-- =========================
create table public.notes (
    id uuid default gen_random_uuid() primary key,
    user_id uuid
        references auth.users(id)
        on delete cascade,
    title text default 'Untitled',
    content text default '',
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- =========================
-- CHAT USAGE (server-side rate limiting)
-- =========================
create table public.chat_usage (
    user_id uuid references auth.users(id) on delete cascade,
    usage_date date not null default current_date,
    message_count integer not null default 0,
    primary key (user_id, usage_date)
);

-- =========================
-- ENABLE RLS
-- =========================
alter table public.profiles enable row level security;
alter table public.user_xp enable row level security;
alter table public.notes enable row level security;
alter table public.chat_usage enable row level security;

-- =========================
-- PROFILE POLICIES
-- =========================
create policy "Users can view own profile"
on public.profiles for select
using (auth.uid() = id);

create policy "Users can update own profile"
on public.profiles for update
using (auth.uid() = id);

-- =========================
-- XP POLICIES
-- =========================
create policy "Users can view own xp"
on public.user_xp for select
using (auth.uid() = user_id);

create policy "Users can update own xp"
on public.user_xp for update
using (auth.uid() = user_id);

create policy "Users can insert own xp"
on public.user_xp for insert
with check (auth.uid() = user_id);

-- =========================
-- NOTES POLICIES
-- =========================
create policy "Users can read own notes"
on public.notes for select
using (auth.uid() = user_id);

create policy "Users can create own notes"
on public.notes for insert
with check (auth.uid() = user_id);

create policy "Users can update own notes"
on public.notes for update
using (auth.uid() = user_id);

create policy "Users can delete own notes"
on public.notes for delete
using (auth.uid() = user_id);

-- =========================
-- CHAT USAGE POLICIES
-- =========================
create policy "Users can view own chat usage"
on public.chat_usage for select
using (auth.uid() = user_id);

create policy "Users can insert own chat usage"
on public.chat_usage for insert
with check (auth.uid() = user_id);

create policy "Users can update own chat usage"
on public.chat_usage for update
using (auth.uid() = user_id);

-- =========================
-- AUTO CREATE PROFILE + XP
-- AFTER SIGNUP
-- =========================
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles(id, email) values (new.id, new.email);
  insert into public.user_xp(user_id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();
