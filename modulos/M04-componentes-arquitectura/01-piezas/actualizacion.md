# Actualización

[← Página anterior](props-y-estado.md) · [Siguiente página →](../02-responsabilidades/presentacional.md)

## Volver a calcular

El renderizado es obtener la pantalla a partir de props y estado. Una actualización es volver a hacerlo porque algo cambió: un clic, una respuesta, un efecto. En la SPA, el clic del detalle es la actualización. En `/cliente`, el efecto que escribe la hora es otra. En la portada de Next.js, la «actualización» de la hora no es de cliente: es otra petición al servidor, otra composición.

No hace falta recargar el documento para una actualización de cliente. Por eso el contador de la SPA sigue en 1. El documento es el mismo; el cálculo es nuevo.

## Virtual DOM

El Virtual DOM es el mecanismo interno con el que React compara el resultado nuevo con el anterior y toca solo el trozo necesario del documento real. No es un producto que se compre aparte, ni una razón para elegir React frente a otro marco que también actualiza solo un trozo. Sirve para traducir una frase de propuesta: «no recargamos la página, actualizamos el componente». La frase, bien leída, dice: el documento sigue, y cambia un estado. Mal leída, se usa como promesa de rendimiento. El rendimiento depende de cuánto se calcula y de cuánto se descarga, no del nombre del mecanismo.

Si toda la página es un único componente enorme, el mecanismo sigue existiendo y la lectura humana no mejora. La actualización es barata de explicar y cara de localizar. Partir en piezas no es un homenaje al Virtual DOM. Es poder decir qué estado ha cambiado.

## Qué ve el usuario

En un caso sano, el usuario ve el efecto del dato nuevo y no un parpadeo de documento. En un caso enfermo, ve un salto, pierde el scroll, o ve un instante el dato viejo mezclado con el nuevo. Esas síntomas no se diagnostican con la palabra Virtual DOM. Se diagnostican preguntando qué estado se actualizó y qué trozo depende de él. En `/flujo`, que llega en el módulo siguiente, el estado de la fase (`cargando`, `ok`, `vacio`, `error`) es exactamente eso: un dato cuyo cambio sustituye un párrafo por otro, sin recargar.
