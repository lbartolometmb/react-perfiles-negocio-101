# Demos

Tres procesos. Cada uno enseña una forma distinta de servir la misma red de transporte.

| Demo | Arranque | URL |
|------|----------|-----|
| Página tradicional | `npm run demo:tradicional` | http://localhost:8080 |
| SPA React | `npm run demo:spa` | http://localhost:5173 |
| Next.js | `npm run demo:next` | http://localhost:3000 |

La primera vez, en el contenedor: `npm run install:demos` y `npm --prefix demos/next run build`. El dev container lo hace al crearse. Next.js se sirve ya construido (`next start`), que es la demo estable.

Qué mirar:

- **Tradicional.** Cada enlace recarga el documento. El contador de cargas sube al ir y volver.
- **SPA.** Cambiar de vista no recarga el documento: el contador de cargas se queda en 1. `TarjetaLinea` solo pinta props; el estado vive en `App`.
- **Next.js.** En `/` la hora ya viene en el HTML del servidor. En `/cliente` la hora aparece después, en el navegador. En `/flujo` se pide `GET /api/incidencias?modo=ok|vacio|error|lento` y se ven carga, vacío y error.
