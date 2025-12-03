'use client'

import { useContext } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCharacterPreview } from '@/app/hooks/useCharacterPreview';
import styles from './Preview.module.css';

interface PreviewStepProps {
  onCreate: () => void;
}

const combatLabels: Record<string, string> = {
  ataque: 'Ataque',
  ataqueDistancia: 'Ataque a distancia',
  dano: 'Daño',
  critico: 'Crítico',
  defensa: 'Defensa',
  armadura: 'Armadura',
  reduccionDefensaEnemiga: 'Reducción defensa enemiga',
  iniciativa: 'Iniciativa',
  concentracion: 'Concentración',
  percepcionChequeo: 'Percepción',
  liderazgoChequeo: 'Liderazgo'
};

export default function PreviewStep({ onCreate }: PreviewStepProps) {
  const { character } = useContext(CharacterContext);
  const { ready, snapshot, debugLog, error } = useCharacterPreview(character);

  if (!ready) {
    return (
      <div className={styles.empty}>
        <p>Completa los pasos previos para calcular la hoja.</p>
      </div>
    );
  }

  if (!snapshot) {
    return (
      <div className={styles.empty}>
        <p>{error ?? 'No se pudo generar la previsualización.'}</p>
      </div>
    );
  }

  const combatEntries = Object.entries(snapshot.combat)
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => ({
      label: combatLabels[key] ?? key,
      value
    }));

  const resourceEntries = Object.entries(snapshot.resources)
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => ({
      label: key.toUpperCase(),
      value
    }));

  return (
    <div className={styles.layout}>
      <section className={styles.block}>
        <header>
          <p className={styles.tag}>Paso 12</p>
          <h3>Previsualización de la hoja</h3>
          <span>Todos los modificadores se han aplicado automáticamente.</span>
        </header>
        <div className={styles.statsGrid}>
          {combatEntries.map((entry) => (
            <article key={entry.label} className={styles.statCard}>
              <p>{entry.label}</p>
              <strong>{entry.value}</strong>
            </article>
          ))}
        </div>
        <div className={styles.resources}>
          {resourceEntries.map((entry) => (
            <div key={entry.label} className={styles.resource}>
              <span>{entry.label}</span>
              <strong>{entry.value}</strong>
            </div>
          ))}
        </div>
        <button type="button" className={styles.create} onClick={onCreate}>
          Crear personaje
        </button>
      </section>
      <aside className={styles.log}>
        <h4>Bonificadores aplicados</h4>
        <ul>
          {debugLog.map((entry) => (
            <li key={entry.modifierId}>
              <span>{entry.reason ?? entry.modifierId}</span>
              <strong>
                {entry.delta > 0 ? '+' : ''}
                {entry.delta} en {entry.target}
              </strong>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

