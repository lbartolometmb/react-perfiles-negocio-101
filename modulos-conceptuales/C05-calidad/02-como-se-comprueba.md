# Cómo se comprueba

[← Página anterior](01-lo-que-se-nota.md) · [Siguiente página →](03-que-validar.md)

Hay dos formas de sostener lo que la demo enseña. Una es una prueba automática. La otra es una radiografía del árbol de piezas mientras la pantalla está viva. Ninguna sustituye a mirar el vacío y el error con tus ojos. Las dos evitan que la próxima modificación borre en silencio lo que hoy funciona.

## Pruebas

Una prueba de **unidad** toma una pieza sola y le pasa props falsas. `FilaLinea` con estado «interrumpida» describe esa palabra. No hay servidor, no hay panel. Sirve para la regla pequeña: el color, el texto, el aviso al pulsar.

Una prueba de **integración** junta varias piezas. Escribes en la búsqueda y la lista se reduce. Marcas la casilla y L1 desaparece. Aquí se protege el comportamiento que el boceto promete. Las herramientas que verás en un proyecto React se llaman, a menudo, Vitest o Jest para ejecutarlas, y Testing Library para hablarle a la pantalla como lo haría una persona («busca el texto», «pulsa la casilla») en vez de hurgar en detalles internos.

Una prueba de punta a punta abre la aplicación de verdad, a veces con un navegador dirigido (Playwright, Cypress). Cuesta más y cubre el camino entero, incluido el contrato con una API de prueba. No hace falta que todo tenga de todo. Hace falta que el comportamiento frágil —el filtro, la sesión caducada, el error de red— tenga alguna red de seguridad, y que alguien sepa enseñarla.

Pedir «hay tests» sin preguntar qué protegen es una métrica vacía. Cien pruebas de detalles internos no salvan un filtro que nadie comprobó.

## React DevTools

Es un panel del navegador, añadido como extensión. Enseña el árbol que viste en el esquema: `PanelServicio`, debajo la barra y la lista, debajo las filas. Al pulsar una pieza se ven sus props y su estado.

Para quien no programa, el uso es concreto. Pides que lo abran. Señalas la fila de L2. Compruebas que el estado que dice la pieza es el que dice la pantalla. Cambias el filtro y miras si el recuerdo del texto vive en el panel y no, además, en otro sitio. Si el árbol es una sola pieza sin nombre, la estantería se ha caído. Si hay recuerdos duplicados, la próxima discrepancia ya tiene explicación.

DevTools no modifica el producto que usará la persona. Es un instrumento de lectura.

## Qué preguntar

- ¿Qué comportamiento rompería el negocio si se estropea, y qué prueba lo cubre?
- ¿Me enseñan el árbol de la pantalla en DevTools y el sitio del filtro?
- ¿Las pruebas hablan de la tarea («al marcar incidencias, L1 se oculta») o solo de detalles internos?
