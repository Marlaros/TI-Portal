import { agilidadModifiers } from './agilidad';
import { fuerzaModifiers } from './fuerza';
import { resistenciaModifiers } from './resistencia';
import { percepcionModifiers } from './percepcion';
import { liderazgoModifiers } from './liderazgo';
import { inteligenciaModifiers } from './inteligencia';
import { bellezaModifiers } from './belleza';
import { categoriaSocialModifiers } from './categoria_social';

export const builtinAttributeModifiers = [
  ...fuerzaModifiers,
  ...resistenciaModifiers,
  ...agilidadModifiers
  , ...percepcionModifiers, ...liderazgoModifiers, ...inteligenciaModifiers, ...bellezaModifiers, ...categoriaSocialModifiers
];

