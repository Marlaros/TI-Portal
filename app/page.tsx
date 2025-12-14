import Link from 'next/link'
import styles from './page.module.css'

const featureCards = [
  {
    title: 'Motor de reglas',
    description:
      'Aplica automáticamente modificadores por raza, categoría, ventajas y más.',
  },
  {
    title: 'Hoja dinámica',
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
      'Guardá tus personajes y consultalos siempre que quieras.',
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.tag}>Portal oficial</p>
          <h2>
            Crea héroes de <span>Tierras Inmortales</span> en minutos
          </h2>
          <p className={styles.lead}>
            Todas las combinaciones del manual Octava Guía: atributos, estilos,
            ventajas y monturas que se auto-calculan para salir andando rápido.
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
              <span>Atributos</span>
              <strong>F17 / R15 / A17 / P 18 / L 12 / I 15</strong>
            </li>
            <li>
              <span>Ataque cuerpo a cuerpo</span>
              <strong>+4</strong>
            </li>
            <li>
              <span>PG / PC / PM</span>
              <strong>39 / 18 / 21</strong>
            </li>
            <li>
              <span>Iniciativa</span>
              <strong>-8 (lucha sin coraza)</strong>
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
