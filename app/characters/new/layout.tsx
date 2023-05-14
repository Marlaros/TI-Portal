export default function NewCharacterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ boxShadow: 'inset 0px 8px 6px 0px rgba(31,32,31,0.15)'}}>
        <header style={{display: 'grid', placeItems: 'center', height: '10%', marginTop: '1%'}}>
            <h2 style={{marginTop: '2%', transform: 'scale(1.05)', fontWeight: 'bold'}}>Nuevo Personaje</h2>
        </header>
        {children}
    </div>
  )
}
