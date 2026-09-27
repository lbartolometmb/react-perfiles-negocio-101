# El detalle sin recarga

[← Página anterior](02-el-listado.md) · [Siguiente página →](04-lectura-del-codigo.md)

## Qué ocurre al pulsar «Ver detalle»

El botón no tiene `href`. Ejecuta una función que hace dos asignaciones: `lineaId` pasa a ser `"L1"` y `vista` pasa a ser `"detalle"`. React vuelve a calcular `App`. El título deja de ser «Red de transporte» y pasa a ser «Detalle de L1», porque el título está escrito como una condición sobre `vista` y sobre la línea encontrada. El listado deja de pintarse. En su lugar hay un bloque con el nombre, el texto «Centro / Norte. Frecuencia habitual: 4 minutos.» y el estado. Debajo, el botón «Volver al listado».

La dirección sigue siendo `http://localhost:5173/`. No aparece `detalle` en la barra. El historial no gana una entrada. Atrás, si se pulsa, no vuelve al listado: sale de la página o no hace nada útil, según desde dónde se hubiera entrado. Por eso existe el botón de volver, que pone `vista` otra vez en `listado` y `lineaId` en vacío.

El contador sigue en 1. No ha habido segundo documento.

## Qué se conserva en esa ida y vuelta

La ida y la vuelta no piden datos. `datos.js` sigue importado. No hay parpadeo de un documento nuevo. Si la demo tuviera un filtro escrito en un campo, ese campo seguiría en memoria al ir al detalle y al volver, siempre que el campo viviera en `App` o por encima, y no dentro de una pieza que se desmonte y se olvide. En esta demo no hay filtro: no hay que inventarlo al contarlo. Lo que sí se conserva es el programa entero.

## Qué se pierde al recargar

Con el detalle abierto, recargar la pestaña. Vuelve el listado. `useState` inicializa `vista` en `"listado"` cada arranque. El detalle no estaba en la URL, así que no hay nada que restaurar. Esta recarga es la escena que hay que haber visto antes de aceptar una frase del tipo «el usuario no pierde el contexto». En esta demo lo pierde en cuanto refresca. Un producto que prometa lo contrario tiene que enseñar la URL del detalle o un guardado en servidor, no solo la fluidez del botón.

## L2

L2 no tiene botón. No es un descuido: muestra que la acción es opcional y viene de fuera. Si alguien echa de menos el detalle de L2, la respuesta está en `App.jsx`, en la condición `item.id === "L1"`, no en la tarjeta. Buscar el botón dentro de `TarjetaLinea` y no encontrarlo para L2 es exactamente la lectura que el componente invita.
