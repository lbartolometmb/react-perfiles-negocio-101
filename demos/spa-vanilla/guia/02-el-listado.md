# El listado

[← Página anterior](01-antes-de-abrir.md) · [Siguiente página →](03-rutas-sin-recarga.md)

## Lo que se ve

En `http://localhost:8081/`:

- «Cargas de este documento en la pestaña: 1», «Vistas pintadas por JavaScript: 1» y «Peticiones de datos: 1».
- El botón «Recargar datos» y, a su lado, «Datos cargados a las» seguido de la hora.
- Un buscador «Buscar línea o parada» y la frase «2 de 2 líneas visibles.»
- Una ficha «Línea L1», «Estado: en servicio», con el enlace «Ver detalle de L1».
- Una ficha «Línea L2», «Estado: retraso leve», con «Ver detalle de L2».

## Lo que llegó del servidor

Ver código fuente (Ctrl+U) enseña `index.html` tal como llegó. Tiene el encabezado, los dos contadores con un guion y un cero, y `<div id="app"></div>` vacío. No hay ninguna línea, ninguna parada, ningún buscador.

En la pestaña Red, al cargar, hay cuatro peticiones: el documento, `estilos.css`, `app.js` y `datos.json`. Esta última es JSON. Lo que se ve en pantalla lo ha escrito `app.js` con esos datos. Durante la petición aparece «Cargando líneas…»; en local dura tan poco que casi no se ve.

Es la misma situación que en la SPA de React: el documento es un marco, y el contenido lo construye el programa. Aquí el programa es un fichero de 150 líneas escrito a mano.

## Filtrar

Al escribir «merc» en el buscador queda solo L2 y la frase pasa a «1 de 2 líneas visibles.» Con una palabra que no coincide con nada, «Ninguna línea coincide con el filtro.»

El texto escrito se guarda en `estado.filtro`, una variable de `app.js`. Cada tecla vuelve a pintar el listado entero a partir de esa variable, y por eso el contador «Vistas pintadas» sube con cada pulsación. La terminal del servidor no escribe nada: filtrar no pide nada.

Parece lo mismo que el filtro de la página tradicional, y en esta pantalla lo es. La diferencia aparece al cambiar de pantalla, en la página siguiente.

## Recargar datos

Con «norte» escrito en el buscador, pulsar «Recargar datos».

- El botón se desactiva y aparece «Recargando…». Enseguida pasa a «Datos recargados a las» y la hora nueva.
- «Peticiones de datos» sube a 2. «Vistas pintadas» sube. «Cargas de este documento» no se mueve.
- El buscador sigue diciendo «norte» y la dirección sigue siendo `/`.
- En la pestaña Red aparece una sola petición nueva, `datos.json`. No se ha pedido ni `index.html` ni `app.js`.

Es lo contrario de pulsar F5. F5 tira el documento, lo pide entero y pierde el filtro. El botón pide solo los datos y vuelve a pintar con lo que ya había en memoria.

Para ver que los datos cambian de verdad: con la página abierta, editar `demos/spa-vanilla/public/datos.json` —por ejemplo, poner `"en servicio"` en el estado de L2— y pulsar «Recargar datos». La ficha cambia sin recargar. La petición se hace con `cache: "no-store"` para que el navegador no conteste con una copia guardada.

Si el servidor no responde, el mensaje es «No se han podido recargar. Se siguen mostrando los datos anteriores.» y la vista no se vacía: los datos viejos siguen en `estado.lineas`.
