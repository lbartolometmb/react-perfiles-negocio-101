# La página de cliente

[← Página anterior](03-codigo-fuente.md) · [Siguiente página →](05-que-decide.md)

## Qué aparece al abrirse

El enlace «Página de cliente» lleva a `http://localhost:3000/cliente`. En pantalla, cuando el programa ya ha arrancado:

- Pastilla «Next.js — cliente».
- Título «Hora en el navegador».
- Frase: «El servidor entrega la página sin la hora. El navegador la calcula al abrirse.»
- Enlaces de vuelta a «Inicio en el servidor» y a «Flujo con API».
- Un párrafo, id `hora-cliente`, con el texto `Hora en el navegador:` seguido de un sello ISO.

Ese sello **no** es la prueba de que el servidor lo calculó. Es la prueba de que el efecto del navegador ya corrió. El título «Hora en el navegador» sí está desde el principio: es texto fijo del componente. No hay que usar el título como evidencia de la hora.

## Qué trae el fuente

Antes de fiarse de la pantalla ya pintada, el código fuente de `/cliente` debe contener la frase:

«Aún no hay hora: el servidor no la ha calculado.»

No debe contener `Hora en el navegador: 20` seguido de un sello. El fichero `cliente/page.js` lo escribe así: el estado `hora` empieza en `null`, y el párrafo muestra la espera mientras sea nulo. Un `useEffect` pone la hora cuando el componente se monta en el navegador. El servidor, al prerenderizar esta página, ejecuta el componente una vez sin ese efecto, y por eso el HTML guarda la espera.

Si el fuente ya trajera el sello, la página no estaría cumpliendo el papel de «esto lo calcula el cliente» que la demo le asigna.

## Qué se ve un instante después

Al ejecutarse el efecto, el párrafo pasa de la espera al sello. Quien solo mire la pantalla terminada ve una hora y puede creer que «también vino del servidor». Por eso el orden de la guía es fuente primero, pantalla después. En una entrega real se hace el mismo orden: si el requisito era «la hora local no se firma en el servidor», el fuente de la espera es el cumplimiento, y la hora pintada es el comportamiento posterior, correcto y distinto.

Recargar repite el ciclo: otra espera en el fuente, otro sello en cuanto arranca, distinto del anterior porque `new Date()` corre otra vez en el navegador. El servidor no ha participado en ese número.

## La marca `"use client"`

La primera línea del fichero es `"use client"`. Declara que este módulo se ejecuta en el navegador (y también se prerenderiza a la espera, como se acaba de ver). La portada no lleva esa línea: se compone en el servidor y no tiene estado de cliente. Las dos conviven. Quien lea una propuesta en la que «todo es cliente» o «todo es servidor» puede pedir que señalen una URL de cada tipo, como estas dos.
