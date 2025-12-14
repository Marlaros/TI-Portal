"use client"

import { useContext, ChangeEvent, useMemo, useState } from 'react';
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
  const [filter, setFilter] = useState('');
  const [view, setView] = useState<'grid'|'list'>('grid');

  const filtered = useMemo(() => {
    const f = filter.trim().toLowerCase();
    if (!f) return equipment;
    return equipment.filter((e: any) => (e.name || '').toLowerCase().includes(f));
  }, [equipment, filter]);

  const toggle = (id: string) => {
    setCharacter((prev) => {
      const active = prev.equipment.includes(id);
      // toggle presence and ensure quantities mapping exists
      if (active) {
        const newEq = prev.equipment.filter((eq) => eq !== id);
        const newQty = { ...(prev.equipmentQuantities ?? {}) };
        delete newQty[id];
        return { ...prev, equipment: newEq, equipmentQuantities: newQty };
      }
      return { ...prev,
        equipment: [...prev.equipment, id],
        equipmentQuantities: { ...(prev.equipmentQuantities ?? {}), [id]: 1 }
      };
    });
  };

  const setPrice = (slug: string, value: { currency: 'mc' | 'mp' | 'mo'; amount: number }) => {
    setCharacter((prev) => ({ ...prev, equipmentPrices: { ...(prev.equipmentPrices ?? {}), [slug]: value } }));
  };

  const rollMoney = () => {
    // Mc: 2D6 * 10, Mp: 1D6 * 10, Mo: 1D4 * 10
    const mc = roll(6, 2) * 10;
    const mp = roll(6, 1) * 10;
    const mo = roll(4, 1) * 10;
    setCharacter((prev) => ({ ...prev, money: { mc, mp, mo } }));
  };

  const currencyToMo = (currency: string, amount: number) => {
    const a = Number(amount || 0);
    switch (currency) {
      case 'mc':
        return Math.floor(a / 100);
      case 'mp':
        return Math.floor(a / 10);
      case 'mo':
      default:
        return a;
    }
  };

  const totalEquipmentCostMo = () => {
    const prices = character.equipment.map((slug) => {
      const catalog = equipment.find((e) => e.slug === slug);
      const p = (catalog as any)?.price;
      const qty = (character.equipmentQuantities ?? {})[slug] ?? 1;
      if (!p) return 0;
      return currencyToMo(p.currency, p.amount) * qty;
    });
    return prices.reduce((s, v) => s + v, 0);
  };

  const totalEquipmentCostByCurrency = () => {
    const totals = { mc: 0, mp: 0, mo: 0 } as Record<string, number>;
    character.equipment.forEach((slug) => {
      const catalog = equipment.find((e) => e.slug === slug) as any;
      const p = catalog?.price;
      const qty = (character.equipmentQuantities ?? {})[slug] ?? 1;
      if (!p) return;
      totals[p.currency] = (totals[p.currency] ?? 0) + (p.amount || 0) * qty;
    });
    return totals;
  };

  const remainingByCurrency = () => {
    const money = character.money ?? { mc: 0, mp: 0, mo: 0 };
    const totals = totalEquipmentCostByCurrency();
    return {
      mc: (money.mc ?? 0) - (totals.mc ?? 0),
      mp: (money.mp ?? 0) - (totals.mp ?? 0),
      mo: (money.mo ?? 0) - (totals.mo ?? 0),
    };
  };

  const moneyToMo = (mc = 0, mp = 0, mo = 0) => {
    // 1 Mo = 10 Mp = 100 Mc
    return mo + Math.floor(mp / 10) + Math.floor(mc / 100);
  };

  const remainingMo = () => {
    const money = character.money ?? { mc: 0, mp: 0, mo: 0 };
    return moneyToMo(money.mc, money.mp, money.mo) - totalEquipmentCostMo();
  };

  // const handlePriceChange = (slug: string) => (e: ChangeEvent<HTMLInputElement>) => {
  //   const val = Number(e.target.value || 0);
  //   setPrice(slug, val);
  // };

  const changeQty = (slug: string, delta: number) => {
    setCharacter((prev) => {
      const qtys = { ...(prev.equipmentQuantities ?? {}) };
      const current = qtys[slug] ?? 0;
      const next = Math.max(0, current + delta);
      if (next <= 0) {
        // remove item
        const newEq = prev.equipment.filter((e) => e !== slug);
        delete qtys[slug];
        return { ...prev, equipment: newEq, equipmentQuantities: qtys };
      }
      qtys[slug] = next;
      return { ...prev, equipmentQuantities: qtys, equipment: prev.equipment.includes(slug) ? prev.equipment : [...prev.equipment, slug] };
    });
  };

  const clearItem = (slug: string) => {
    setCharacter((prev) => {
      const newEq = prev.equipment.filter((e) => e !== slug);
      const qtys = { ...(prev.equipmentQuantities ?? {}) };
      delete qtys[slug];
      return { ...prev, equipment: newEq, equipmentQuantities: qtys };
    });
  };

  return (
    <section className={styles.container}>
      <header>
        <p className={styles.tag}>Paso 8</p>
        <h3>Arma y equipo inicial</h3>
        <span>Selecciona equipo y define precios para calcular el coste total.</span>
      </header>

      <div style={{ marginBottom: 12 }}>
        <div className={styles.moneyRow}>
          <button type="button" className={styles.generateButton} onClick={rollMoney}>Generar dinero</button>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <label>Mc: <input className={styles.moneyInput} type="number" value={character.money?.mc ?? 0} onChange={(e) => setCharacter((p) => ({ ...p, money: { ...(p.money ?? { mc: 0, mp: 0, mo: 0 }), mc: Number(e.target.value) } }))} /></label>
            <label>Mp: <input className={styles.moneyInput} type="number" value={character.money?.mp ?? 0} onChange={(e) => setCharacter((p) => ({ ...p, money: { ...(p.money ?? { mc: 0, mp: 0, mo: 0 }), mp: Number(e.target.value) } }))} /></label>
            <label>Mo: <input className={styles.moneyInput} type="number" value={character.money?.mo ?? 0} onChange={(e) => setCharacter((p) => ({ ...p, money: { ...(p.money ?? { mc: 0, mp: 0, mo: 0 }), mo: Number(e.target.value) } }))} /></label>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>Dinero disponible (Mo equiv): <strong>{moneyToMo(character.money?.mc ?? 0, character.money?.mp ?? 0, character.money?.mo ?? 0)}</strong></div>
        <div style={{ marginTop: 8 }}>Costo equipo seleccionado (Mo): <strong>{totalEquipmentCostMo()}</strong></div>
        <div style={{ marginTop: 8 }}>Restante (Mo): <strong>{remainingMo()}</strong></div>
        <div className={styles.coinRow}>
          {(() => {
            const totals = totalEquipmentCostByCurrency();
            const rem = remainingByCurrency();
            return (
              <>
                <div>
                  <div className={styles.coinLabel}>Mc</div>
                  <div className={`${styles.coin} ${rem.mc < 0 ? styles.negative : styles.positive}`}>{rem.mc}</div>
                  <div style={{ fontSize: 12, color: 'rgba(243,230,204,0.55)' }}>({totals.mc} used)</div>
                </div>
                <div>
                  <div className={styles.coinLabel}>Mp</div>
                  <div className={`${styles.coin} ${rem.mp < 0 ? styles.negative : styles.positive}`}>{rem.mp}</div>
                  <div style={{ fontSize: 12, color: 'rgba(243,230,204,0.55)' }}>({totals.mp} used)</div>
                </div>
                <div>
                  <div className={styles.coinLabel}>Mo</div>
                  <div className={`${styles.coin} ${rem.mo < 0 ? styles.negative : styles.positive}`}>{rem.mo}</div>
                  <div style={{ fontSize: 12, color: 'rgba(243,230,204,0.55)' }}>({totals.mo} used)</div>
                </div>
              </>
            );
          })()}
        </div>
      </div>

      <div className={styles.controls}>
        <input placeholder="Filtrar por nombre..." value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div>
          <button type="button" onClick={() => setView('grid')} className={view === 'grid' ? styles.activeView : ''}>Grid</button>
          <button type="button" onClick={() => setView('list')} className={view === 'list' ? styles.activeView : ''}>Lista</button>
        </div>
      </div>

      <div className={styles.content}>
        {view === 'grid' ? (
          <div className={styles.grid}>
            {filtered.map((option) => {
          const active = character.equipment.includes(option.slug);
          const p = (option as any).price;
          const itemCostMo = p ? currencyToMo(p.currency, p.amount) : 0;
          const disabled = !active && remainingMo() < itemCostMo;
          return (
            <div key={option.slug} className={`${styles.card} ${active ? styles.cardActive : ''}`}>
              <div>
                <p className={styles.slot}>{option.slot}</p>
                <h4>{option.name}</h4>
                <p className={styles.clamped}>{option.description ?? ''}</p>
                <div style={{ marginTop: 8 }}>
                  <div style={{ marginBottom: 8 }}>
                    <strong>Precio:</strong>{' '}
                    {p ? <span className={styles.price}>{p.amount} {p.currency.toUpperCase()}</span> : '—'}
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <button type="button" className={styles.clearButton} onClick={() => clearItem(option.slug)}>{'Limpiar'}</button>
                    <div className={styles.qtyControls}>
                      <button type="button" className={styles.qtyButton} onClick={() => changeQty(option.slug, -1)}>-</button>
                      <div style={{ minWidth: 28, textAlign: 'center' }}>{(character.equipmentQuantities ?? {})[option.slug] ?? (active ? 1 : 0)}</div>
                      <button type="button" className={styles.qtyButton} onClick={() => changeQty(option.slug, 1)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
            })}
          </div>
        ) : (
          <ul className={styles.simpleList}>
            {filtered.map((option) => {
              const active = character.equipment.includes(option.slug);
              const p = (option as any).price;
              const qty = (character.equipmentQuantities ?? {})[option.slug] ?? 0;
              return (
                <li key={option.slug}>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`${styles.card} ${styles.simpleListItem} ${active ? styles.cardActive : ''}`}
                    onClick={() => toggle(option.slug)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(option.slug); } }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <span>{option.name}</span>
                        <div className={styles.qtyControls} onClick={(e) => e.stopPropagation()}>
                          <button type="button" className={styles.qtyButton} onClick={() => changeQty(option.slug, -1)}>-</button>
                          <div style={{ minWidth: 28, textAlign: 'center' }}>{qty}</div>
                          <button type="button" className={styles.qtyButton} onClick={() => changeQty(option.slug, 1)}>+</button>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <span>{p ? `${p.amount} ${p.currency.toUpperCase()}` : '—'}</span>
                        <button type="button" className={styles.cartButton} onClick={(e) => { e.stopPropagation(); clearItem(option.slug); }}>Limpiar</button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <aside style={{ marginTop: 12 }}>
        <h4>Inventario</h4>
        {character.equipment.length ? (
          <ul className={styles.cartList}>
            {character.equipment.map((slug) => {
              const rec = equipment.find((e) => e.slug === slug);
              const p = (rec as any)?.price;
              const qty = (character.equipmentQuantities ?? {})[slug] ?? 1;
              return (
                <li key={slug} style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span>{rec?.name ?? slug}</span>
                    <div className={styles.qtyControls}>
                      <button type="button" className={styles.qtyButton} onClick={() => changeQty(slug, -1)}>-</button>
                      <div style={{ minWidth: 28, textAlign: 'center' }}>{qty}</div>
                      <button type="button" className={styles.qtyButton} onClick={() => changeQty(slug, 1)}>+</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span>{p ? `${p.amount} ${p.currency.toUpperCase()}` : '—'}</span>
                    <button type="button" className={styles.cartButton} onClick={() => toggle(slug)}>Quitar</button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={styles.empty}>No hay artículos en el inventario.</p>
        )}
      </aside>
    </section>
  );
}

