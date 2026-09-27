# Dónde vive el estado

[← Página anterior](presentacional.md) · [Siguiente página →](lectura-de-la-spa.md)

## Un sitio donde mirar

El estado de la aplicación —qué vista está abierta, qué línea está elegida, si la lista va vacía— no tiene por qué vivir dentro de cada tarjeta. Si viviera ahí, cada ficha recordaría una cosa distinta y no habría una respuesta a «qué está viendo el usuario».

En la SPA vive en `App`: `vista` y `lineaId`. Es el único sitio. Las tarjetas son sustituibles. En `/flujo` vivirá en la página: `fase` e `incidencias`. En la portada Next.js no hay estado de cliente: no hay nada que recordar entre clics, porque no hay clics de vista.

En proyectos grandes, ese estado se concentra en un almacén común para no pasarlo por diez niveles de props. El nombre de la librería importa menos que la pregunta: **¿hay un solo sitio donde mirar qué está pasando, o hay que cazar variables por diez ficheros?** Si la propuesta nombra la librería y no puede señalar el sitio, el nombre sobra.

## Qué estado no debe vivir solo en la pantalla

- Lo que tiene que sobrevivir a una recarga: va en la URL o en el servidor.
- Lo que es verdad para otras personas (la incidencia de verdad): va en el sistema, y la pantalla guarda una copia de la última respuesta, no la autoridad.
- Lo que es un permiso: no basta con ocultar el botón. El servidor tiene que negarlo. Ocultar el botón es presentación.

`datos.js` parece estado y no lo es. Es una constante importada. Nadie la actualiza en la visita. Por eso la SPA no tiene fase de carga. Confundir el fichero con una API lleva a creer que el ejemplo ya está integrado.

## Señales

| Sana | De alerta |
|------|-----------|
| Se señala `App` y se dice qué recuerda | «El estado está en React» |
| La tarjeta no tiene `useState` | Cada pieza abre su propia copia de la lista |
| Lo compartible está en la URL (`/cliente`) | Se promete compartir el detalle y el detalle es `lineaId` en memoria |
