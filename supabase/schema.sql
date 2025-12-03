-- Habilitar funciones UUID
create extension if not exists "pgcrypto";

-- Catálogo de razas
create table if not exists public.races (
    id uuid primary key default gen_random_uuid(),
    legacy_id text unique,
    slug text unique not null,
    name text not null,
    short_description text,
    description text,
    image_url text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Variantes / sub-razas
create table if not exists public.race_variants (
    id uuid primary key default gen_random_uuid(),
    legacy_id text unique,
    race_id uuid not null references public.races(id) on delete cascade,
    slug text unique not null,
    name text not null,
    short_description text,
    description text,
    image_url text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists race_variants_race_idx on public.race_variants (race_id);

-- Categorías principales
create table if not exists public.categories (
    id uuid primary key default gen_random_uuid(),
    legacy_id text unique,
    slug text unique not null,
    name text not null,
    role text not null default 'principal',
    short_description text,
    description text,
    image_urls text[] not null default '{}',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Especialidades
create table if not exists public.specialties (
    id uuid primary key default gen_random_uuid(),
    legacy_id text unique,
    category_id uuid not null references public.categories(id) on delete cascade,
    slug text unique not null,
    name text not null,
    short_description text,
    description text,
    image_urls text[] not null default '{}',
    allowed_races text[] not null default '{}',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists specialties_category_idx on public.specialties (category_id);

-- Personajes creados por usuarios
create table if not exists public.characters (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade,
    name text not null,
    level int not null default 1,
    alignment text,
    description jsonb not null default '{}',
    attributes jsonb not null,
    selections jsonb not null,
    snapshot jsonb,
    version int not null default 1,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists characters_user_idx on public.characters (user_id);

-- Historial de versiones de personajes
create table if not exists public.character_versions (
    id uuid primary key default gen_random_uuid(),
    character_id uuid not null references public.characters(id) on delete cascade,
    version int not null,
    snapshot jsonb not null,
    created_at timestamptz not null default now()
);

create index if not exists character_versions_character_idx on public.character_versions (character_id);


-- Ventajas
create table if not exists public.advantages (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    name text not null,
    cost int not null default 0,
    description text,
    modifiers jsonb not null default '[]'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Desventajas
create table if not exists public.disadvantages (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    name text not null,
    reward int not null default 0,
    description text,
    modifiers jsonb not null default '[]'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Equipo
create table if not exists public.equipment (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    name text not null,
    slot text not null,
    description text,
    modifiers jsonb not null default '[]'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Estilos de lucha
create table if not exists public.fighting_styles (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    name text not null,
    style_key text not null,
    description text,
    modifiers jsonb not null default '[]'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Especializaciones en armas
create table if not exists public.weapon_masteries (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    name text not null,
    weapon_tag text,
    description text,
    modifiers jsonb not null default '[]'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Pericias
create table if not exists public.skills (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    name text not null,
    description text,
    modifiers jsonb not null default '[]'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

