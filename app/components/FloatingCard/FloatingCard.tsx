import Image from 'next/image';
import styles from './FloatingCard.module.css';

interface FloatingCardProps {
  name: string;
  description: string;
  image: string;
  handleClick: (value: string) => void;
}

export default function FloatingCard({
  name,
  description,
  image,
  handleClick
}: FloatingCardProps) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => handleClick(name)}
      aria-label={`Seleccionar ${name}`}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.pill}>Ver detalles</span>
      </div>
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
      <p className={styles.description}>{description}</p>
    </button>
  );
}