'use client'

import { useContext } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import styles from './WeaponMastery.module.css';

export default function WeaponMasteryStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { weaponMasteries } = useCatalogs();

  const selectMastery = (id: string) => {
    setCharacter((prev) => ({
      ...prev,
      weaponSpecialization: prev.weaponSpecialization === id ? null : id
    }));
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 10</p>
        <h3>Especialización en armas</h3>
        <span>Otorga bonificaciones permanentes al manejar tu arma predilecta.</span>
      </header>
      <div className={styles.grid}>
        {weaponMasteries.map((option) => {
          const active = character.weaponSpecialization === option.slug;
          return (
            <button
              key={option.slug}
              type="button"
              className={`${styles.card} ${active ? styles.cardActive : ''}`}
              onClick={() => selectMastery(option.slug)}
            >
              <h4>{option.name}</h4>
              <p>{option.description ?? ''}</p>
              <span>{active ? 'Especialización activa' : 'Seleccionar'}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

