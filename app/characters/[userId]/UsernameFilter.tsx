'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function UsernameFilter({ initialValue }: { initialValue: string }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    router.push(`/characters/${encodeURIComponent(trimmed)}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <input
        type="text"
        value={value}
        placeholder="Ingresa un nombre de usuario"
        onChange={(event) => setValue(event.target.value)}
        style={{
          padding: '0.6rem 0.9rem',
          borderRadius: '999px',
          border: '1px solid rgba(243,230,204,0.4)',
          background: 'rgba(10,20,16,0.6)',
          color: '#f3e6cc',
          minWidth: '220px'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.6rem 1.5rem',
          borderRadius: '999px',
          border: 'none',
          fontWeight: 600,
          background: 'linear-gradient(120deg,#6ba08c,#a58b61)',
          color: '#0b1512',
          cursor: 'pointer'
        }}
      >
        Buscar
      </button>
    </form>
  );
}


