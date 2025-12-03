import Link from 'next/link'
import styles from './page.module.css'

const featureCards = [
  {
    title: 'Motor de reglas',
    description:
      'Aplica automáticamente modificadores por raza, categoría, ventajas y equipo.',
  },
  {
    title: 'Hoja viva',
    description:
      'Cada sección es editable y permite anotar variaciones caseras sin perder la automatización.',
  },
  {
    title: 'Colecciones oficiales',
    description:
      'Consulta razas, estilos y conjuros del manual con filtros intuitivos.',
  },
  {
    title: 'Mis personajes',
    description:
      'Guarda múltiples versiones y comparte enlaces con tu mesa en segundos.',
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.tag}>Portal oficial</p>
          <h2>
            Crea héroes de <span>Tierras Inmortales</span> sin pelearte con las
            tablas.
          </h2>
          <p className={styles.lead}>
            Todas las combinaciones del manual Octava Guía: atributos, estilos,
            ventajas y monturas que se auto-calculan para que puedas jugar de
            inmediato.
          </p>
          <div className={styles.actions}>
            <Link href="/characters/new" className={styles.primary}>
              Crear personaje
            </Link>
            <Link href="/characters/RandomUser" className={styles.secondary}>
              Mis personajes
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <header>
            <p>Resumen dinámico</p>
            <span>Nivel 3 Marcial</span>
          </header>
          <ul>
            <li>
              <span>Atributos 3D6 + 2</span>
              <strong>F16 / R14 / A15</strong>
            </li>
            <li>
              <span>Ataque cuerpo a cuerpo</span>
              <strong>+7</strong>
            </li>
            <li>
              <span>PG / PC / PM</span>
              <strong>28 / 10 / 6</strong>
            </li>
            <li>
              <span>Iniciativa</span>
              <strong>+4 (bono élfico)</strong>
            </li>
          </ul>
          <footer>
            <p>Los valores se recalculan con cada selección.</p>
          </footer>
        </div>
      </section>
      <section className={styles.grid}>
        {featureCards.map((card) => (
          <article key={card.title} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
