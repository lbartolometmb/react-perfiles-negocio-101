# Antes de abrir la página tradicional

[← Página anterior](../../../modulos/M01-ecosistema-react/04-alternativas-y-entorno/como-leerlo-en-una-propuesta.md) · [Siguiente página →](02-el-listado.md)

## Para qué es esta guía

Esta guía es el recorrido de la demo, no un resumen. Cada página dice qué hay en pantalla, qué fichero lo produce y qué conclusión se puede sacar sin interpretar de más. La demo se arranca con `npm run demo:tradicional` y queda en `http://localhost:8080`. El proceso solo reparte los ficheros de `demos/tradicional/public/`. No hay React aquí. Si en el puerto no responde, el resto de la guía no tiene objeto: primero el proceso, después la lectura.

## Qué hay en la carpeta

| Fichero | Papel |
|---------|--------|
| `server.js` | Escucha en el puerto 8080 y devuelve el fichero pedido. Si piden `/`, sirve `index.html`. No compone datos ni ejecuta la página |
| `public/index.html` | El documento del listado |
| `public/detalle.html` | El documento del detalle de L1 |
| `public/estilos.css` | El aspecto. No participa en la diferencia tradicional/SPA |

Conviene tener el listado abierto en el navegador y `index.html` abierto al lado. La guía señala frases literales de la pantalla para poder comprobar que se está en la demo correcta y no en la SPA, que enseña las mismas líneas con otra marca.

## Qué no va a ocurrir

- No hay instalación de dependencias para esta demo. No usa `package.json`.
- No hay llamada a una API. Las líneas están escritas en el HTML.
- No hay botón que cambie la vista sin navegar. El único avance es un enlace a otro documento.
- L2 no tiene detalle. Es intencionado: no toda fila de un listado tradicional tiene por qué ser otro documento, y se ve que el enlace es una decisión de cada bloque, no una magia del listado.

## Cómo saber que es esta demo

La pastilla de la cabecera dice «Página tradicional» y el fondo de esa cabecera es azul marino. Si la pastilla dice «SPA React» y la cabecera es verde oscuro, se está en el puerto 5173 y esta guía no describe lo que se está viendo.
