# Antes de abrir la SPA sin React

[← Página anterior](../../tradicional/guia/07-jsonp.md) · [Siguiente página →](02-el-listado.md)

## Para qué está esta demo

Demuestra que una SPA no necesita React. Aquí no hay biblioteca, ni instalación, ni paso de construcción: un fichero HTML, una hoja de estilos, un fichero JavaScript y un JSON con las líneas. Lo que convierte esto en una SPA es cómo se comporta en el navegador, no la herramienta con la que se escribió.

## Arranque

```bash
npm run demo:spa-vanilla
```

Se abre en `http://localhost:8081`. No hace falta `npm install`: el servidor es Node sin dependencias, igual que el de la página tradicional. La terminal escribe una línea por cada petición que recibe, y eso se va a usar en la guía.

La marca del encabezado dice «SPA sin React» y el fondo es morado. Si dice «Página tradicional» (azul marino) o «SPA React» (verde), se está en otro puerto.

## Ficheros

Todo está en `demos/spa-vanilla/`.

| Fichero | Qué hace |
|---------|----------|
| `server.js` | Escucha en el 8081. Cualquier dirección sin extensión (`/`, `/lineas/L1`, `/lo-que-sea`) recibe el mismo `index.html`. Los ficheros con extensión se sirven tal cual |
| `public/index.html` | El documento único. Encabezado, dos contadores y un `<div id="app">` vacío |
| `public/app.js` | Toda la aplicación: estado, vistas, rutas y eventos |
| `public/datos.json` | L1 y L2 con tramo, estado, frecuencia y paradas |
| `public/estilos.css` | Aspecto. No interviene en el comportamiento |

## Los dos contadores

- «Cargas de este documento en la pestaña» se guarda en `sessionStorage`, como en la página tradicional. Sube solo si el navegador carga `index.html` otra vez.
- «Vistas pintadas por JavaScript» vive en memoria. Sube cada vez que `app.js` redibuja la zona principal y vuelve a 1 cuando el documento se recarga.

Si al moverse por la aplicación sube el segundo y no el primero, se está viendo una SPA.

## Qué se va a comprobar

1. El HTML que llega del servidor no trae las líneas.
2. Abrir un detalle cambia la dirección sin cargar otro documento.
3. Atrás y Adelante del navegador funcionan.
4. El filtro escrito en el listado sigue ahí al volver del detalle.
5. `http://localhost:8081/lineas/L1` se puede pegar en otra pestaña y abre el detalle.
