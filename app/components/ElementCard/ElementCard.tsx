import Image from 'next/image';
import { useState } from 'react';
import styles from './ElementCard.module.css';
import ModifiersList from '../Modifiers/ModifiersList';

interface ElementCardProps {
  name: string;
  description: string;
  image: string;
  handleClick: (value: string) => void;
  modifiers?: any[];
}

export default function ElementCard({
  name,
  description,
  image,
  handleClick,
  modifiers = []
}: ElementCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.card}
      onClick={() => handleClick(name)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(name); } }}
      aria-label={`Seleccionar ${name}`}
    >
      <p className={styles.title}>{name}</p>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={image}
          alt={`Ilustración de ${name}`}
          width={320}
          height={240}
        />
      </div>
      <p className={styles.description}>{description}</p>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <div
          role="button"
          style={{ cursor: 'pointer' }}
          tabIndex={0}
          className={styles.pill ?? ''}
          onClick={(e) => { e.stopPropagation(); setExpanded((s) => !s); }}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setExpanded((s) => !s); } }}
        >
          {expanded ? 'Ocultar modificadores' : 'Ver modificadores'}
        </div>
      </div>
      {expanded && modifiers && modifiers.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <ModifiersList modifiers={modifiers} />
        </div>
      )}
    </div>
  );
}