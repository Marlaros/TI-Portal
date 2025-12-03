'use client'

import { useContext } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import styles from './Advantages.module.css';

const MAX_ADVANTAGES = 2;

export default function AdvantagesStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { advantages } = useCatalogs();

  const toggleAdvantage = (id: string) => {
    setCharacter((prev) => {
      const isSelected = prev.advantages.includes(id);
      if (isSelected) {
        return { ...prev, advantages: prev.advantages.filter((adv) => adv !== id) };
      }
      if (prev.advantages.length >= MAX_ADVANTAGES) {
        return prev;
      }
      return { ...prev, advantages: [...prev.advantages, id] };
    });
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 6</p>
        <h3>Selecciona hasta {MAX_ADVANTAGES} ventajas</h3>
        <span>Las ventajas otorgan bonificadores especiales y se aplican a la hoja final.</span>
      </header>
      <div className={styles.grid}>
        {advantages.map((option) => {
          const active = character.advantages.includes(option.slug);
          const disabled = !active && character.advantages.length >= MAX_ADVANTAGES;
          return (
            <button
              key={option.slug}
              type="button"
              className={`${styles.card} ${active ? styles.cardActive : ''}`}
              onClick={() => toggleAdvantage(option.slug)}
              disabled={disabled}
            >
              <div>
                <h4>{option.name}</h4>
                <p>{option.description ?? ''}</p>
                <small>Coste: {option.cost}</small>
              </div>
              <span>{active ? 'Seleccionada' : 'Seleccionar'}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

