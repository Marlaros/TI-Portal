import styles from './layout.module.css';

export default function NewCharacterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layout}>
        <header className={styles.header}>
            <p>Forja un héroe</p>
            <h2>Nuevo personaje</h2>
            <span>Completa cada paso para generar la hoja automáticamente.</span>
        </header>
        {children}
    </div>
  )
}
