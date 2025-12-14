"use client"

import { useContext, ChangeEvent } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import styles from './Equipment.module.css';


const roll = (sides: number, times = 1) => {
  let total = 0;
  for (let i = 0; i < times; i++) total += Math.floor(Math.random() * sides) + 1;
  return total;
};

export default function EquipmentStep() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { equipment } = useCatalogs();

  const toggle = (id: string) => {
    setCharacter((prev) => {
      const active = prev.equipment.includes(id);
      if (active) {
        return { ...prev, equipment: prev.equipment.filter((eq) => eq !== id) };
      }
      const price = (prev.equipmentPrices ?? {})[id] ?? 0;
      const money = prev.money ?? { mc: 0, mp: 0, mo: 0 };
      const moneyEquiv = moneyToMo(money.mc, money.mp, money.mo);
      const existingCost = prev.equipment.map((slug) => (prev.equipmentPrices ?? {})[slug] ?? 0).reduce((s, v) => s + v, 0);
      const remaining = moneyEquiv - existingCost;
      if (price > remaining) return prev;
      return { ...prev, equipment: [...prev.equipment, id] };
    });
  };

  const setPrice = (slug: string, value: number) => {
    setCharacter((prev) => ({ ...prev, equipmentPrices: { ...(prev.equipmentPrices ?? {}), [slug]: Number(value) } }));
  };

  const rollMoney = () => {
    // Mc: 2D6 * 10, Mp: 1D6 * 10, Mo: 1D4 * 10
    const mc = roll(6, 2) * 10;
    const mp = roll(6, 1) * 10;
    const mo = roll(4, 1) * 10;
    setCharacter((prev) => ({ ...prev, money: { mc, mp, mo } }));
  };

  const totalEquipmentCostMo = () => {
    const prices = character.equipment.map((slug) => (character.equipmentPrices ?? {})[slug] ?? 0);
    // prices are treated as Mo by default
    return prices.reduce((s, v) => s + v, 0);
  };

  const moneyToMo = (mc = 0, mp = 0, mo = 0) => {
    // 1 Mo = 10 Mp = 100 Mc
    return mo + Math.floor(mp / 10) + Math.floor(mc / 100);
  };

  const remainingMo = () => {
    const money = character.money ?? { mc: 0, mp: 0, mo: 0 };
    return moneyToMo(money.mc, money.mp, money.mo) - totalEquipmentCostMo();
  };

  const handlePriceChange = (slug: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value || 0);
    setPrice(slug, val);
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 8</p>
        <h3>Arma y equipo inicial</h3>
        <span>Selecciona equipo y define precios para calcular el coste total.</span>
      </header>

      <div style={{ marginBottom: 12 }}>
        <button type="button" onClick={rollMoney}>Generar dinero aleatorio</button>
        <div style={{ marginTop: 8 }}>
          <label style={{ marginRight: 8 }}>Mc: <input type="number" value={character.money?.mc ?? 0} onChange={(e) => setCharacter((p) => ({ ...p, money: { ...(p.money ?? { mc: 0, mp: 0, mo: 0 }), mc: Number(e.target.value) } }))} /></label>
          <label style={{ marginRight: 8 }}>Mp: <input type="number" value={character.money?.mp ?? 0} onChange={(e) => setCharacter((p) => ({ ...p, money: { ...(p.money ?? { mc: 0, mp: 0, mo: 0 }), mp: Number(e.target.value) } }))} /></label>
          <label>Mo: <input type="number" value={character.money?.mo ?? 0} onChange={(e) => setCharacter((p) => ({ ...p, money: { ...(p.money ?? { mc: 0, mp: 0, mo: 0 }), mo: Number(e.target.value) } }))} /></label>
        </div>
        <div style={{ marginTop: 8 }}>Dinero disponible (Mo equiv): {moneyToMo(character.money?.mc ?? 0, character.money?.mp ?? 0, character.money?.mo ?? 0)}</div>
        <div style={{ marginTop: 8 }}>Costo equipo seleccionado (Mo): {totalEquipmentCostMo()}</div>
        <div style={{ marginTop: 8 }}>Restante (Mo): {remainingMo()}</div>
      </div>

      <div className={styles.grid}>
        {equipment.map((option) => {
          const active = character.equipment.includes(option.slug);
          const price = (character.equipmentPrices ?? {})[option.slug] ?? 0;
          const disabled = !active && remainingMo() < price;
          return (
            <div key={option.slug} className={`${styles.card} ${active ? styles.cardActive : ''}`}>
              <div>
                <p className={styles.slot}>{option.slot}</p>
                <h4>{option.name}</h4>
                <p>{option.description ?? ''}</p>
                <div style={{ marginTop: 8 }}>
                  <label style={{ marginRight: 8 }}>Precio (Mo): <input type="number" value={(character.equipmentPrices ?? {})[option.slug] ?? 0} onChange={handlePriceChange(option.slug)} /></label>
                  <button type="button" onClick={() => toggle(option.slug)} disabled={disabled}>{active ? 'Desequipar' : 'Equipar'}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

