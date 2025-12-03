import type { Metadata } from 'next'
import Link from 'next/link'
import { Cinzel, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import './layout.css'

const headingFont = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
})

const bodyFont = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Nuevo Personaje', href: '/characters/new' },
  { label: 'Mis Personajes', href: '/characters/RandomUser' },
  { label: 'Colecciones', href: '/compendio' },
]

export const metadata: Metadata = {
  title: 'Tierras Inmortales | Generador de personajes',
  description:
    'Herramienta oficial para crear y gestionar hojas de Tierras Inmortales con reglas automatizadas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="ti-body">
        <div className="ti-shell">
          <aside className="ti-sidebar">
            <div className="ti-emblem">
              <span>TI</span>
            </div>
            <nav className="ti-nav">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="ti-nav-link">
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="ti-sidebar-footer">
              <p>Compendio v8</p>
              <small>Manual oficial</small>
            </div>
          </aside>
          <div className="ti-content">
            <header className="ti-header">
              <div>
                <p className="ti-eyebrow">Generador narrativo</p>
                <h1>Tierras Inmortales</h1>
                <p className="ti-subtitle">
                  Diseña personajes legendarios en minutos.
                </p>
              </div>
              <div className="ti-badge">Beta viviente</div>
            </header>
            <main className="ti-main">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
