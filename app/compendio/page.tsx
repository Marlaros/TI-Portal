'use client'

import Image from 'next/image';
import { CatalogProvider, useCatalogs } from '@/app/contexts/catalogContext';
import styles from './page.module.css';

const Status = ({ message }: { message: string }) => (
  <div className={styles.status}>{message}</div>
);

const CatalogSection = ({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <section className={styles.section}>
    <header className={styles.sectionHeader}>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
    {children}
  </section>
);

const CollectionsContent = () => {
  const {
    status,
    error,
    races,
    categories,
    specialties,
    advantages,
    disadvantages,
    equipment,
    fightingStyles,
    weaponMasteries,
    skills
  } = useCatalogs();

  if (status === 'loading') {
    return <Status message="Cargando catálogos desde Supabase…" />;
  }

  if (status === 'error') {
    return <Status message={error ?? 'No se pudieron cargar los catálogos.'} />;
  }

  return (
    <div className={styles.page}>
      <CatalogSection
        title="Razas y linajes"
        description="Explora las culturas disponibles en Tierras Inmortales."
      >
        <div className={styles.cardGrid}>
          {races.map((race) => (
            <article key={race.id} className={styles.card}>
              {race.imageUrl ? (
                <Image
                  src={race.imageUrl}
                  alt={`Ilustración de ${race.name}`}
                  width={320}
                  height={180}
                  className={styles.cardImage}
                />
              ) : null}
              <h4>{race.name}</h4>
              <p>{race.shortDescription ?? ''}</p>
            </article>
          ))}
        </div>
      </CatalogSection>

      <CatalogSection
        title="Categorías"
        description="Roles principales que definen el estilo de cada aventurero."
      >
        <div className={styles.cardGrid}>
          {categories.map((category) => (
            <article key={category.id} className={styles.card}>
              <p className={styles.chip}>{category.role}</p>
              <h4>{category.name}</h4>
              <p>{category.shortDescription ?? ''}</p>
            </article>
          ))}
        </div>
      </CatalogSection>

      <CatalogSection
        title="Especialidades"
        description="Escuelas avanzadas desbloqueadas por cada categoría."
      >
        <div className={styles.cardGrid}>
          {specialties.map((specialty) => (
            <article key={specialty.id} className={styles.card}>
              <p className={styles.chip}>{specialty.categoryName}</p>
              <h4>{specialty.name}</h4>
              <p>{specialty.shortDescription ?? ''}</p>
            </article>
          ))}
        </div>
      </CatalogSection>

      <CatalogSection
        title="Ventajas y desventajas"
        description="Ajusta el balance de tu héroe con dones y compromisos."
      >
        <div className={styles.list}>
          {advantages.map((adv) => (
            <article key={adv.slug} className={styles.listItem}>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Ventaja</span>
                <span className={styles.chip}>Coste: {adv.cost}</span>
              </div>
              <h4>{adv.name}</h4>
              <p>{adv.description ?? ''}</p>
            </article>
          ))}
          {disadvantages.map((item) => (
            <article key={item.slug} className={styles.listItem}>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Desventaja</span>
                <span className={styles.chip}>Recompensa: {item.reward}</span>
              </div>
              <h4>{item.name}</h4>
              <p>{item.description ?? ''}</p>
            </article>
          ))}
        </div>
      </CatalogSection>

      <CatalogSection
        title="Equipo y estilos"
        description="Define el loadout inicial y la técnica de combate."
      >
        <div className={styles.list}>
          {equipment.map((item) => (
            <article key={item.slug} className={styles.listItem}>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Equipo</span>
                <span className={styles.chip}>{item.slot}</span>
              </div>
              <h4>{item.name}</h4>
              <p>{item.description ?? ''}</p>
            </article>
          ))}
          {fightingStyles.map((style) => (
            <article key={style.slug} className={styles.listItem}>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Estilo</span>
                <span className={styles.chip}>{style.styleKey}</span>
              </div>
              <h4>{style.name}</h4>
              <p>{style.description ?? ''}</p>
            </article>
          ))}
        </div>
      </CatalogSection>

      <CatalogSection
        title="Maestrías y pericias"
        description="Bonificaciones permanentes por arma favorita o talento especial."
      >
        <div className={styles.list}>
          {weaponMasteries.map((mastery) => (
            <article key={mastery.slug} className={styles.listItem}>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Maestría</span>
                {mastery.weaponTag ? <span className={styles.chip}>{mastery.weaponTag}</span> : null}
              </div>
              <h4>{mastery.name}</h4>
              <p>{mastery.description ?? ''}</p>
            </article>
          ))}
          {skills.map((skill) => (
            <article key={skill.slug} className={styles.listItem}>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Pericia</span>
              </div>
              <h4>{skill.name}</h4>
              <p>{skill.description ?? ''}</p>
            </article>
          ))}
        </div>
      </CatalogSection>
    </div>
  );
};

export default function CompendioPage() {
  return (
    <CatalogProvider>
      <CollectionsContent />
    </CatalogProvider>
  );
}

