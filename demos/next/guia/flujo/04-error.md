# Error

[← Página anterior](03-vacio.md) · [Siguiente página →](05-lento.md)

## El clic

«Error» pide `GET /api/incidencias?modo=error`. Otra vez hay un instante de carga y la lista se vacía. La ruta devuelve estado 500 y el cuerpo `{ "error": "servicio no disponible" }`. No devuelve `incidencias`.

En la pestaña Red el código es 500. Si solo se mira la pantalla, se ve el efecto y no el código. Las dos miradas se hacen: la red demuestra el fallo técnico; la pantalla demuestra que una persona puede entenderlo.

## En pantalla

«No se han podido cargar las incidencias.»

No aparece «No hay incidencias abiertas.» No aparecen INC-14 ni INC-15, aunque se hubieran visto antes. Un fallo no conserva el último éxito en esta demo. Es una elección: preferir no mostrar un dato que ya no se sabe vigente. Otra elección posible, en un producto, sería mostrar el último éxito con una marca de «dato de las 10:04, no se ha podido actualizar». Aquí no está, y no hay que contarla como si estuviera.

## Qué no afirma el botón

El botón se llama «Error» porque la demo fuerza el modo. En un panel real no habría un botón para estropear el servicio. Habría la misma frase cuando el servicio falle solo. El botón es el instrumento de la clase. La frase es lo que se exige en la entrega.
