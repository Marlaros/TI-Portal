import { perPointModifier } from './factory';

const bellezaSource = {
	id: 'tabla-belleza',
	nombre: 'Tabla de Belleza',
	manualPage: 1846
};

// Simple implementation: desde 13 en adelante la belleza otorga bonificaciones sociales.
const bellezaModifiers = [
	// Hablar en masas: +1 cada 2 puntos desde 13
	perPointModifier({ id: 'belleza-13-hablar', attribute: 'belleza', target: { kind: 'combat', key: 'hablarMasas' }, startValue: 13, step: 2, includeStart: true, value: 1 }, bellezaSource),
	// Adular: +1 cada 4 puntos desde 13 (más selectivo)
	perPointModifier({ id: 'belleza-13-adular', attribute: 'belleza', target: { kind: 'combat', key: 'adular' }, startValue: 13, step: 4, includeStart: true, value: 1 }, bellezaSource)
];

export { bellezaModifiers };

