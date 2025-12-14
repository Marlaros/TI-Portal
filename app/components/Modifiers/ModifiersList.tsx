import React from 'react';
import styles from './ModifiersList.module.css';

interface ModifiersListProps {
  title?: string;
  modifiers?: any[];
  /** Optional map to translate keys/labels to UI-friendly strings */
  labels?: Record<string, string>;
}

export default function ModifiersList({ title = 'Modificadores', modifiers = [], labels = {} }: ModifiersListProps) {
  if (!modifiers || modifiers.length === 0) {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.empty}>No hay modificadores. Continua la seleccion para visualziarlos</div>
      </div>
    );
  }

  // Default translations. You can override by passing `labels` prop to ModifiersList.
  const defaultLabels: Record<string, string> = {
    pg: 'PG',
    fp: 'FP',
    mo: 'Mo',
    mp: 'Mp',
    mc: 'Mc',
    fuerza: 'Fuerza',
    agilidad: 'Agilidad',
    resistencia: 'Constitución',
    percepcion: 'Percepción',
    liderazgo: 'Liderazgo',
    belleza: 'Belleza',
    inteligencia: 'Inteligencia',
    categoria_social: 'Categoría social',
    advantagepoints: 'Puntos de ventaja',
    ataque: 'Ataque',
    defensa: 'Defensa',
    disparos: 'Disparos',
    prob_critico: 'Prob. Crítico',
    mod_al_daño: 'Mod. al daño',
    def_espontanea: 'Defensa espontánea',
    pen_def: 'penalizacion de defensa rival',
    reduccion_dano: 'Reducción de daño',
    iniciativa: 'Iniciativa',
    ar: 'AR',
    pc: 'PC',
    pm: 'PM',
    concentracion: 'Concentración',
    detectar_magia: 'Detectar magia',
    habilidad_percepcion: 'Habilidad de percepción',
    habilidad_liderazgo: 'Habilidad de liderazgo',
    skillpointsperlevel: 'Puntos de Pericia por nivel',
    skillpoints: 'Puntos de pericia',
    xpmodifier: 'Modificador XP',
    health: 'Salud'
  };

  const mergedLabels = { ...defaultLabels, ...(labels || {}) };

  const keyName = (k: any) => {
    if (k === null || k === undefined) return '';
    if (typeof k === 'string' || typeof k === 'number' || typeof k === 'boolean') {
      const s = String(k).toLowerCase();
      return mergedLabels[s] ?? String(k).toUpperCase();
    }
    // if object, try common fields
    if (typeof k === 'object') {
      if (k.key) return keyName(k.key);
      if (k.attribute) return keyName(k.attribute);
      if (k.name) return keyName(k.name);
      if (k.kind) return keyName(k.kind);
      try {
        return JSON.stringify(k);
      } catch (e) {
        return String(k);
      }
    }
    return String(k);
  };

  const opSign = (op: string) => {
    const o = (op || '').toString().toLowerCase();
    if (['add', 'plus', 'increase', '+'].includes(o)) return '+';
    if (['subtract', 'sub', 'minus', 'decrease', '-'].includes(o)) return '-';
    if (['set', '='].includes(o)) return '=';
    return op; // fallback textual op
  };

  const formatAmount = (raw: any, opHint?: string) => {
    if (raw === null || raw === undefined) return '';
    if (typeof raw === 'number' || typeof raw === 'string' || typeof raw === 'boolean') return String(raw);
    // If the raw is an object, try common shapes
    if (typeof raw === 'object') {
      if (raw.value !== undefined) return (typeof raw.value === 'object' ? JSON.stringify(raw.value) : String(raw.value));
      if (raw.amount !== undefined) return (typeof raw.amount === 'object' ? JSON.stringify(raw.amount) : String(raw.amount));
      if (raw.perPoint !== undefined) return (typeof raw.perPoint === 'object' ? JSON.stringify(raw.perPoint) : String(raw.perPoint));
      // currency object {mc:10, mp:0, mo:1}
      if (raw.mc !== undefined || raw.mp !== undefined || raw.mo !== undefined) {
        const parts: string[] = [];
        if (raw.mo) parts.push(`${raw.mo} Mo`);
        if (raw.mp) parts.push(`${raw.mp} Mp`);
        if (raw.mc) parts.push(`${raw.mc} Mc`);
        return parts.join(' + ');
      }
      // sometimes the op and value are nested: { kind: 'add', value: 30 }
      if (raw.kind && (raw.value !== undefined || raw.amount !== undefined)) {
        const sign = opSign(raw.kind);
        const v = raw.value ?? raw.amount ?? '';
        const vv = (typeof v === 'object') ? JSON.stringify(v) : String(v);
        return `${sign}${vv}`;
      }
      // fallback to JSON
      try { return JSON.stringify(raw); } catch (e) { return String(raw); }
    }
    return String(raw);
  };

  // Build friendly lines. Support paired modifiers where one item names the resource and the
  // following item contains the operation/value.
  const lines: Array<{ text: string; cond?: string | null }> = [];
  for (let i = 0; i < modifiers.length; i++) {
    const m = modifiers[i] ?? {};
    const next = modifiers[i + 1];

    const hasKey = Boolean(m && (m.key || m.target || m.attribute));
    const nextHasOpAndValue = Boolean(next && (next.kind || next.operation || next.op) && (next.value !== undefined || next.amount !== undefined || next.perPoint !== undefined));

    if (hasKey && nextHasOpAndValue && !(next && (next.key || next.target || next.attribute))) {
      const targetRaw = m.key ?? m.target ?? m.attribute ?? m.kind;
      const target = keyName(targetRaw);
      const op = next.kind ?? next.operation ?? next.op ?? 'set';
      const sign = opSign(op);
      const valRaw = next.value ?? next.amount ?? next.perPoint ?? '';
      const val = formatAmount(valRaw, op);
      const condRaw = next.condition ?? next.conditions ?? next.selection ?? m.condition ?? m.conditions ?? null;
      const cond = condRaw ? (typeof condRaw === 'object' ? JSON.stringify(condRaw) : String(condRaw)) : null;
      lines.push({ text: `${target} ${sign}${formatAmount(valRaw, op)}`, cond });
      i++; // skip next
      continue;
    }

    // Single modifier formatting
    const targetRaw = m.target ?? m.key ?? m.attribute ?? m.kind ?? '';
    const opRaw = m.operation ?? m.op ?? m.kind ?? '';
    const amountRaw = m.amount ?? m.value ?? m.perPoint ?? '';
    const condRaw = m.condition ?? m.conditions ?? m.selection ?? null;

    const target = keyName(targetRaw) || '';
    const sign = opRaw ? opSign(String(opRaw)) : '';
    const amount = formatAmount(amountRaw, opRaw);

    let text = '';
    if (target && amount) text = `${target} ${sign}${amount}`;
    else if (target && !amount) text = `${target} ${sign || ''}`.trim();
    else if (!target && amount) text = `${sign}${amount}`;
    else text = JSON.stringify(m);

    const cond = condRaw ? (typeof condRaw === 'object' ? JSON.stringify(condRaw) : String(condRaw)) : null;

    lines.push({ text, cond });
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title} ({lines.length})</h4>
      <ul className={styles.list}>
        {lines.map((l, idx) => (
          <li key={idx} className={styles.item}>
            <div className={styles.main}>
              <div className={styles.target}>{l.text}</div>
            </div>
            {l.cond ? <div className={styles.cond}>{l.cond}</div> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
