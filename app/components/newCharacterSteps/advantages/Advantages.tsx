'use client'

import { useContext, useMemo, useState } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import { useCharacterPreview } from '@/app/hooks/useCharacterPreview';
import styles from './Advantages.module.css';

export default function AdvantagesStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { advantages } = useCatalogs();
  const { ready, snapshot } = useCharacterPreview(character);

  const currentAdvantageBudget = ready && snapshot ? snapshot.resources.advantagePoints : 0;
  const selectedCosts = character.advantages.reduce((sum, slug) => {
    const opt = advantages.find((a) => a.slug === slug);
    return sum + (opt?.cost ?? 0);
  }, 0);
  const availableAdvantagePoints = currentAdvantageBudget - selectedCosts;

  const toggleAdvantage = (id: string) => {
    setCharacter((prev) => {
      const isSelected = prev.advantages.includes(id);
      if (isSelected) {
        return { ...prev, advantages: prev.advantages.filter((adv) => adv !== id) };
      }
      // check cost against available points
      const opt = advantages.find((a) => a.slug === id);
      const cost = opt?.cost ?? 0;
      if ((availableAdvantagePoints ?? 0) < cost) return prev;
      return { ...prev, advantages: [...prev.advantages, id] };
    });
  };

  const [filter, setFilter] = useState('');
  const [view, setView] = useState<'grid'|'list'>('grid');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    const f = filter.trim().toLowerCase();
    if (!f) return advantages;
    return advantages.filter((a) => (a.name || '').toLowerCase().includes(f));
  }, [advantages, filter]);

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 6</p>
        <h3>Selecciona ventajas usando tus puntos</h3>
        <span>Las ventajas otorgan bonificadores especiales y se aplican a la hoja final.</span>
      </header>
      <div className={styles.controls}>
        <input placeholder="Filtrar por nombre..." value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div>
          <button type="button" onClick={() => setView('grid')} className={view === 'grid' ? styles.activeView : ''}>Grid</button>
          <button type="button" onClick={() => setView('list')} className={view === 'list' ? styles.activeView : ''}>Lista</button>
        </div>
      </div>
      <div style={{ marginBottom: 8 }}>Puntos de ventaja: {ready && snapshot ? snapshot.resources.advantagePoints : '—'} — Usados: {selectedCosts} — Disponibles: {availableAdvantagePoints}</div>
      <div className={styles.content}>
        {view === 'grid' ? (
          <div className={styles.grid}>
            {filtered.map((option) => {
              const active = character.advantages.includes(option.slug);
              const disabled = !active && (availableAdvantagePoints ?? 0) < (option.cost ?? 0);
              return (
                <div
                  key={option.slug}
                  role="button"
                  tabIndex={disabled ? -1 : 0}
                  aria-disabled={disabled}
                  className={`${styles.card} ${active ? styles.cardActive : ''} ${disabled ? styles.cardDisabled : ''}`}
                  onClick={() => { if (!disabled) toggleAdvantage(option.slug); }}
                  onKeyDown={(e) => { if (!disabled && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggleAdvantage(option.slug); } }}
                >
                  <div>
                    <h4>{option.name}</h4>
                    <p className={expanded[option.slug] ? '' : styles.clamped}>{option.description ?? ''}</p>
                    <small>Coste: {option.cost}</small>
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
              const active = character.advantages.includes(option.slug);
              return (
                <li key={option.slug}>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`${styles.card} ${styles.simpleListItem} ${active ? styles.cardActive : ''}`}
                    onClick={() => toggleAdvantage(option.slug)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAdvantage(option.slug); } }}
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

