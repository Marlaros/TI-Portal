import { exactAttributeModifier, perPointModifier } from './factory';

const liderazgoSource = {
	id: 'tabla-liderazgo',
	nombre: 'Tabla de Liderazgo',
	manualPage: 4
};

const liderazgoFlat = [
	exactAttributeModifier({ id: 'liderazgo-1-conc', attribute: 'liderazgo', exact: 1, target: { kind: 'combat', key: 'concentracion' }, value: -2 }, liderazgoSource),
	exactAttributeModifier({ id: 'liderazgo-2-conc', attribute: 'liderazgo', exact: 2, target: { kind: 'combat', key: 'concentracion' }, value: -2 }, liderazgoSource),
	exactAttributeModifier({ id: 'liderazgo-3-conc', attribute: 'liderazgo', exact: 3, target: { kind: 'combat', key: 'concentracion' }, value: -2 }, liderazgoSource),
	exactAttributeModifier({ id: 'liderazgo-4-conc', attribute: 'liderazgo', exact: 4, target: { kind: 'combat', key: 'concentracion' }, value: -1 }, liderazgoSource),
	exactAttributeModifier({ id: 'liderazgo-5-conc', attribute: 'liderazgo', exact: 5, target: { kind: 'combat', key: 'concentracion' }, value: -1 }, liderazgoSource),
	exactAttributeModifier({ id: 'liderazgo-6-conc', attribute: 'liderazgo', exact: 6, target: { kind: 'combat', key: 'concentracion' }, value: -1 }, liderazgoSource)
];

const liderazgoScaling = [
	// PF adicionales: (valor-12)*2 por punto desde 13
	perPointModifier({ id: 'liderazgo-13-pf', attribute: 'liderazgo', target: { kind: 'resource', key: 'pg' }, startValue: 13, value: 2 }, liderazgoSource),
	// Bonificación a belleza: +1 cada 2 puntos desde 13
	perPointModifier({ id: 'liderazgo-13-belleza', attribute: 'liderazgo', target: { kind: 'attribute', key: 'belleza' }, startValue: 13, step: 2, includeStart: true, value: 1 }, liderazgoSource),
	// Concentración extra desde 16
	perPointModifier({ id: 'liderazgo-16-conc', attribute: 'liderazgo', target: { kind: 'combat', key: 'concentracion' }, startValue: 16, value: 1 }, liderazgoSource)
];

export const liderazgoModifiers = [...liderazgoFlat, ...liderazgoScaling];

