# Antes de abrir la SPA

[← Página anterior](../../spa-vanilla/guia/04-lectura-del-codigo.md) · [Siguiente página →](02-el-listado.md)

## Arranque

La SPA se arranca con `npm run demo:spa` y se abre en `http://localhost:5173`. A diferencia de la página tradicional, aquí sí hay instalación: Vite y React están declarados en `demos/spa/package.json`. El contenedor los instala al crearse. Si el puerto no responde, el fallo es de entorno, no de la interfaz.

Quien sirve la página en desarrollo es Vite. Entrega `index.html` y, a partir de ahí, los módulos JavaScript. El HTML de `demos/spa/index.html` no contiene las líneas. Contiene un `<div id="root">` vacío y la orden de cargar `src/main.jsx`. `main.jsx` mete el componente `App` dentro de ese hueco. A partir de ese momento, lo que se ve lo produce React.

## Ficheros que importan en la guía

| Fichero | Qué mirar |
|---------|-----------|
| `index.html` | El documento único. Casi vacío |
| `src/main.jsx` | El arranque. No tiene lógica de negocio |
| `src/App.jsx` | `vista`, `lineaId`, el título que cambia, el contador fijo en 1 |
| `src/components/TarjetaLinea.jsx` | La pieza que solo pinta |
| `src/datos.js` | L1 y L2, con el texto del detalle ya incluido |

Conviene la pantalla en el navegador y `App.jsx` visible. La marca del encabezado dice «SPA React» y el fondo es verde oscuro. Si dice «Página tradicional», se está en el puerto 8080.

## Qué se va a comprobar

1. El listado aparece sin que el HTML original lo trajera.
2. «Ver detalle» no cambia la dirección y no pide otro HTML.
3. El contador de cargas del documento no se mueve, porque está escrito como 1 y porque no hay segunda carga.
4. «Volver al listado» es un botón del programa, no un enlace a otro fichero.
5. Recargar la pestaña deshace el detalle: la memoria no es la URL.
