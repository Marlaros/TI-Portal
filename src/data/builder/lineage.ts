import { RuleModifier } from '@/domain/rules';
import { LineageRuleSet } from './types';

const rule = (
  id: string,
  nombre: string,
  target: RuleModifier['target'],
  value: number,
  manualPage?: number
): RuleModifier => ({
  id,
  source: { id, nombre, manualPage },
  target,
  operation: { kind: 'add', value }
});

export const LINEAGE_RULES: LineageRuleSet = {
  race: {
    Humanos: [
      rule(
        'raza-humanos-liderazgo',
        'Humanos',
        { kind: 'combat', key: 'liderazgoChequeo' },
        1,
        9
      ),
      rule('raza-humanos-adv', 'Humanos', { kind: 'resource', key: 'advantagePoints' }, 30, 9),
      rule('raza-humanos-skill', 'Humanos', { kind: 'resource', key: 'skillPoints' }, 15, 9)
    ],
    'Altos elfos': [
      rule(
        'raza-altos-elfos-percepcion',
        'Altos elfos',
        { kind: 'combat', key: 'percepcionChequeo' },
        2,
        18
      )
    ]
    ,
    'Elfos': [
      rule('raza-elfos-pg', 'Elfos', { kind: 'resource', key: 'pg' }, 15, 9),
      rule('raza-elfos-adv', 'Elfos', { kind: 'resource', key: 'advantagePoints' }, 20, 9),
      rule('raza-elfos-skill', 'Elfos', { kind: 'resource', key: 'skillPoints' }, 8, 9)
    ],
    'Duendes': [
      rule('raza-duendes-pg', 'Duendes', { kind: 'resource', key: 'pg' }, 15, 9),
      rule('raza-duendes-adv', 'Duendes', { kind: 'resource', key: 'advantagePoints' }, 20, 9),
      rule('raza-duendes-skill', 'Duendes', { kind: 'resource', key: 'skillPoints' }, 8, 9)
    ],
    'Ogros': [
      rule('raza-ogros-pg', 'Ogros', { kind: 'resource', key: 'pg' }, 60, 9),
      rule('raza-ogros-adv', 'Ogros', { kind: 'resource', key: 'advantagePoints' }, 20, 9),
      rule('raza-ogros-skill', 'Ogros', { kind: 'resource', key: 'skillPoints' }, 8, 9)
    ],
    'Enanos': [
      rule('raza-enanos-pg', 'Enanos', { kind: 'resource', key: 'pg' }, 30, 9),
      rule('raza-enanos-adv', 'Enanos', { kind: 'resource', key: 'advantagePoints' }, 20, 9),
      rule('raza-enanos-skill', 'Enanos', { kind: 'resource', key: 'skillPoints' }, 8, 9)
    ]
  },
  raceType: {
    'Hombres de Almoon': [
      rule(
        'subraza-almoon-pg',
        'Hombres de Almoon',
        { kind: 'resource', key: 'pg' },
        2,
        9
      )
    ]
  },
  category: {
    Guerrero: [
      rule(
        'categoria-guerrero-ataque',
        'Guerrero',
        { kind: 'combat', key: 'ataque' },
        2,
        34
      ),
      rule(
        'categoria-guerrero-dano',
        'Guerrero',
        { kind: 'combat', key: 'dano' },
        1,
        34
      )
    ],
    Hechicero: [
      rule(
        'categoria-hechicero-pm',
        'Hechicero',
        { kind: 'resource', key: 'pm' },
        3,
        34
      ),
      rule(
        'categoria-hechicero-concentracion',
        'Hechicero',
        { kind: 'combat', key: 'concentracion' },
        2,
        34
      )
    ]
  },
  specialty: {
    Marcial: [
      rule(
        'especialidad-marcial-defensa',
        'Especialidad Marcial',
        { kind: 'combat', key: 'defensa' },
        1,
        54
      )
    ],
    Necromante: [
      rule(
        'especialidad-necromante-percepcion',
        'Especialidad Necromante',
        { kind: 'combat', key: 'percepcionChequeo' },
        1,
        115
      )
    ]
  }
};

