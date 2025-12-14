'use client'

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import styles from './FightingStylePerks.module.css';
import ModifiersList from '@/app/components/Modifiers/ModifiersList';

type Tier = {
  id: string;
  slug: string;
  fighting_style_id: string;
  group_index: number;
  order_index: number;
  title: string;
  description?: string | null;
  modifiers: any[];
};

const GROUP_UNLOCK_LEVEL: Record<number, number> = {
  1: 1,
  2: 4,
  3: 7,
  4: 10
};

export default function FightingStylePerks() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { fightingStyles } = useCatalogs();
  const [tiers, setTiers] = useState<Tier[]>([]);
  const [loading, setLoading] = useState(false);

  const styleSlug = character.fightingStyle;

  useEffect(() => {
    if (!styleSlug) return;
    let cancelled = false;
    setLoading(true);
    fetch(`/api/catalogs/tiers?slug=${encodeURIComponent(styleSlug)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setTiers(data.rows ?? []);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [styleSlug]);

  useEffect(() => {
    // ensure array exists on character
    if (!character.fightingStylePerks) {
      setCharacter((prev) => ({ ...prev, fightingStylePerks: [] }));
    }
  }, [character.fightingStylePerks, setCharacter]);

  const grouped = useMemo(() => {
    const map = new Map<number, Tier[]>();
    tiers.forEach((t) => {
      const g = Number(t.group_index || 1);
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(t);
    });
    return map;
  }, [tiers]);

  const canSelectTier = (tier: Tier) => {
    const group = Number(tier.group_index || 1);
    const requiredLevel = GROUP_UNLOCK_LEVEL[group] ?? 999;
    if ((character.level || 1) < requiredLevel) return false;
    // require previous group completed
    if (group > 1) {
      const prevTiers = grouped.get(group - 1) ?? [];
      const selectedPrev = (character.fightingStylePerks || []).filter((s) => prevTiers.some((p) => p.slug === s)).length;
      if (selectedPrev < (prevTiers.length || 0)) return false;
    }
    // total perks cannot exceed character level
    if (((character.fightingStylePerks || []).length >= (character.level || 1)) && !(character.fightingStylePerks || []).includes(tier.slug)) return false;
    return true;
  };

  const toggle = (tier: Tier) => {
    const selected = character.fightingStylePerks || [];
    const exists = selected.includes(tier.slug);
    if (!exists && !canSelectTier(tier)) return;
    const next = exists ? selected.filter((s) => s !== tier.slug) : [...selected, tier.slug];
    setCharacter((prev) => ({ ...prev, fightingStylePerks: next }));
  };

  if (!styleSlug) {
    return (
      <section>
        <header>
          <p>Paso 11</p>
          <h3>Perks de estilo</h3>
          <span>Selecciona primero un estilo de lucha para ver sus perks.</span>
        </header>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <header>
        <p className="tag">Paso 11</p>
        <h3>Perks de estilo</h3>
        <span>Elige las destrezas del estilo. Grupos desbloquean según nivel y progreso.</span>
      </header>

      {loading && <div>Cargando perks…</div>}

      <div className={styles.groups}>
        {[1, 2, 3, 4].map((group) => {
          const items = grouped.get(group) ?? [];
          return (
            <div className={styles.group} key={group}>
              <h4>Grupo {group} (desbloquea en nivel {GROUP_UNLOCK_LEVEL[group]})</h4>
              {items.map((tier) => {
                const active = (character.fightingStylePerks || []).includes(tier.slug);
                const selectable = canSelectTier(tier);
                return (
                  <div
                    role="button"
                    tabIndex={0}
                    key={tier.slug}
                    onClick={() => toggle(tier)}
                    onKeyDown={(e) => e.key === 'Enter' && toggle(tier)}
                    className={`${styles.perkButton} ${active ? 'active' : ''}`}
                    aria-pressed={active}
                    aria-disabled={!selectable}
                  >
                    <div>
                      <div className={styles.perkTitle}>{tier.title}</div>
                      <div className={styles.perkDesc}>{tier.description}</div>
                    </div>
                    <div>
                      <small>{active ? 'Seleccionado' : selectable ? 'Seleccionar' : 'Bloqueado'}</small>
                    </div>
                    <div style={{ display: 'none' }}>
                      <ModifiersList modifiers={tier.modifiers ?? []} />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
