import { NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/serverClient';
import { CatalogBootstrapPayload } from '@/types/catalog';

const supabase = createServiceClient();

const mapRaces = (rows: any[]) =>
  rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    shortDescription: row.short_description ?? null,
    description: row.description ?? null,
    imageUrl: row.image_url ?? null,
    modifiers: row.modifiers ?? []
  }));

const mapRaceVariants = (rows: any[], raceIndex: Map<string, { name: string; slug: string }>) =>
  rows.map((row) => {
    const race = raceIndex.get(row.race_id) ?? { name: '', slug: '' };
    return {
      id: row.id,
      slug: row.slug,
      name: row.name,
      shortDescription: row.short_description ?? null,
      description: row.description ?? null,
      imageUrl: row.image_url ?? null,
      raceId: row.race_id,
      raceName: race.name,
      raceSlug: race.slug,
      modifiers: row.modifiers ?? []
    };
  });

const mapCategories = (rows: any[]) =>
  rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    role: row.role,
    shortDescription: row.short_description ?? null,
    description: row.description ?? null,
    imageUrls: row.image_urls ?? [],
    allowedRaces: row.allowed_races ?? [],
    modifiers: row.modifiers ?? []
  }));

const mapSpecialties = (rows: any[], categoryIndex: Map<string, { name: string }>) =>
  rows.map((row) => {
    const category = categoryIndex.get(row.category_id) ?? { name: '' };
    return {
      id: row.id,
      slug: row.slug,
      name: row.name,
      shortDescription: row.short_description ?? null,
      description: row.description ?? null,
      imageUrls: row.image_urls ?? [],
      categoryId: row.category_id,
      categoryName: category.name,
      allowedRaces: row.allowed_races ?? [],
      modifiers: row.modifiers ?? []
    };
  });

const mapStandard = (rows: any[]) =>
  rows.map((row) => ({
    slug: row.slug,
    name: row.name,
    description: row.description ?? null,
    modifiers: row.modifiers ?? []
  }));

const mapSkills = (rows: any[]) =>
  rows.map((row) => ({
    slug: row.slug,
    name: row.name,
    description: row.description ?? null,
    attribute: row.attribute ?? null,
    cost: row.cost ?? null,
    modifiers: row.modifiers ?? []
  }));

export async function GET() {
  try {
    const [racesRes, variantsRes, categoriesRes, specialtiesRes, advantagesRes, disadvantagesRes, equipmentRes, stylesRes, masteriesRes, skillsRes] =
      await Promise.all([
        supabase.from('races').select('*').order('name'),
        supabase.from('race_variants').select('*').order('name'),
        supabase.from('categories').select('*').order('name'),
        supabase.from('specialties').select('*').order('name'),
        supabase.from('advantages').select('*').order('name'),
        supabase.from('disadvantages').select('*').order('name'),
        supabase.from('equipment').select('*').order('name'),
        supabase.from('fighting_styles').select('*').order('name'),
        supabase.from('weapon_masteries').select('*').order('name'),
        supabase.from('skills').select('*').order('name')
      ]);

    const error =
      racesRes.error ||
      variantsRes.error ||
      categoriesRes.error ||
      specialtiesRes.error ||
      advantagesRes.error ||
      disadvantagesRes.error ||
      equipmentRes.error ||
      stylesRes.error ||
      masteriesRes.error ||
      skillsRes.error;

    if (error) {
      throw error;
    }

    const raceIndex = new Map((racesRes.data ?? []).map((row) => [row.id, { name: row.name, slug: row.slug }]));
    const categoryIndex = new Map((categoriesRes.data ?? []).map((row) => [row.id, { name: row.name }]));

    const payload: CatalogBootstrapPayload = {
      races: mapRaces(racesRes.data ?? []),
      raceVariants: mapRaceVariants(variantsRes.data ?? [], raceIndex),
      categories: mapCategories(categoriesRes.data ?? []),
      specialties: mapSpecialties(specialtiesRes.data ?? [], categoryIndex),
      advantages: (advantagesRes.data ?? []).map((row) => ({
        ...mapStandard([row])[0],
        cost: row.cost ?? 0
      })),
      disadvantages: (disadvantagesRes.data ?? []).map((row) => ({
        ...mapStandard([row])[0],
        reward: row.reward ?? 0
      })),
      equipment: (equipmentRes.data ?? []).map((row) => ({
        ...mapStandard([row])[0],
        slot: row.slot
      })),
      fightingStyles: (stylesRes.data ?? []).map((row) => ({
        ...mapStandard([row])[0],
        styleKey: row.style_key
      })),
      weaponMasteries: (masteriesRes.data ?? []).map((row) => ({
        ...mapStandard([row])[0],
        weaponTag: row.weapon_tag ?? null
      })),
      skills: mapSkills(skillsRes.data ?? [])
    };

    return NextResponse.json(payload, { status: 200 });
  } catch (error) {
    console.error('Catalog bootstrap error:', error);
    return NextResponse.json({ error: 'Failed to load catalogs' }, { status: 500 });
  }
}


