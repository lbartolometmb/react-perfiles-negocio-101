# El listado

[← Página anterior](01-antes-de-abrir.md) · [Siguiente página →](03-rutas-sin-recarga.md)

## Lo que se ve

En `http://localhost:8081/`:

- «Cargas de este documento en la pestaña: 1» y «Vistas pintadas por JavaScript: 1».
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
