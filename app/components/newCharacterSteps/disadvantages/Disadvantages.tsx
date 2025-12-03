'use client'

import { useContext } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import styles from './Disadvantages.module.css';

const MAX_DISADVANTAGES = 2;

export default function DisadvantagesStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { disadvantages } = useCatalogs();

  const toggle = (id: string) => {
    setCharacter((prev) => {
      const active = prev.disadvantages.includes(id);
      if (active) {
        return { ...prev, disadvantages: prev.disadvantages.filter((opt) => opt !== id) };
      }
      if (prev.disadvantages.length >= MAX_DISADVANTAGES) return prev;
      return { ...prev, disadvantages: [...prev.disadvantages, id] };
    });
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 7</p>
        <h3>Elige hasta {MAX_DISADVANTAGES} desventajas</h3>
        <span>Las debilidades equilibran el poder y también pueden otorgar recompensas narrativas.</span>
      </header>
      <div className={styles.grid}>
        {disadvantages.map((option) => {
          const active = character.disadvantages.includes(option.slug);
          const disabled = !active && character.disadvantages.length >= MAX_DISADVANTAGES;
          return (
            <button
              key={option.slug}
              type="button"
              className={`${styles.card} ${active ? styles.cardActive : ''}`}
              onClick={() => toggle(option.slug)}
              disabled={disabled}
            >
              <div>
                <h4>{option.name}</h4>
                <p>{option.description ?? ''}</p>
                <small>Recompensa: {option.reward}</small>
              </div>
              <span>{active ? 'Seleccionada' : 'Seleccionar'}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

