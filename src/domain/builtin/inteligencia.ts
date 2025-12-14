import { exactAttributeModifier, perPointModifier } from './factory';

const inteligenciaSource = {
	id: 'tabla-inteligencia',
	nombre: 'Tabla de Inteligencia',
	manualPage: 4
};

const inteligenciaFlat = [
	exactAttributeModifier({ id: 'int-1-ini', attribute: 'inteligencia', exact: 1, target: { kind: 'combat', key: 'iniciativa' }, value: -6 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-1-conc', attribute: 'inteligencia', exact: 1, target: { kind: 'combat', key: 'concentracion' }, value: -3 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-2-ini', attribute: 'inteligencia', exact: 2, target: { kind: 'combat', key: 'iniciativa' }, value: -5 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-2-conc', attribute: 'inteligencia', exact: 2, target: { kind: 'combat', key: 'concentracion' }, value: -2 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-3-ini', attribute: 'inteligencia', exact: 3, target: { kind: 'combat', key: 'iniciativa' }, value: -4 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-3-conc', attribute: 'inteligencia', exact: 3, target: { kind: 'combat', key: 'concentracion' }, value: -2 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-4-ini', attribute: 'inteligencia', exact: 4, target: { kind: 'combat', key: 'iniciativa' }, value: -3 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-4-conc', attribute: 'inteligencia', exact: 4, target: { kind: 'combat', key: 'concentracion' }, value: -1 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-5-ini', attribute: 'inteligencia', exact: 5, target: { kind: 'combat', key: 'iniciativa' }, value: -2 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-5-conc', attribute: 'inteligencia', exact: 5, target: { kind: 'combat', key: 'concentracion' }, value: -1 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-6-ini', attribute: 'inteligencia', exact: 6, target: { kind: 'combat', key: 'iniciativa' }, value: -1 }, inteligenciaSource),
	exactAttributeModifier({ id: 'int-6-conc', attribute: 'inteligencia', exact: 6, target: { kind: 'combat', key: 'concentracion' }, value: 0 }, inteligenciaSource)
];

const inteligenciaScaling = [
	// PM adicionales: +2 por punto desde 13
	perPointModifier({ id: 'int-13-pm', attribute: 'inteligencia', target: { kind: 'resource', key: 'pm' }, startValue: 13, value: 2 }, inteligenciaSource),
	// Puntos de pericia: +1 por punto desde 13
	perPointModifier({ id: 'int-13-skillPoints', attribute: 'inteligencia', target: { kind: 'resource', key: 'skillPoints' }, startValue: 13, value: 1 }, inteligenciaSource)
];

export const inteligenciaModifiers = [...inteligenciaFlat, ...inteligenciaScaling];

