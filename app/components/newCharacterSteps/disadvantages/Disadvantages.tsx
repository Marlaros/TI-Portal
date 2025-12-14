'use client'

import { useContext } from 'react';
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

  const toggle = (id: string) => {
    setCharacter((prev) => {
      const active = prev.disadvantages.includes(id);
      if (active) {
        return { ...prev, disadvantages: prev.disadvantages.filter((opt) => opt !== id) };
      }
      return { ...prev, disadvantages: [...prev.disadvantages, id] };
    });
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 7</p>
        <h3>Elige desventajas (otorgan puntos de ventaja)</h3>
        <span>Las debilidades equilibran el poder y también pueden otorgar recompensas narrativas.</span>
      </header>
      <div style={{ marginBottom: 8 }}>Puntos disponibles: {ready && snapshot ? snapshot.resources.advantagePoints : '—'} — Usados: {selectedCosts} — Disponibles: {availableAdvantagePoints}</div>
      <div className={styles.grid}>
        {disadvantages.map((option) => {
          const active = character.disadvantages.includes(option.slug);
          const disabled = false;
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

