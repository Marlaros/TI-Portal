import Link from 'next/link'
import './globals.css'
import './layout.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main style={{height: '100%'}}>
          <header className="main-header">
            <div className="main-title">
              <h1>Tierras Inmortales</h1>
            </div>
          </header>
          <nav className="main-nav">
            <Link href="/" className="main-nav-link">
              <p>Inicio</p>
            </Link>
            <Link href="/characters/new" className="main-nav-link">
              <p>Nuevo Personaje</p>
            </Link>
            <Link href="/characters/RandomUser" className="main-nav-link">
              <p>Mis Personajes</p>
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
