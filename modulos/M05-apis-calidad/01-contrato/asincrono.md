# Asíncrono

[← Página anterior](quien-es-quien.md) · [Siguiente página →](../02-desenlaces/carga.md)

## La pantalla no se queda congelada por dentro

Una petición es asíncrona: se lanza y el programa sigue. La respuesta llegará más tarde, o no llegará. Durante ese intervalo la interfaz tiene que estar en un estado elegido, no en el limbo del dato anterior. En `pedir`, lo primero que se hace es poner `fase` en `cargando` y vaciar la lista. Así, un resultado viejo no se queda en pantalla mientras llega el nuevo. Es una decisión visible. Sin esas dos líneas, al pasar de «con datos» a «vacío» se vería INC-14 hasta que el vacío respondiera, y un operador creería que la incidencia sigue abierta.

## Tiempo

El modo `lento` espera 1200 milisegundos y luego responde como `ok`. No es un truco visual: es la misma función con un retardo, para que la fase de carga dure lo bastante para leerla. En la red real el retardo no está escrito en un `if`. Sale de la distancia, del servicio y del tamaño de la respuesta. La pantalla no debe conocer la causa para comportarse: le basta saber que todavía no hay respuesta.

Si la espera no tiene techo, la fase de carga se queda para siempre. Esta demo no pone techo. Un producto sí tiene que decir qué hace a los veinte segundos: seguir esperando, avisar, permitir reintentar. Encargar «que cargue las incidencias» sin esa frase deja el puesto colgado en silencio.

## Tiempo real, en una frase

Tiempo real, aquí, significa lo contrario de pulsar para preguntar: la pantalla recibe un aviso cuando el dato cambia, por un canal abierto. `/flujo` no lo hace. Cada botón es una pregunta suelta. Si una propuesta promete tiempo real, la pregunta útil es qué pasa cuando el canal se corta: ¿la pantalla se queda en el último dato y lo dice, o parece en vivo sin estarlo? Sin esa frase, «tiempo real» es un adjetivo. La demo deja el hueco a propósito, para que se note la diferencia entre preguntar y estar suscrito.

## Qué conserva la página mientras espera

Los botones siguen ahí. Se puede disparar otra petición. El código no anula la anterior: la última respuesta que llegue pisa la fase. En la demo, con un retardo de poco más de un segundo, es difícil cruzarlas; en un servicio lento, dos clics seguidos pueden responder fuera de orden. Un producto que no ignore la respuesta vieja mostrará al final lo que no corresponde al último gesto. Es un riesgo de arquitectura, no un detalle de React, y el checklist lo recoge.
