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
      )
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

