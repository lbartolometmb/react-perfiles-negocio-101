# Lectura del código

[← Página anterior](03-rutas-sin-recarga.md) · [Siguiente página →](../../spa/guia/01-antes-de-abrir.md)

Todo está en `demos/spa-vanilla/public/app.js`. Se lee de arriba abajo en este orden.

## El estado

```js
const estado = {
  lineas: [],
  filtro: "",
  pintadas: 0,
};
```

Es la memoria de la aplicación: las líneas descargadas, el texto del buscador y cuántas veces se ha pintado. Mientras el documento no se recargue, esto sigue vivo. Es lo que sobrevive al ir al detalle y volver.

## Las vistas

`vistaListado`, `vistaDetalle` y `vistaNoEncontrada` son funciones que leen `estado` y devuelven un título y una cadena de HTML. No tocan la página. Todo texto que viene de los datos pasa antes por `escapar`, para que un nombre con etiquetas se vea como texto y no se ejecute como HTML.

## Las rutas

`elegirVista` mira `location.pathname`:

- `/` da el listado.
- `/lineas/` seguido de algo da el detalle de ese identificador.
- Cualquier otra cosa da «No encontrado».

Es un router. Las bibliotecas de rutas hacen lo mismo con más casos: parámetros, rutas anidadas, redirecciones.

## Pintar

`pintar` elige la vista, mete su HTML en `#app`, cambia el `<h1>` y `document.title`, y sube el contador. Es el único sitio que modifica la página. Cualquier cambio —una tecla, un clic, Atrás— acaba llamando a `pintar`.

## Los eventos

- **Clic en un enlace.** Un solo escuchador en `#app` recoge los clics en cualquier `<a>` del mismo sitio, cancela la navegación normal con `preventDefault` y llama a `navegar`, que hace `history.pushState` y `pintar`. Los enlaces siguen siendo `<a href>` de verdad: con Ctrl+clic o con el botón central se abren en otra pestaña, y esa pestaña es una carga nueva.
- **Escribir en el buscador.** Guarda el texto en `estado.filtro` y vuelve a pintar. Como `pintar` sustituye el HTML, el campo se crea de nuevo en cada tecla; el código devuelve el foco y la posición del cursor para que se pueda seguir escribiendo.
- **`popstate`.** Atrás y Adelante vuelven a pintar según la nueva dirección.

## El arranque

`arrancar` sube el contador de cargas, pide `/datos.json` con `fetch`, guarda las líneas en `estado` y pinta. Si la petición falla, deja «No se han podido cargar las líneas.»

## Lo que React aporta encima

Este fichero hace lo mismo que la SPA de React y algo más. Lo que cuesta a mano se ve en el propio código:

- Cada tecla sustituye todo el HTML de la vista, y hay que reparar el foco del buscador. React compara lo que había con lo nuevo y cambia solo lo que difiere.
- Las vistas son cadenas de texto. Con diez pantallas y formularios, eso se vuelve difícil de leer y fácil de romper. React las escribe como componentes con props, como `TarjetaLinea`.
- Escapar es responsabilidad de quien escribe cada línea. React escapa por defecto.
- El router son tres casos escritos a mano. Una biblioteca de rutas trae el resto.

Para dos pantallas, el JavaScript a mano basta. Para una herramienta con muchas vistas y varias personas tocándola, el coste de mantenerlo es lo que justifica una biblioteca. La guía siguiente abre la misma aplicación hecha con React.
