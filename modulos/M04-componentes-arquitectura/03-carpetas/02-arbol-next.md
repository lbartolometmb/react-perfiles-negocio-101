# Árbol de Next.js

[← Página anterior](01-arbol-spa.md) · [Siguiente página →](03-rutas-y-memoria.md)

## La carpeta es la dirección

Next.js, en este proyecto, organiza `app/` por URLs. Una carpeta con `page.js` es una página. Una carpeta `api` con `route.js` es una respuesta que no es página.

| Ruta | URL | Qué es |
|------|-----|--------|
| `demos/next/app/page.js` | `/` | Portada. Servidor, hora, listado |
| `demos/next/app/cliente/page.js` | `/cliente` | Hora en el navegador |
| `demos/next/app/flujo/page.js` | `/flujo` | Botones que piden la API |
| `demos/next/app/api/incidencias/route.js` | `/api/incidencias` | JSON. No tiene cabecera ni título |
| `demos/next/app/components/TarjetaLinea.js` | ninguna | Pieza. No es una dirección |
| `demos/next/app/layout.js` | todas | Marco: idioma, título, CSS |
| `demos/next/app/estilos.css` | ninguna | Cabecera violeta |

`components` no aparece en la barra del navegador. Si una propuesta llama «ruta» a un componente, está mezclando el mapa. La ruta es lo que se puede pedir con una dirección. El componente es lo que una ruta (o varias) usan.

## Diferencias que se ven sin teoría extra

- Hay tres `page.js`, no un `App` con una variable `vista`.
- La API está al lado de las páginas y no es una de ellas. Se puede abrir la URL de la API en el navegador y se ve JSON, no la cabecera violeta. Conviene hacerlo una vez, con `?modo=ok`, para separar «página» de «contrato».
- `layout.js` envuelve a todas. Un cambio de idioma o de estilo común va ahí. Un cambio del texto de la portada no: va en su `page.js`. Si alguien pone el listado de líneas en el layout, las tres URLs lo mostrarían, incluida la de cliente, que no lo quiere.

## Build

`demos/next/.next` es el resultado de construir. No se edita y no hace falta leerlo para juzgar la arquitectura. Si la demo se sirve sin haber construido, el fallo es de operación. La arquitectura se lee en `app/`, que es lo que sí está escrito a mano.
