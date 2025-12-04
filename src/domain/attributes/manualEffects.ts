import { Attributes } from '../state';

export interface AttributeEffectEntry {
  label: string;
  value: string;
}

export interface ManualAttributeSummary {
  effects: Record<keyof Attributes, AttributeEffectEntry[]>;
  derived: {
    restRecoveryBonus: number;
  };
}

const formatSigned = (value: number): string => (value >= 0 ? `+${value}` : `${value}`);

const withFallback = (effects: AttributeEffectEntry[]): AttributeEffectEntry[] =>
  effects.length ? effects : [{ label: 'Sin modificadores', value: '—' }];

const describeFuerza = (value: number): AttributeEffectEntry[] => {
  const table: Record<number, AttributeEffectEntry[]> = {
    1: [
      { label: 'Ataque', value: '-2' },
      { label: 'Daño', value: '-5' }
    ],
    2: [
      { label: 'Ataque', value: '-2' },
      { label: 'Daño', value: '-4' }
    ],
    3: [
      { label: 'Ataque', value: '-1' },
      { label: 'Daño', value: '-4' }
    ],
    4: [
      { label: 'Ataque', value: '-1' },
      { label: 'Daño', value: '-3' }
    ],
    5: [{ label: 'Daño', value: '-2' }],
    6: [{ label: 'Daño', value: '-1' }]
  };

  const effects = [...(table[value] ?? [])];

  if (value >= 16) {
    const bonus = value - 15;
    effects.push({ label: 'Daño adicional por golpe', value: `+${bonus} PG` });
  }

  if (value >= 18) {
    const bonus = value - 17;
    effects.push({ label: 'Ataque adicional', value: formatSigned(bonus) });
  }

  return withFallback(effects);
};

const describeResistencia = (
  value: number
): { effects: AttributeEffectEntry[]; restBonus: number } => {
  const table: Record<number, AttributeEffectEntry[]> = {
    1: [
      { label: 'PG', value: '-6' },
      { label: 'PC', value: '-3' }
    ],
    2: [
      { label: 'PG', value: '-5' },
      { label: 'PC', value: '-2' }
    ],
    3: [
      { label: 'PG', value: '-4' },
      { label: 'PC', value: '-2' }
    ],
    4: [
      { label: 'PG', value: '-3' },
      { label: 'PC', value: '-1' }
    ],
    5: [
      { label: 'PG', value: '-2' },
      { label: 'PC', value: '-1' }
    ],
    6: [{ label: 'PG', value: '-1' }]
  };

  const effects = [...(table[value] ?? [])];
  let restBonus = 0;

  if (value >= 13) {
    const bonus = value - 12;
    restBonus = bonus;
    effects.push(
      { label: 'PG adicionales', value: formatSigned(bonus) },
      { label: 'PC adicionales', value: formatSigned(bonus) },
      { label: 'Recuperación al descansar', value: `+${bonus} PG` }
    );
  }

  return { effects: withFallback(effects), restBonus };
};

const describeAgilidad = (value: number): AttributeEffectEntry[] => {
  const table: Record<number, AttributeEffectEntry[]> = {
    1: [
      { label: 'Iniciativa', value: '-5' },
      { label: 'Defensa', value: '-4' },
      { label: 'Disparos', value: '-4' },
      { label: 'AR', value: '-4' }
    ],
    2: [
      { label: 'Iniciativa', value: '-5' },
      { label: 'Defensa', value: '-3' },
      { label: 'Disparos', value: '-3' },
      { label: 'AR', value: '-3' }
    ],
    3: [
      { label: 'Iniciativa', value: '-4' },
      { label: 'Defensa', value: '-3' },
      { label: 'Disparos', value: '-3' },
      { label: 'AR', value: '-3' }
    ],
    4: [
      { label: 'Iniciativa', value: '-4' },
      { label: 'Defensa', value: '-2' },
      { label: 'Disparos', value: '-2' },
      { label: 'AR', value: '-2' }
    ],
    5: [
      { label: 'Iniciativa', value: '-2' },
      { label: 'Defensa', value: '-2' },
      { label: 'Disparos', value: '-2' },
      { label: 'AR', value: '-2' }
    ],
    6: [
      { label: 'Iniciativa', value: '-1' },
      { label: 'Defensa', value: '-1' },
      { label: 'Disparos', value: '-1' },
      { label: 'AR', value: '-1' }
    ]
  };

  const effects = [...(table[value] ?? [])];

  if (value >= 13) {
    const initiativeBonus = Math.floor((value - 13) / 2) + 1;
    effects.push({ label: 'Iniciativa', value: formatSigned(initiativeBonus) });
  }

  if (value >= 15) {
    const defenseBonus = Math.floor((value - 15) / 3) + 1;
    effects.push({ label: 'Defensa', value: formatSigned(defenseBonus) });
  }

  if (value >= 17) {
    const extraDefenses = 1 + Math.floor((value - 17) / 3);
    effects.push({
      label: 'Defensas adicionales por turno',
      value: `${extraDefenses} (penalizan 1 por nivel del rival)`
    });
  }

  if (value >= 18) {
    const shots = value - 17;
    effects.push({ label: 'Disparos', value: formatSigned(shots) });
  }

  return withFallback(effects);
};

const describePercepcion = (value: number): AttributeEffectEntry[] => {
  const effects: AttributeEffectEntry[] = [];

  if (value <= 3) {
    effects.push({ label: 'Detectar magia', value: '-2' });
  } else if (value <= 6) {
    effects.push({ label: 'Detectar magia', value: '-1' });
  }

  if (value >= 13) {
    const advantagePoints = value - 12;
    const detectBonus = Math.floor((value - 13) / 3) + 1;
    effects.push(
      { label: 'Puntos extra de ventajas (nivel 1)', value: `+${advantagePoints}` },
      { label: 'Detectar magia', value: `+${detectBonus}` }
    );
  }

  return withFallback(effects);
};

const describeLiderazgo = (value: number): AttributeEffectEntry[] => {
  const effects: AttributeEffectEntry[] = [];

  if (value <= 3) {
    effects.push({ label: 'Concentración', value: '-2' });
  } else if (value <= 6) {
    effects.push({ label: 'Concentración', value: '-1' });
  }

  if (value >= 13) {
    const pfBonus = (value - 12) * 2;
    const beautyBonus = Math.floor((value - 13) / 2) + 1;
    effects.push(
      { label: 'PF adicionales', value: `+${pfBonus}` },
      { label: 'Bonificación a Belleza', value: `+${beautyBonus}` }
    );
  }

  if (value >= 16) {
    const concentrationBonus = value - 15;
    effects.push({ label: 'Concentración', value: formatSigned(concentrationBonus) });
  }

  return withFallback(effects);
};

const describeInteligencia = (value: number): AttributeEffectEntry[] => {
  const table: Record<number, AttributeEffectEntry[]> = {
    1: [
      { label: 'Iniciativa (al conjurar)', value: '-6' },
      { label: 'Concentración', value: '-3' }
    ],
    2: [
      { label: 'Iniciativa (al conjurar)', value: '-5' },
      { label: 'Concentración', value: '-2' }
    ],
    3: [
      { label: 'Iniciativa (al conjurar)', value: '-4' },
      { label: 'Concentración', value: '-2' }
    ],
    4: [
      { label: 'Iniciativa (al conjurar)', value: '-3' },
      { label: 'Concentración', value: '-1' }
    ],
    5: [
      { label: 'Iniciativa (al conjurar)', value: '-2' },
      { label: 'Concentración', value: '-1' }
    ],
    6: [
      { label: 'Iniciativa (al conjurar)', value: '-1' },
      { label: 'Concentración', value: '—' }
    ]
  };

  const effects = [...(table[value] ?? [])];

  if (value >= 13) {
    const pmBonus = (value - 12) * 2;
    const skillPoints = value - 12;
    effects.push(
      { label: 'PM adicionales', value: `+${pmBonus}` },
      { label: 'Puntos de pericia', value: `+${skillPoints}` }
    );
  }

  return withFallback(effects);
};

export const computeManualAttributeSummary = (attributes: Attributes): ManualAttributeSummary => {
  const resistenciaSummary = describeResistencia(attributes.resistencia);

  return {
    effects: {
      fuerza: describeFuerza(attributes.fuerza),
      resistencia: resistenciaSummary.effects,
      agilidad: describeAgilidad(attributes.agilidad),
      percepcion: describePercepcion(attributes.percepcion),
      liderazgo: describeLiderazgo(attributes.liderazgo),
      inteligencia: describeInteligencia(attributes.inteligencia)
    },
    derived: {
      restRecoveryBonus: resistenciaSummary.restBonus
    }
  };
};

