Engine and data flow (pseudo-local)

Overview
- Built-in attribute tables: implemented in the local engine under `src/domain/builtin/*.ts`.
  - These define deterministic modifiers derived from attribute thresholds (F, R, A, P, L, I, Belleza, CategoriaSocial).
  - They are loaded into the engine as `builtinAttributeModifiers` and always applied.

- Catalog data (races, raceVariants, categories, specialties, advantages, disadvantages, equipment, skills, etc.)
  - Stored in Supabase and fetched at app bootstrap (`/api/catalogs/bootstrap`).
  - Each catalog record carries its own `modifiers` array (RuleModifier objects).
  - These modifiers are dynamic content (can be authored in the DB) and are merged with the built-ins by the engine.

What the engine does (at a glance)
1. Collect selections and attributes from the character seed (race, variant, categories, specialty, advantages/disadvantages, equipment, attributes values, flags).
2. Gather modifiers from: builtins + catalog records matching the selections + any custom modifiers on the seed.
3. Sort modifiers by priority and evaluate their `conditions` against the current context (attributes, level, selections, flags).
4. For each modifier that applies, compute the operation (add / multiply / perPoint / set) and mutate the snapshot's target (resource, combat stat, attribute).
5. Return the final snapshot and a debug log listing applied modifiers and deltas.

What is expected from Supabase vs built-in
- Built-ins (in `src/domain/builtin`) encode static rule tables described in the manual (attribute tables, beauty tiers, social category rules that are invariant across installations).
- Supabase provides catalog content that is data-driven: races, race variants, categories, specialties, equipment, advantages/disadvantages and their modifiers. These are authored in the DB and can change without code deployments.
- Practically: all attribute thresholds, per-point scalings (e.g. +1 PM per intelligence point above 12) are implemented as builtins. Any rule that expresses a racial or selectable modifier should be placed as a catalog modifier in Supabase (so authors can tweak them).

Money and social category
- Money is not currently a first-class `resource` inside the engine (`resource` keys are `pg`, `pc`, `pm`, `recuperacionPg`, `advantagePoints`, `skillPoints`, `xpModifier`).
- The social category and the "starting money roll" rule in the manual are creation-time behaviors:
  - The UI now exposes a money generator (2D6*10 Mc, 1D6*10 Mp, 1D4*10 Mo) and editable money fields.
  - `categoriaSocial` is added to the engine attributes and there are built-in modifiers (with `notes`) to indicate how the chosen social class affects money generation (e.g. Noble: "triplicar tiradas de dinero").
  - Because the engine cannot "roll dice" at runtime for money, the UI applies the dice rolls and reads the `categoriaSocial` notes to present the adjusted totals.

Advantage / disadvantage / skill points
- The engine exposes resources for `advantagePoints` and `skillPoints`.
- Built-ins and catalog modifiers can add/subtract from these resources (for example, high Perception adds advantage points from the built-in table; high Intelligence adds skill points).
- The UI components (`Advantages`, `Disadvantages`, `Skills`) should read the preview snapshot produced by `useCharacterPreview()` to show current `snapshot.resources.advantagePoints` and `snapshot.resources.skillPoints`.
  - Adding an advantage should deduct its `cost` from `advantagePoints`.
  - Adding a disadvantage should increase `advantagePoints` by its `reward`.
  - Adding/removing skills should change `skillPoints` accordingly (each skill record includes a `cost`).

Pseudocode flow (user action → UI → engine → screen)
1. User selects race / raceVariant / category / specialty / attributes / advantages / disadvantages / equipment.
2. The builder selection is serialized into the `CharacterSeed` and `useCharacterPreview()` constructs:
   - `attributes`: the current attribute values (now including `belleza` and `categoriaSocial`).
   - `selections`: the ids for race, category, specialty, advantage/disadvantage ids, equipment ids, etc.
3. `useCharacterPreview()` calls `buildCharacterSnapshot(seed, { catalogs })` which:
   - merges `builtinAttributeModifiers` and catalog modifiers matching selections,
   - filters modifiers by `conditions` (attribute ranges, selection ids, flags),
   - applies operations to the snapshot (resources, combat stats, attributes),
   - returns `snapshot` plus `debugLog`.
4. The UI consumes `snapshot`:
   - `snapshot.resources.advantagePoints` → show current advantage budget in `Advantages` step.
   - `snapshot.resources.skillPoints` → show current skill budget in `Skills` step.
   - `snapshot.combat` and `snapshot.attributes` → update preview panel.
5. When the user toggles an advantage, the UI should:
   - Check `snapshot.resources.advantagePoints` minus sum(costs of selected advantages) and allow/disallow selection.
   - Update `character.advantages` which triggers a new preview snapshot to recalc budgets.

Notes and next steps
- I added built-in implementations for `percepcion`, `liderazgo`, `inteligencia`, `belleza`, and `categoria_social` under `src/domain/builtin/`.
- `categoria_social` modifiers include `notes` that describe money adjustments for creation-time use (the UI reads these notes and applies the coin-roll adjustments when generating starting money).
- The equipment step now exposes a small money generator (rolls the D6/D4 as in the manual), per-equipment price inputs, and a live remaining-money display (values treated in Mo equivalents).

If you want, I can:
- Wire the `Advantages` and `Skills` steps to the live `snapshot.resources` values and prevent selections that would exceed budgets.
- Add parsing for equipment prices from catalog data (if you add a `cost` column to the `equipment` table and include it in the bootstrap payload), so users don't have to type prices manually.
- Move money into the engine as a resource (would require schema and snapshot changes) so category modifiers can programmatically change currency values.

*** End of document
