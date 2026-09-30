# Next, Gatsby y Remix

[← Página anterior](01-cuando-nace-el-html.md) · [Siguiente página →](03-cual-pedir.md)

Los tres hablan React. Una fila sigue siendo una pieza, las props siguen bajando y el estado sigue siendo un recuerdo. Lo que cambia es el contrato con el servidor y el tipo de producto en el que cada uno se siente en casa.

## Next.js

Es un marco de aplicación. Trae rutas, formas de pedir datos y la posibilidad de fabricar cada trozo de pantalla en un momento distinto. Una portada puede nacer al publicar, un panel privado puede nacer en el navegador, y una ficha pública puede nacer en el servidor con datos frescos.

Se usa cuando el producto es a la vez sitio y aplicación: se indexa, se comparte, se inicia sesión y luego se trabaja. El riesgo es usar toda la flexibilidad sin criterio, de forma que nadie sepa ya dónde nace cada página. En una revisión, «está en Next» se traduce a una tabla: esta ruta, este momento, esta fuente.

## Gatsby

Gatsby fabrica el sitio al publicar. Bebe de contenidos —ficheros, un gestor de contenidos, a veces varias fuentes a la vez— y deja un conjunto de páginas listas para servir. Encaja en documentación, campañas, catálogos que cambian cuando alguien publica, sitios de marketing.

Encaja mal cuando cada persona ve una cosa distinta y el dato vive al minuto: un muro de alarmas, una cola de trabajo, un detalle operativo. Se le puede añadir interacción de navegador después, pero la apuesta de fondo sigue siendo «la página ya estaba hecha». Hoy se ve menos que hace unos años en proyectos nuevos. Sigue vivo en propuestas y en sitios ya construidos. Leerlo bien evita tanto descartarlo por moda como elegirlo por inercia.

## Remix

Remix trata cada paso de navegación como una pregunta al servidor y cada cambio de datos como un formulario que el servidor entiende. La pantalla llega hecha y la interacción importante no depende de un programa enorme en el navegador. Encaja cuando el servidor ya es el dueño de los datos y el equipo quiere un modelo mental corto: cargar, mostrar, enviar.

El proyecto Remix, como nombre de producto, se ha continuado en el modo marco de React Router. En una propuesta de ahora puedes oír los dos nombres. La idea que tienes que reconocer es la de la columna ámbar del esquema: el HTML nace en el servidor en cada navegación.

## Los tres al lado

| | Next.js | Gatsby | Remix |
|---|---|---|---|
| Qué es | Marco flexible de aplicación | Sitio fabricado al publicar | Navegación y formularios contra el servidor |
| El dato fresco | En la visita, si esa ruta se fabrica entonces | En la siguiente publicación | En cada navegación |
| Donde brilla | Sitio público y aplicación juntos | Contenido estable, muchas páginas | Flujos de leer y enviar, con el servidor al mando |
| Donde sobra | Si solo había un panel interno sin SEO | Si el dato cambia mientras se mira | Si casi todo es un tablero en vivo dentro del navegador |

React solo, sin marco, sigue siendo una opción: el panel interno de siempre. El marco se pide cuando el momento en que nace el HTML importa.

## Qué preguntar

- ¿El producto es un sitio, una herramienta, o las dos cosas?
- ¿El dato aguanta hasta la próxima publicación?
- Si dicen Remix y el repositorio dice React Router, ¿están hablando de esta misma idea?
