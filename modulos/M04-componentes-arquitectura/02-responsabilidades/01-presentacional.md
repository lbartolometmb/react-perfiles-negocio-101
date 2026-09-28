# Presentacional

[← Página anterior](../01-piezas/03-actualizacion.md) · [Siguiente página →](02-donde-vive-el-estado.md)

## La pieza que solo pinta

Una pieza presentacional pinta lo que recibe y puede avisar de un clic. No pide datos. No decide qué vista viene después. No guarda la selección.

`TarjetaLinea` de la SPA es esa pieza. Recibe `nombre`, `estado` y, si acaso, `onVerDetalle`. Si la función no llega, no hay botón. No aparece L1 escrito dentro del fichero. La de Next.js es aún más cerrada: solo nombre y estado, porque la portada no navega al detalle.

| Pieza | Hace | No hace |
|-------|------|---------|
| Presentacional | Pinta. Avisa | No pide, no elige la vista, no guarda el turno |
| Con lógica | Guarda estado, elige la vista, pide | No debería ser el único sitio donde también se dibuja cada detalle |

## Para qué separarlo

Cuando todo está en un fichero, un cambio de redacción y un cambio de flujo se tocan juntos y nadie sabe cuál de los dos ha roto la pantalla. Cuando la tarjeta solo pinta, el cambio de «Estado:» no pasa por la función que asigna `lineaId`. Se puede revisar el uno sin releer el otro.

Esto no es una moda de carpetas. Es el coste de leer. En un equipo donde quien valida no programa, la separación permite señalar: «el texto está en la tarjeta; la regla de que L2 no se abre está en `App`». Sin separación, la frase es «está en el front», que no se puede comprobar.

## Dónde la demo no es perfecta

El detalle de la SPA no reutiliza `TarjetaLinea`. Está escrito en `App`, porque ahí se muestra `linea.detalle`, un campo que la tarjeta del listado no pinta. Es visible a propósito. En un producto, el detalle sería otra pieza presentacional (`FichaLinea`) y `App` solo decidiría cuál montar. La fuga pequeña sirve para verla: si mañana el rótulo del detalle y el del listado divergen, es porque hay dos sitios. El módulo lo deja señalado en lugar de esconderlo con una abstracción de más.
