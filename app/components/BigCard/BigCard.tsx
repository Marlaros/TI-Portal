import Image from 'next/image';
import styles from './BigCard.module.css';
import ModifiersList from '../Modifiers/ModifiersList';

interface BigCardProps {
  name: string;
  description: string;
  image: string;
  modifiers?: any[];
}

export default function BigCard({ name, description, image, modifiers = [] }: BigCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3>{name}</h3>
      </header>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={image ?? ""}
          alt={`Ilustración de ${name}`}
          width={420}
          height={420}
        />
      </div>
      <p className={styles.description}>{description}</p>
      {modifiers && modifiers.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <ModifiersList modifiers={modifiers} />
        </div>
      )}
    </article>
  );
}