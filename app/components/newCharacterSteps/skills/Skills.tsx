'use client'

import { useContext } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import styles from './Skills.module.css';

const MAX_SKILLS = 3;

export default function SkillsStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { skills } = useCatalogs();

  const toggleSkill = (id: string) => {
    setCharacter((prev) => {
      const active = prev.skills.includes(id);
      if (active) {
        return { ...prev, skills: prev.skills.filter((skill) => skill !== id) };
      }
      if (prev.skills.length >= MAX_SKILLS) return prev;
      return { ...prev, skills: [...prev.skills, id] };
    });
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 11</p>
        <h3>Pericias destacadas</h3>
        <span>Escoge hasta {MAX_SKILLS} pericias que describen tus talentos únicos.</span>
      </header>
      <div className={styles.grid}>
        {skills.map((option) => {
          const active = character.skills.includes(option.slug);
          const disabled = !active && character.skills.length >= MAX_SKILLS;
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
              </div>
              <span>{active ? 'Asignada' : 'Asignar'}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

