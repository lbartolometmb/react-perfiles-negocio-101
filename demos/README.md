# Demos

[← Volver al índice](../README.md)

Tres procesos. Cada uno tiene una guía página a página.

- Página tradicional. `npm run demo:tradicional` — http://localhost:8080 — [guía](tradicional/guia/01-antes-de-abrir.md)
- SPA React. `npm run demo:spa` — http://localhost:5173 — [guía](spa/guia/01-antes-de-abrir.md)
- Next.js. `npm run demo:next` — http://localhost:3000 — [portada y cliente](next/guia/01-antes-de-abrir.md) — [flujo con API](next/guia/flujo/01-antes-de-pulsar.md)

La primera vez, en el contenedor: `npm run install:demos` y `npm --prefix demos/next run build`. El dev container lo hace al crearse. Next.js se sirve ya construido (`next start`).

Qué mira cada guía:

- **Tradicional.** Cada enlace entre listado y detalle recarga el documento; el contador de cargas sube al ir y volver. Dentro de cada documento hay interacción sin recarga: buscador, filtro, desplegables y pestañas. En `/ajax.html`, sin cambiar de documento: HTML construido en el servidor (XMLHttpRequest, formulario, fragmento en fichero y fetch), JSON con función de renderizado y JSONP.
- **SPA.** Cambiar de vista no recarga el documento: el contador pintado se queda en 1. `TarjetaLinea` solo pinta props; el estado vive en `App`. Recargar en el detalle vuelve al listado.
- **Next.js.** En `/` la hora ya viene en el HTML del servidor. En `/cliente` el fuente trae la frase de espera y la hora aparece después. En `/flujo` se pide `GET /api/incidencias?modo=ok|vacio|error|lento` y se leen carga, datos, vacío y error.
