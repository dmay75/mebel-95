create extension if not exists "pgcrypto";

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null default '',
  category_slug text not null default '',
  subcategory text,
  price text not null default '',
  image text not null default '',
  images text[] not null default '{}',
  description text not null default '',
  characteristics jsonb not null default '[]'::jsonb,
  variants jsonb not null default '[]'::jsonb,
  colors text[] not null default '{}',
  color_options jsonb not null default '[]'::jsonb,
  add_ons jsonb not null default '[]'::jsonb,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_slug_idx on public.products (category_slug);
create index if not exists products_subcategory_idx on public.products (subcategory);
create index if not exists products_is_active_idx on public.products (is_active);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.products enable row level security;
alter table public.site_settings enable row level security;

drop policy if exists "Public can read active products" on public.products;
create policy "Public can read active products"
on public.products
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "Public can read settings" on public.site_settings;
create policy "Public can read settings"
on public.site_settings
for select
to anon, authenticated
using (true);
