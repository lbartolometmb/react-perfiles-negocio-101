# Lectura de la SPA

[← Página anterior](donde-vive-el-estado.md) · [Siguiente página →](../03-carpetas/arbol-spa.md)

## Recorrido con los ficheros abiertos

Con la SPA en `http://localhost:5173` y estos tres ficheros a la vista.

1. `TarjetaLinea.jsx`. Confirmar que no importa `datos.js` ni conoce `vista`. El botón existe solo si llega `onVerDetalle`. El texto del botón es «Ver detalle», fijo, no el nombre de la línea.
2. `App.jsx`. Confirmar `useState("listado")` y `useState(null)`. Confirmar la condición `item.id === "L1"` como el único motivo de que L2 no tenga botón. Confirmar que el detalle pinta `linea.nombre`, `linea.detalle` y `linea.estado`, y que el botón «Volver al listado» pone la vista en `listado` y el id en `null`.
3. `datos.js`. Confirmar que el texto «Centro / Norte. Frecuencia habitual: 4 minutos.» vive aquí, y que L2 trae su detalle aunque la pantalla no lo ofrezca. El dato existe; la acción, no.

## Qué se afirma después del recorrido

- La regla de negocio de la demo («solo L1 se abre») está en `App`, en una condición. Cambiarla es tocar esa condición, no la tarjeta.
- El texto de frecuencia está en el dato. Cambiar «4 minutos» no obliga a tocar la tarjeta del listado, que ni lo muestra.
- No hay petición. Cualquier discurso de «la lista viene del servidor» es falso para esta demo y hay que decirlo así, para que la ausencia de error y de carga no se tome por robustez.

## Qué se mira al pulsar

El título pasa de «Red de transporte» a «Detalle de L1» porque el `h1` es una expresión sobre `vista` y `linea`. No hay un segundo `h1` escondido. Al volver, la expresión cae en el otro ramo. Es el mismo sitio del código. Esta es la demostración más pequeña de «la interfaz es función del estado»: un título, dos valores.
