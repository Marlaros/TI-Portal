import Image from 'next/image';
import styles from './ElementCard.module.css';

interface ElementCardProps {
  name: string;
  description: string;
  image: string;
  handleClick: (value: string) => void;
}

export default function ElementCard({
  name,
  description,
  image,
  handleClick
}: ElementCardProps) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => handleClick(name)}
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
    </button>
  );
}