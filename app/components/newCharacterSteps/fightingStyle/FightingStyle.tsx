'use client'

import { useContext } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import styles from './FightingStyle.module.css';

export default function FightingStyleStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { fightingStyles } = useCatalogs();

  const selectStyle = (id: string, key: string) => {
    setCharacter((prev) => ({
      ...prev,
      fightingStyle: id,
      // guard weapon specialization later
    }));
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 9</p>
        <h3>Estilo de lucha</h3>
        <span>Define la forma en que tu héroe se mueve y ataca en combate.</span>
      </header>
      <div className={styles.grid}>
        {fightingStyles.map((style) => {
          const active = character.fightingStyle === style.slug;
          return (
            <button
              key={style.slug}
              type="button"
              className={`${styles.card} ${active ? styles.cardActive : ''}`}
              onClick={() => selectStyle(style.slug, style.styleKey)}
            >
              <h4>{style.name}</h4>
              <p>{style.description ?? ''}</p>
              <span>{active ? 'Seleccionado' : 'Seleccionar'}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

