import { NextResponse } from 'next/server';

import { createServiceClient } from '@/lib/supabase/serverClient';
import type { Character } from '@/app/characters/new/character.type';
import type { CharacterSnapshot } from '@/domain/snapshot';

type CreateCharacterPayload = {
  character: Character;
  snapshot: CharacterSnapshot;
};

const sanitizeText = (value: unknown) =>
  typeof value === 'string' ? value.trim() : '';

const buildSelections = (character: Character) => ({
  race: character.race,
  raceType: character.raceType,
  category: character.category,
  secondaryCategory: character.secondaryCategory,
  specialty: character.specialty,
  fightingStyle: character.fightingStyle,
  weaponSpecialization: character.weaponSpecialization,
  advantages: character.advantages,
  disadvantages: character.disadvantages,
  equipment: character.equipment,
  mounts: character.mounts,
  skills: character.skills,
  skillRanks: character.skillRanks,
  stats: character.stats,
  countryOfOrigin: character.countryOfOrigin,
  experience: character.experience,
  experiencePenalty: character.experiencePenalty
});

export async function GET(request: Request) {
  try {
    const supabase = createServiceClient();
    const { searchParams } = new URL(request.url);
    const owner = sanitizeText(searchParams.get('owner'));

    let query = supabase
      .from('characters')
      .select('id, owner_name, name, level, alignment, description, attributes, selections, snapshot, created_at')
      .order('created_at', { ascending: false });

    if (owner) {
      query = query.eq('owner_name', owner);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return NextResponse.json({ characters: data ?? [] }, { status: 200 });
  } catch (error) {
    console.error('Characters API GET error:', error);
    return NextResponse.json({ error: 'Failed to load characters' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createServiceClient();
    const body = (await request.json()) as CreateCharacterPayload;
    const { character, snapshot } = body;

    if (!character || !snapshot) {
      return NextResponse.json({ error: 'Character and snapshot are required' }, { status: 400 });
    }

    const ownerName = sanitizeText(character.userName);
    if (!ownerName) {
      return NextResponse.json({ error: 'El nombre del usuario es obligatorio.' }, { status: 400 });
    }

    const characterName = sanitizeText(character.name);
    if (!characterName) {
      return NextResponse.json({ error: 'El nombre del personaje es obligatorio.' }, { status: 400 });
    }

    const selections = buildSelections(character);

    const { data, error } = await supabase
      .from('characters')
      .insert({
        owner_name: ownerName,
        user_id: null,
        name: characterName,
        level: character.level ?? 1,
        alignment: sanitizeText(character.alignment) || null,
        description: character.descripcion ?? {},
        attributes: character.attributes ?? {},
        selections,
        snapshot,
        version: 1
      })
      .select('id')
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ id: data?.id }, { status: 201 });
  } catch (error) {
    console.error('Characters API POST error:', error);
    return NextResponse.json({ error: 'Failed to create character' }, { status: 500 });
  }
}


