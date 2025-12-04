import type { CSSProperties } from 'react';

import { createServiceClient } from '@/lib/supabase/serverClient';

import { UsernameFilter } from './UsernameFilter';

interface CharacterRow {
  id: string;
  owner_name: string;
  name: string;
  level: number;
  alignment: string | null;
  selections: Record<string, any> | null;
  created_at: string;
}

const cardStyle: CSSProperties = {
  border: '1px solid rgba(243,230,204,0.2)',
  borderRadius: '24px',
  padding: '1.5rem',
  background: 'rgba(12,21,18,0.8)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

export default async function UserCharacters({
  params
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const supabase = createServiceClient();
  const { data, error } = (await supabase
    .from('characters')
    .select('id, owner_name, name, level, alignment, selections, created_at')
    .eq('owner_name', userId)
    .order('created_at', { ascending: false })) as { data: CharacterRow[] | null; error: any };

  const characters = data ?? [];

  return (
    <div style={{ padding: '3% 5%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center'
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Personajes de {userId}</h1>
        <p style={{ margin: 0, color: 'rgba(243,230,204,0.75)' }}>
          Ingresa tu nombre de usuario para listar los personajes que hayas creado.
        </p>
        <UsernameFilter initialValue={userId} />
      </header>

      {error && (
        <div
          style={{
            borderRadius: '24px',
            border: '1px solid rgba(255,120,120,0.4)',
            padding: '1rem',
            color: '#f29b9b',
            textAlign: 'center'
          }}
        >
          No se pudieron cargar los personajes. Intenta nuevamente.
        </div>
      )}

      {!error && (
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {characters.length ? (
            characters.map((character) => {
              const selections = character.selections ?? {};
              return (
                <article key={character.id} style={cardStyle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '1.25rem' }}>{character.name}</strong>
                    <span style={{ opacity: 0.7 }}>Nivel {character.level}</span>
                  </div>
                  <p style={{ margin: 0, color: 'rgba(243,230,204,0.75)' }}>
                    {selections.category ?? '—'} / {selections.specialty ?? '—'}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>
                    Raza: {selections.race ?? '—'}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>
                    Estilo: {selections.fightingStyle ?? '—'}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>
                    Arma predilecta: {selections.weaponSpecialization ?? '—'}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.5 }}>
                    Creado el {new Date(character.created_at).toLocaleString()}
                  </p>
                </article>
              );
            })
          ) : (
            <div
              style={{
                borderRadius: '24px',
                border: '1px dashed rgba(243,230,204,0.3)',
                padding: '2rem',
                textAlign: 'center',
                color: 'rgba(243,230,204,0.75)'
              }}
            >
              No se encontraron personajes para {userId}
            </div>
          )}
        </section>
      )}
    </div>
  );
}