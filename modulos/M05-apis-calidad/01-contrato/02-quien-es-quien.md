# Quién es quién

[← Página anterior](01-rest-y-json.md) · [Siguiente página →](03-asincrono.md)

## Cuatro papeles

| Papel | En la demo | En un sistema de verdad |
|-------|------------|-------------------------|
| Navegador | Muestra `/flujo` y dispara `fetch` al pulsar | Igual, en el puesto de quien opera |
| Frontend | Decide carga, vacío, datos y error. No inventa INC-14 | Igual. Puede ordenar y filtrar lo ya recibido. No es la autoridad del dato |
| API | `route.js` devuelve JSON según el modo | El contrato publicado. Puede haber varias versiones |
| Datos | El array escrito en `route.js` | El sistema donde se registran las incidencias |

En la demo, API y datos están en el mismo fichero para poder forzar el fallo y la espera. Eso es un simulacro honesto: el fichero lo dice. No hay una base detrás. Quien presente esta ruta como «ya integrada con explotación» está mintiendo el alcance. El papel didáctico es ver los cuatro desenlaces con una sola URL, no sustituir el sistema.

## Qué no debe hacer cada uno

- El frontend no completa una incidencia que el JSON no trae «para que la ficha no quede vacía». Si falta el texto, se ve que falta.
- La API no devuelve HTML de la página. Devuelve datos. La página ya llegó por otra URL.
- El navegador no es un sitio donde guardar la incidencia oficial. Una recarga vuelve a preguntar.
- El simulacro no autentica. Cualquiera que alcance la URL lee el JSON. En un panel real eso sería un defecto, y el caso final lo deja fuera a propósito para que no se dé por resuelto.

## La frontera que ya se preparó

`flujo/page.js` guarda `fase` e `incidencias` en el estado de la página. La tarjeta presentacional del listado de líneas no interviene: las incidencias se pintan aquí mismo, en `article` sencillos. Es coherente con un ejemplo corto. Si el producto creciera, la ficha de una incidencia sería una pieza, y la página seguiría siendo quien pide y quien guarda la fase. El contrato no cambia por esa refactorización. Cambia la facilidad de leerlo.
