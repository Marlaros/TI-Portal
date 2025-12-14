import { exactAttributeModifier, perPointModifier } from './factory';

const percepcionSource = {
	id: 'tabla-percepcion',
	nombre: 'Tabla de Percepción',
	manualPage: 4
};

const percepcionFlatModifiers = [
	// low values: 1..3 => -2 detectarMagia, 4..6 => -1
	exactAttributeModifier({ id: 'percepcion-1-detectar', attribute: 'percepcion', exact: 1, target: { kind: 'combat', key: 'detectarMagia' }, value: -2 }, percepcionSource),
	exactAttributeModifier({ id: 'percepcion-2-detectar', attribute: 'percepcion', exact: 2, target: { kind: 'combat', key: 'detectarMagia' }, value: -2 }, percepcionSource),
	exactAttributeModifier({ id: 'percepcion-3-detectar', attribute: 'percepcion', exact: 3, target: { kind: 'combat', key: 'detectarMagia' }, value: -2 }, percepcionSource),
	exactAttributeModifier({ id: 'percepcion-4-detectar', attribute: 'percepcion', exact: 4, target: { kind: 'combat', key: 'detectarMagia' }, value: -1 }, percepcionSource),
	exactAttributeModifier({ id: 'percepcion-5-detectar', attribute: 'percepcion', exact: 5, target: { kind: 'combat', key: 'detectarMagia' }, value: -1 }, percepcionSource),
	exactAttributeModifier({ id: 'percepcion-6-detectar', attribute: 'percepcion', exact: 6, target: { kind: 'combat', key: 'detectarMagia' }, value: -1 }, percepcionSource)
];

const percepcionScalingModifiers = [
	// Puntos extra de ventajas a partir de 13: +1 advantagePoints por punto
	perPointModifier({ id: 'percepcion-13-advPoints', attribute: 'percepcion', target: { kind: 'resource', key: 'advantagePoints' }, startValue: 13, value: 1 }, percepcionSource),
	// Detectar magia: +1 cada 3 puntos desde 13
	perPointModifier({ id: 'percepcion-13-detectar', attribute: 'percepcion', target: { kind: 'combat', key: 'detectarMagia' }, startValue: 13, step: 3, includeStart: true, value: 1 }, percepcionSource)
];

export const percepcionModifiers = [...percepcionFlatModifiers, ...percepcionScalingModifiers];

