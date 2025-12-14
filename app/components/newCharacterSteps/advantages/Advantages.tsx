'use client'

import { useContext } from 'react';
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

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 6</p>
        <h3>Selecciona ventajas usando tus puntos</h3>
        <span>Las ventajas otorgan bonificadores especiales y se aplican a la hoja final.</span>
      </header>
      <div className={styles.grid}>
        <div style={{ marginBottom: 8 }}>
          Puntos de ventaja: {ready && snapshot ? snapshot.resources.advantagePoints : '—'} — Usados: {selectedCosts} — Disponibles: {availableAdvantagePoints}
        </div>
        {advantages.map((option) => {
          const active = character.advantages.includes(option.slug);
          const disabled = !active && (availableAdvantagePoints ?? 0) < (option.cost ?? 0);
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

