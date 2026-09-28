# Props y estado

[← Página anterior](01-componente.md) · [Siguiente página →](03-actualizacion.md)

## Dos maneras de tener un dato en pantalla

| | Props | Estado |
|---|-------|--------|
| Qué son | Datos que la pieza recibe desde fuera | Datos que la pieza recuerda mientras está montada |
| En la demo | `nombre`, `estado`, y a veces `onVerDetalle` | `vista` y `lineaId` en `App` |
| Quién los cambia | Quien usa la pieza, al volver a pintarla con otros valores | La propia pieza, ante un clic o una respuesta |
| Si se leen mal | Se cree que la tarjeta «sabe» que es L1 | Se cree que el recuerdo es la base de datos, o que sobrevive siempre a una recarga |

Las props bajan. El estado vive en un sitio y, si hace falta, se pasa hacia abajo como props. La tarjeta no guarda la línea. `App` guarda qué línea está elegida y le pasa el nombre. Por eso L2 puede no tener botón: `App` decide no pasar `onVerDetalle`. La tarjeta obedece.

## Qué no son

Las props no son «la configuración del proyecto» ni el estado es «la base de datos». Los dos viven en la pantalla, en la memoria de esa visita. La base de datos, cuando exista, está detrás de una API. Al recargar, las props y el estado se vuelven a crear. Lo que no se haya puesto en la URL o en el servidor no continúa.

`onVerDetalle` es una prop un poco distinta: no es un texto, es una función. La tarjeta la llama al pulsar y no sabe qué hace. Eso mantiene la pieza tonta a propósito. Si la función que abre el detalle estuviera escrita dentro de la tarjeta, la tarjeta conocería `vista` y dejaría de ser intercambiable.

## Un ejemplo de lectura

Al pulsar «Ver detalle» en L1:

1. La tarjeta llama a la función recibida.
2. Esa función, definida en `App`, pone `lineaId` en `"L1"` y `vista` en `"detalle"`.
3. Esos dos estados provocan otro cálculo de `App`.
4. `App` ya no recorre la lista: pinta el detalle con las props que saca de `datos.js` para esa id.

Nadie ha editado el HTML a mano. Han cambiado dos datos en memoria y la pantalla se ha derivado de ellos. Esa frase es el módulo entero.
