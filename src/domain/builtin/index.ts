import { agilidadModifiers } from './agilidad';
import { fuerzaModifiers } from './fuerza';
import { resistenciaModifiers } from './resistencia';

export const builtinAttributeModifiers = [
  ...fuerzaModifiers,
  ...resistenciaModifiers,
  ...agilidadModifiers
];

