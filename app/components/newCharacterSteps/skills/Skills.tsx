'use client'

import { useContext } from 'react';
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

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 11</p>
        <h3>Pericias destacadas</h3>
        <span>Selecciona pericias usando tus puntos de pericia.</span>
      </header>
      <div style={{ marginBottom: 8 }}>
        Puntos de pericia: {ready && snapshot ? snapshot.resources.skillPoints : '—'} — Usados: {selectedSkillCost} — Disponibles: {availableSkillPoints}
      </div>
      <div className={styles.grid}>
        {skills.map((option) => {
          const active = character.skills.includes(option.slug);
          const disabled = !active && (availableSkillPoints ?? 0) < (option.cost ?? 0);
          return (
            <button
              key={option.slug}
              type="button"
              className={`${styles.card} ${active ? styles.cardActive : ''}`}
              onClick={() => toggleSkill(option.slug)}
              disabled={disabled}
            >
              <div>
                <h4>{option.name}</h4>
                <p>{option.description ?? ''}</p>
                <small>Costo: {option.cost ?? 0}</small>
              </div>
              <span>{active ? 'Asignada' : 'Asignar'}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

