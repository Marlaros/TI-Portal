# Arquitectura propuesta – Tierras Inmortales

## 1. Visión general
- **Dominio**: separamos reglas de presentación; todas las derivaciones (ataque, PG, estilos) viven en el motor de reglas.
- **Datos**: catálogos normalizados (razas, categorías, ventajas, armas) con versionado para futuras ediciones del manual.
- **Experiencia**: UI modular en Next.js 16 (App Router) y estado global desacoplado.
- **Infraestructura**: Supabase (Postgres + Auth + Storage) para reemplazar PocketBase; Prisma opcional para migraciones locales.

```
src/
 ├─ domain/          // Tipos del manual y motor de reglas
 ├─ data/            // Catálogos JSON + seeds
 ├─ infrastructure/  // Conectores (Supabase, analytics, uploads)
 ├─ design/          // Tokens de color y componentes básicos
 └─ modules/
      ├─ builder/    // Flujo de creación de personaje
      ├─ sheet/      // Hoja editable
      └─ library/    // “Mis Personajes” y explorador de reglas
```

## 2. Motor de reglas
1. **Normalización**: atributos base (3D6+2 + modificadores raciales).
2. **Aplicación incremental**:
   - Raza → Categoría primaria → Secundaria → Ventajas/Desventajas → Equipo → Contextos.
3. **Salida inmutable**: `CharacterSnapshot` con todos los campos necesarios para la hoja y el histórico.
4. **DSL declarativa** de modificadores (JSON): define el objetivo (`stat`), operación (`add`, `mul`, `per_point`) y condición (umbral de atributo, raza, estilo).
5. **Motor determinista** con pruebas unitarias respaldadas por ejemplos oficiales (p. ej. Altrial y su caída de 22 metros descrita en el manual).

## 3. Datos y versionado
- `data/catalogs/*.json` contiene registros con `id`, `slug`, `nombre`, `descripcion`, `manual_page`, `version`.
- Scripts de ingesta transforman `ManualTierrasInmortales.txt` en catálogos tipados.
- Cada registro incluye los modificadores en formato DSL para permitir actualizaciones sin tocar código.
- `Character` almacena snapshot + relaciones; `CharacterVersion` conserva histórico al subir de nivel.

## 4. Experiencia de usuario
1. **Shell**: layout inspirado en pergaminos élficos, barra lateral con navegación (“Inicio”, “Nuevo personaje”, “Mis personajes”, “Colecciones”).
2. **Nuevo personaje**: stepper guiado con vista previa en vivo de atributos y estadísticas; tooltips muestran citas del manual.
3. **Hoja viva**: cada bloque es editable y puede forzar valores manuales (con justificación).
4. **Mis personajes**: grilla con filtros, timeline de versiones y opción de duplicar personajes.
5. **Biblioteca**: explorador de razas/categorías/ventajas con filtros y ejemplos.

## 5. Infraestructura
- **Supabase Auth** (email, OAuth opcional) + RLS por `user_id`.
- **Storage** para retratos y recursos del manual.
- **Edge Functions** futuras para cálculos pesados y validaciones.
- Ambiente local con `supabase/config.toml` para levantar stack auto-hosteado si se desea.

## 6. Próximos pasos técnicos
1. Actualizar dependencias (hecho).
2. Crear módulos de dominio (`src/domain`) con tipos y tablas base.
3. Implementar motor de reglas mínimo (atributos + modificadores de Fuerza/Resistencia/Agilidad como MVP).
4. Migrar UI a nuevo sistema visual y conectar con el motor.
5. Configurar Supabase + seeds y reemplazar PocketBase gradualmente.
6. Documentar flujos y crear conjuntos de pruebas automatizadas.

## 7. Supabase & catálogos
- **Variables de entorno**: definir en `.env.local` los valores `SUPABASE_URL`, `SUPABASE_ANON_KEY` (cliente) y `SUPABASE_SERVICE_ROLE` (sólo para seeds). Opcionalmente `POCKETBASE_URL` si tu instancia local no vive en `http://127.0.0.1:8090`.
- **Esquema**: `supabase/schema.sql` incluye tablas para razas, categorías, especialidades, personajes y ahora también ventajas, desventajas, equipo, estilos, maestrías y pericias. Cada vez que se agreguen tablas nuevas, vuelve a ejecutar el script completo en el SQL editor de Supabase para sincronizar el esquema (los `create table` son idempotentes).
- **Ingesta masiva**:
  - `npm run seed:supabase` lee `pb_data/data.db`, genera slugs/UUIDs y publica razas, subrazas, categorías y especialidades.
  - `npm run seed:supabase:extras` carga los catálogos declarativos (ventajas, desventajas, equipo, estilos, maestrías y pericias) definidos en `scripts/seedSupabaseExtras.js`.
- **Medios (imágenes)**:
  - Define `SUPABASE_STORAGE_BUCKET` en `.env.local` (p. ej. `tierras-media`) y crea el bucket en Supabase Storage con políticas públicas de lectura.
  - Ejecuta `npm run seed:supabase:media` para subir los archivos de `pb_data/storage/**` al bucket y actualizar las columnas `image_url` / `image_urls`.
  - Next.js detecta `SUPABASE_URL` en build time y permite cargar imágenes desde `https://<project>.supabase.co/storage/v1/object/public/**`.

## 8. Auth, RLS y Storage
- **Auth**: habilita email/password o proveedores OAuth en Supabase. El frontend usa `SUPABASE_ANON_KEY`; scripts/SSR usan `SUPABASE_SERVICE_ROLE`.
- **RLS**:
  - Activa Row Level Security en `characters` y `character_versions`.
  - Políticas sugeridas:
    - `characters`: `INSERT/SELECT/UPDATE/DELETE` sólo si `auth.uid() = user_id`.
    - `character_versions`: `SELECT` sólo si el personaje padre pertenece al usuario; `INSERT` restringido a Edge Functions o service role.
  - Catálogos (`races`, `categories`, etc.) pueden dejarse con RLS desactivado o con política `SELECT true` para `anon`.
- **Storage**:
  - Bucket `tierras-media` (u otro nombre) con política pública de lectura para servir assets del manual.
  - Para retratos privados se recomienda un bucket separado con política basada en `auth.uid()`.

Este documento será el punto de referencia para coordinar cada entrega. Actualizarlo si se añaden módulos o cambian decisiones.

