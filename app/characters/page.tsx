import { UsernameFilter } from './[userId]/UsernameFilter';

export default function CharactersLanding() {
  return (
    <div style={{ padding: '3% 5%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center'
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Mis personajes</h1>
        <p style={{ margin: 0, color: 'rgba(243,230,204,0.75)' }}>
          Ingresa tu nombre de usuario para listar los personajes registrados.
        </p>
        <UsernameFilter initialValue="" />
      </header>
      <div
        style={{
          borderRadius: '24px',
          border: '1px dashed rgba(243,230,204,0.3)',
          padding: '2rem',
          textAlign: 'center',
          color: 'rgba(243,230,204,0.75)'
        }}
      >
        Aún no se ha realizado ninguna búsqueda. Ingresa un nombre de usuario para visualizar personajes.
      </div>
    </div>
  );
}


