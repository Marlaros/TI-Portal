'use client'

import { useContext, useMemo, useState } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import { useCharacterPreview } from '@/app/hooks/useCharacterPreview';
import styles from './Disadvantages.module.css';

export default function DisadvantagesStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { disadvantages, advantages } = useCatalogs();

  const { ready, snapshot } = useCharacterPreview(character);
  const currentAdvantageBudget = ready && snapshot ? snapshot.resources.advantagePoints : 0;
  const selectedCosts = character.advantages.reduce((sum, slug) => {
    const opt = advantages.find((a) => a.slug === slug);
    return sum + (opt?.cost ?? 0);
  }, 0);
  const availableAdvantagePoints = currentAdvantageBudget - selectedCosts;

  const [filter, setFilter] = useState('');
  const [view, setView] = useState<'grid'|'list'>('grid');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setCharacter((prev) => {
      const active = prev.disadvantages.includes(id);
      if (active) {
        return { ...prev, disadvantages: prev.disadvantages.filter((opt) => opt !== id) };
      }
      return { ...prev, disadvantages: [...prev.disadvantages, id] };
    });
  };

  const filtered = useMemo(() => {
    const f = filter.trim().toLowerCase();
    if (!f) return disadvantages;
    return disadvantages.filter((d: any) => (d.name || '').toLowerCase().includes(f));
  }, [disadvantages, filter]);

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 7</p>
        <h3>Elige desventajas (otorgan puntos de ventaja)</h3>
        <span>Las debilidades equilibran el poder y también pueden otorgar recompensas narrativas.</span>
      </header>
      <div className={styles.controls}>
        <input placeholder="Filtrar por nombre..." value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div>
          <button type="button" onClick={() => setView('grid')} className={view === 'grid' ? styles.activeView : ''}>Grid</button>
          <button type="button" onClick={() => setView('list')} className={view === 'list' ? styles.activeView : ''}>Lista</button>
        </div>
      </div>
      <div style={{ marginBottom: 8 }}>Puntos disponibles: {ready && snapshot ? snapshot.resources.advantagePoints : '—'} — Usados: {selectedCosts} — Disponibles: {availableAdvantagePoints}</div>
      <div className={styles.content}>
        {view === 'grid' ? (
          <div className={styles.grid}>
            {filtered.map((option) => {
              const active = character.disadvantages.includes(option.slug);
              const disabled = false;
              return (
                <div
                  key={option.slug}
                  role="button"
                  tabIndex={0}
                  className={`${styles.card} ${active ? styles.cardActive : ''}`}
                  onClick={() => toggle(option.slug)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(option.slug); } }}
                >
                  <div>
                    <h4>{option.name}</h4>
                    <p className={expanded[option.slug] ? '' : styles.clamped}>{option.description ?? ''}</p>
                    <small>Recompensa: {option.reward}</small>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setExpanded((s) => ({ ...s, [option.slug]: !s[option.slug] })); }} className={styles.pill}>{expanded[option.slug] ? 'Ocultar' : 'Ver más'}</button>
                    <span>{active ? 'Seleccionada' : 'Seleccionar'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <ul className={styles.simpleList}>
            {filtered.map((option) => {
              const active = character.disadvantages.includes(option.slug);
              return (
                <li key={option.slug}>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`${styles.card} ${styles.simpleListItem} ${active ? styles.cardActive : ''}`}
                    onClick={() => toggle(option.slug)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(option.slug); } }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <span>{option.name}</span>
                      <small>{active ? 'Seleccionada' : ''}</small>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

