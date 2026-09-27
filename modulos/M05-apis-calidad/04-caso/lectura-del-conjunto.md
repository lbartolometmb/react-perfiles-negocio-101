# Lectura del conjunto

[← Página anterior](../03-checklist/eleccion.md) · [Siguiente página →](riesgos.md)

## Las piezas que sí existen

| Pieza | Dónde está | Qué arquitectura es | De dónde sale el dato |
|-------|------------|---------------------|------------------------|
| Documento tradicional | Puerto 8080 | Dos HTML. Cada enlace recarga | Escrito en el fichero |
| SPA | Puerto 5173 | Un documento vivo. Estado en `App` | `datos.js`, fijo |
| Portada | Puerto 3000 `/` | HTML compuesto en cada visita | Array en `page.js`, hora al vuelo |
| Cliente | `/cliente` | Cáscara más efecto en el navegador | `new Date()` en el puesto |
| Flujo | `/flujo` | Página que pide | `GET /api/incidencias` |
| Campo y puesto fijo | En el caso escrito | No hay proyecto | No hay demo |

Tratarlas como «la misma app» es el error de lectura que este curso viene deshaciendo. La SPA no es indexable. La portada no es un panel. El flujo no es el estado público de las líneas. El tradicional no está integrado. Cada una enseña un contrato.

## Preguntas de cierre, con respuesta de la demo

- ¿Qué pasa al recargar el detalle de L1 en la SPA? Se vuelve al listado. No hay URL.
- ¿Qué pasa al recargar el detalle tradicional? Sigue el detalle. Hay URL.
- ¿La hora de `/` está en el fuente? Sí, y cambia al repetir la visita.
- ¿La hora de `/cliente` está en el fuente? No. Está la frase de espera.
- ¿Vacío y error se leen igual? No. Dos frases distintas.
- ¿La ronda de inspección está demostrada? No. Está decidida como criterio, sin emulador.

Esas respuestas se pueden comprobar. Una entrega se lee con la misma lista, cambiando lo que la entrega haya prometido.
