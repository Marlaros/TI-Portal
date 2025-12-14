// Categoria social builtins: provide social bonuses and notes for money handling.
// The manual defines ranges (80-100 Noble, 60-79 Comerciante, 11-59 Plebeyo, 1-10 Pobre).
// Money generation is a creation-time dice roll and isn't fully handled by the engine resources,
// so modifiers include notes to help the UI apply the monetary adjustments.

import { RuleModifier } from '../rules';

const source = { id: 'categoria-social', nombre: 'Categoría social', manualPage: 2711 };

const noble: RuleModifier = {
	id: 'categoria-noble',
	source,
	target: { kind: 'combat', key: 'hablarMasas' },
	operation: { kind: 'add', value: 3 },
	conditions: [
		{ type: 'attribute', attribute: 'categoriaSocial', min: 80, max: 100 }
	],
	notes: 'Noble: triplicar tiradas de dinero al generar (Mo/Mp/Mc).'
};

const comerciante: RuleModifier = {
	id: 'categoria-comerciante',
	source,
	target: { kind: 'combat', key: 'negociarRogar' },
	operation: { kind: 'add', value: 2 },
	conditions: [
		{ type: 'attribute', attribute: 'categoriaSocial', min: 60, max: 79 }
	],
	notes: 'Comerciante: +30 Mc, +20 Mp, +10 Mo al generar dinero.'
};

const plebeyo: RuleModifier = {
	id: 'categoria-plebeyo',
	source,
	target: { kind: 'combat', key: 'negociarRogar' },
	operation: { kind: 'add', value: 0 },
	conditions: [
		{ type: 'attribute', attribute: 'categoriaSocial', min: 11, max: 59 }
	],
	notes: 'Plebeyo: sin modificaciones a las tiradas de dinero.'
};

const pobre: RuleModifier = {
	id: 'categoria-pobre',
	source,
	target: { kind: 'combat', key: 'adular' },
	operation: { kind: 'add', value: -1 },
	conditions: [
		{ type: 'attribute', attribute: 'categoriaSocial', min: 1, max: 10 }
	],
	notes: 'Pobre: se comienza sin monedas de oro (Mo).'
};

export const categoriaSocialModifiers: RuleModifier[] = [noble, comerciante, plebeyo, pobre];

