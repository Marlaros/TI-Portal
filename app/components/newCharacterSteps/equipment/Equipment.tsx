'use client'

import { useContext } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import styles from './Equipment.module.css';

const MAX_EQUIPMENT = 3;

export default function EquipmentStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { equipment } = useCatalogs();

  const toggle = (id: string) => {
    setCharacter((prev) => {
      const active = prev.equipment.includes(id);
      if (active) {
        return { ...prev, equipment: prev.equipment.filter((eq) => eq !== id) };
      }
      if (prev.equipment.length >= MAX_EQUIPMENT) return prev;
      return { ...prev, equipment: [...prev.equipment, id] };
    });
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 8</p>
        <h3>Arma y equipo inicial</h3>
        <span>Selecciona hasta {MAX_EQUIPMENT} elementos para definir el loadout.</span>
      </header>
      <div className={styles.grid}>
        {equipment.map((option) => {
          const active = character.equipment.includes(option.slug);
          const disabled = !active && character.equipment.length >= MAX_EQUIPMENT;
          return (
            <button
              key={option.slug}
              type="button"
              className={`${styles.card} ${active ? styles.cardActive : ''}`}
              onClick={() => toggle(option.slug)}
              disabled={disabled}
            >
              <div>
                <p className={styles.slot}>{option.slot}</p>
                <h4>{option.name}</h4>
                <p>{option.description ?? ''}</p>
              </div>
              <span>{active ? 'Equipado' : 'Equipar'}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

