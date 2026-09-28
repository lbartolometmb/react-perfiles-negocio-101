# Rutas sin recarga

[← Página anterior](02-el-listado.md) · [Siguiente página →](04-lectura-del-codigo.md)

## Abrir el detalle

Con «merc» escrito en el buscador, pulsar «Ver detalle de L2».

- La dirección pasa a `http://localhost:8081/lineas/L2`.
- El título pasa a «Detalle de L2», también el de la pestaña.
- Aparece «L2 — Este / Sur», «Frecuencia habitual: 6 minutos. Ahora mismo: retraso leve.» y «Paradas: Mercado · Universidad · Puerto.»
- Debajo: «Filtro guardado en memoria: «merc».»
- «Cargas de este documento» sigue en 1. «Vistas pintadas» ha subido.
- La terminal del servidor no escribe nada. No se ha pedido `/lineas/L2`.

La dirección ha cambiado y el documento no. Eso lo hace `history.pushState`: el navegador apunta una entrada nueva en el historial y actualiza la barra, sin pedir nada. Después `app.js` mira la dirección y pinta la vista que le corresponde.

## Volver

Pulsar Atrás en el navegador. La dirección vuelve a `/`, el listado aparece con «merc» en el buscador y solo L2 visible. El contador de cargas sigue en 1. Adelante lleva otra vez al detalle.

El navegador avisa a la página con el evento `popstate` y `app.js` vuelve a pintar. El enlace «Volver al listado» hace lo mismo por otro camino: es un `<a href="/">` que la aplicación intercepta.

Esto es lo que la página tradicional no podía hacer: el filtro ha pasado de una pantalla a otra porque las dos viven en el mismo documento, con la misma memoria.

## Abrir la dirección directamente

Copiar `http://localhost:8081/lineas/L1` y pegarlo en la barra, o recargar estando en el detalle.

- El detalle de L1 aparece.
- «Cargas de este documento» sube: ahora sí ha habido una carga.
- «Vistas pintadas» vuelve a 1 y el filtro se ha perdido, porque la memoria del documento anterior ya no existe.
- La terminal escribe `GET /lineas/L1 → index.html`.

El servidor no tiene ningún `detalle.html`. Ante `/lineas/L1` responde con el mismo `index.html` de siempre, y es `app.js` quien lee la dirección y decide pintar el detalle. Sin esa regla del servidor, recargar en el detalle daría un error 404. Es la pieza que muchas SPA olvidan al publicarse.

`http://localhost:8081/lineas/L9` enseña «No encontrado — Esa dirección no corresponde a ninguna vista.» El servidor respondió 200 con el documento; el «no encontrado» lo decide la aplicación.

## Comparado con las otras dos demos

| | Tradicional, 8080 | SPA sin React, 8081 | SPA React, 5173 |
|---|-------------------|---------------------|-----------------|
| Abrir el detalle | Carga `detalle.html` | Cambia la dirección, no carga | No cambia la dirección, no carga |
| Contador de cargas | Sube | No sube | Pintado como 1 |
| Atrás | Vuelve al listado | Vuelve al listado, con el filtro | No conoce el detalle |
| Filtro al volver | Perdido | Conservado | No hay filtro |
| Pegar la dirección del detalle | Abre el detalle | Abre el detalle | No hay dirección |

La SPA de React es la que peor sale en esta tabla, y no por ser React. Sus direcciones no se han programado, a propósito, para que se vea el mecanismo mínimo. Aquí sí se han programado, a mano, con unas pocas funciones de `app.js`.
