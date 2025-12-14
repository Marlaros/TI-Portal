import Image from 'next/image';
import { useState } from 'react';
import ModifiersList from '../Modifiers/ModifiersList';
import styles from './FloatingCard.module.css';

interface FloatingCardProps {
  name: string;
  description: string;
  image: string;
  handleClick: (value: string) => void;
  compact?: boolean;
  modifiers?: any[];
}

export default function FloatingCard({
  name,
  description,
  image,
  handleClick,
  compact = false
  , modifiers = []
}: FloatingCardProps) {
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
      <div className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div
            role="button"
            style={{ cursor: 'pointer' }}
            tabIndex={0}
            className={styles.pill}
            onClick={(e) => { e.stopPropagation(); setExpanded((s) => !s); }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setExpanded((s) => !s); } }}
          >
            {expanded ? 'Ocultar' : 'Ver más'}
          </div>
        </div>
      </div>
      {!compact && (
        <div className={styles.imageFrame}>
          <Image
            className={styles.image}
            src={image}
            alt={`Ilustración de ${name}`}
            width={275}
            height={275}
          />
          <div className={styles.glow} />
        </div>
      )}
      <p className={`${styles.description} ${expanded ? styles.expanded : ''}`}>{description}</p>
      {expanded && modifiers && modifiers.length > 0 && (
        <div style={{ marginTop: 8 }}>
          {/* render modifiers inside the card when expanded to lengthen the card */}
          <div style={{ marginTop: 8 }}>
            <ModifiersList modifiers={modifiers} />
          </div>
        </div>
      )}
    </div>
  );
}