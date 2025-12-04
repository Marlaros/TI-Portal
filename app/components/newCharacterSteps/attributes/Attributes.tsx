'use client'

import { ChangeEvent, useContext } from 'react';

import { CharacterContext } from '@/app/contexts/characterContext';
import type { Character } from '@/app/characters/new/character.type';
import { useCharacterPreview } from '@/app/hooks/useCharacterPreview';

import styles from './Attributes.module.css';

type AttributeFieldKey = keyof Character['attributes'];

const ATTRIBUTE_FIELDS: Array<{
  key: AttributeFieldKey;
  label: string;
  helper: string;
  min?: number;
  max?: number;
}> = [
  { key: 'fuerza', label: 'Fuerza', helper: 'Define ataque y daño cuerpo a cuerpo.' },
  { key: 'resistencia', label: 'Resistencia', helper: 'Impacta PG, PC y aguante físico.' },
  { key: 'agilidad', label: 'Agilidad', helper: 'Controla iniciativa y defensa.' },
  { key: 'percepcion', label: 'Percepción', helper: 'Favorece tiradas de alerta.' },
  { key: 'liderazgo', label: 'Liderazgo', helper: 'Influye en maniobras y chequeos sociales.' },
  { key: 'inteligencia', label: 'Inteligencia', helper: 'Modifica PM y habilidades mágicas.' },
  { key: 'belleza', label: 'Belleza', helper: 'Referencia estética y rasgos sociales.', min: 1, max: 20 },
  {
    key: 'categoriaSocial',
    label: 'Categoría social',
    helper: 'Determina estatus y recursos iniciales.',
    min: 1,
    max: 100
  }
];

const COMBAT_HIGHLIGHTS = ['ataque', 'dano', 'defensa', 'iniciativa'] as const;
const combatLabels: Record<(typeof COMBAT_HIGHLIGHTS)[number], string> = {
  ataque: 'Ataque',
  dano: 'Daño',
  defensa: 'Defensa',
  iniciativa: 'Iniciativa'
};

const RESOURCE_HIGHLIGHTS = ['pg', 'pc', 'pm'] as const;

const clampValue = (key: AttributeFieldKey, value: number) => {
  const field = ATTRIBUTE_FIELDS.find((entry) => entry.key === key);
  const min = field?.min ?? 1;
  const max = field?.max ?? 30;
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
};

export default function AttributesStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { ready, snapshot, error } = useCharacterPreview(character);

  const handleChange = (key: AttributeFieldKey) => (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = clampValue(key, Number(event.target.value));
    setCharacter((prev) => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [key]: nextValue
      }
    }));
  };

  const renderImpact = () => {
    if (!ready) {
      return (
        <div className={styles.empty}>
          <p>Completa linajes, estilos y arma predilecta para calcular el impacto total.</p>
        </div>
      );
    }

    if (!snapshot) {
      return (
        <div className={styles.empty}>
          <p>{error ?? 'No se pudo obtener la previsualización.'}</p>
        </div>
      );
    }

    return (
      <>
        <div className={styles.statsGrid}>
          {COMBAT_HIGHLIGHTS.map((key) => (
            <article key={key} className={styles.statCard}>
              <span>{combatLabels[key]}</span>
              <strong>{snapshot.combat[key]}</strong>
            </article>
          ))}
        </div>
        <div className={styles.resources}>
          {RESOURCE_HIGHLIGHTS.map((key) => (
            <div key={key} className={styles.resource}>
              <span>{key.toUpperCase()}</span>
              <strong>{snapshot.resources[key]}</strong>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className={styles.layout}>
      <section className={styles.editor}>
        <header>
          <p>Asignación de atributos</p>
          <h3>Ajusta tus valores base</h3>
          <span>Usa los resultados de las tiradas o distribuye los puntos según tu linaje.</span>
        </header>
        <div className={styles.grid}>
          {ATTRIBUTE_FIELDS.map((field) => (
            <label key={field.key} className={styles.card}>
              <div className={styles.cardHeader}>
                <span>{field.label}</span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={field.min ?? 1}
                  max={field.max ?? 30}
                  value={character.attributes[field.key]}
                  onChange={handleChange(field.key)}
                />
              </div>
              <p>{field.helper}</p>
            </label>
          ))}
        </div>
      </section>
      <section className={styles.preview}>
        <header>
          <p>Impacto en la hoja</p>
          <h3>Tus estadísticas derivadas</h3>
          <span>Observa cómo las combinaciones actuales modifican el combate y los recursos.</span>
        </header>
        {renderImpact()}
      </section>
    </div>
  );
}

