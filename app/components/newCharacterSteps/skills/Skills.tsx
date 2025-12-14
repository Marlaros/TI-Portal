'use client'

import { useContext, useMemo, useState } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import { useCharacterPreview } from '@/app/hooks/useCharacterPreview';
import styles from './Skills.module.css';

export default function SkillsStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { skills } = useCatalogs();
  const { ready, snapshot } = useCharacterPreview(character);

  const currentSkillBudget = ready && snapshot ? snapshot.resources.skillPoints : 0;
  const selectedSkillCost = character.skills.reduce((sum, slug) => {
    const opt = skills.find((s) => s.slug === slug);
    return sum + (opt?.cost ?? 0);
  }, 0);
  const availableSkillPoints = currentSkillBudget - selectedSkillCost;

  const [filter, setFilter] = useState('');
  const [view, setView] = useState<'grid'|'list'>('grid');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleSkill = (id: string) => {
    setCharacter((prev) => {
      const active = prev.skills.includes(id);
      if (active) {
        return { ...prev, skills: prev.skills.filter((skill) => skill !== id) };
      }
      const opt = skills.find((s) => s.slug === id);
      const cost = opt?.cost ?? 0;
      if ((availableSkillPoints ?? 0) < cost) return prev;
      return { ...prev, skills: [...prev.skills, id] };
    });
  };

  const filtered = useMemo(() => {
    const f = filter.trim().toLowerCase();
    if (!f) return skills;
    return skills.filter((s: any) => (s.name || '').toLowerCase().includes(f));
  }, [skills, filter]);

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 11</p>
        <h3>Pericias destacadas</h3>
        <span>Selecciona pericias usando tus puntos de pericia.</span>
      </header>
      <div className={styles.controls}>
        <input placeholder="Filtrar por nombre..." value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div>
          <button type="button" onClick={() => setView('grid')} className={view === 'grid' ? styles.activeView : ''}>Grid</button>
          <button type="button" onClick={() => setView('list')} className={view === 'list' ? styles.activeView : ''}>Lista</button>
        </div>
      </div>
      <div style={{ marginBottom: 8 }}>
        Puntos de pericia: {ready && snapshot ? snapshot.resources.skillPoints : '—'} — Usados: {selectedSkillCost} — Disponibles: {availableSkillPoints}
      </div>
      <div className={styles.content}>
        {view === 'grid' ? (
          <div className={styles.grid}>
            {filtered.map((option) => {
              const active = character.skills.includes(option.slug);
              const disabled = !active && (availableSkillPoints ?? 0) < (option.cost ?? 0);
              return (
                <div
                  key={option.slug}
                  role="button"
                  tabIndex={disabled ? -1 : 0}
                  aria-disabled={disabled}
                  className={`${styles.card} ${active ? styles.cardActive : ''} ${disabled ? styles.cardDisabled : ''}`}
                  onClick={() => { if (!disabled) toggleSkill(option.slug); }}
                  onKeyDown={(e) => { if (!disabled && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggleSkill(option.slug); } }}
                >
                  <div>
                    <h4>{option.name}</h4>
                    <p className={expanded[option.slug] ? '' : styles.clamped}>{option.description ?? ''}</p>
                    <small>Costo: {option.cost ?? 0}</small>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setExpanded((s) => ({ ...s, [option.slug]: !s[option.slug] })); }} className={styles.pill}>{expanded[option.slug] ? 'Ocultar' : 'Ver más'}</button>
                    <span>{active ? 'Asignada' : 'Asignar'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <ul className={styles.simpleList}>
            {filtered.map((option) => {
              const active = character.skills.includes(option.slug);
              return (
                <li key={option.slug}>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`${styles.card} ${styles.simpleListItem} ${active ? styles.cardActive : ''}`}
                    onClick={() => toggleSkill(option.slug)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSkill(option.slug); } }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <span>{option.name}</span>
                      <small>{active ? 'Asignada' : ''}</small>
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

