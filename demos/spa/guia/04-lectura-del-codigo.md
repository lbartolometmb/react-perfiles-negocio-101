# Lectura del código

[← Página anterior](03-el-detalle-sin-recarga.md) · [Siguiente página →](05-la-comparacion.md)

## TarjetaLinea

El fichero `src/components/TarjetaLinea.jsx` cabe en una pantalla. Recibe `nombre`, `estado` y `onVerDetalle`. Pinta un `article` con un `h2` y un párrafo. Si `onVerDetalle` existe, pinta un botón que, al pulsarse, llama a esa función. No sabe qué función es. No importa L1 ni L2. No cambia ninguna variable propia: no hay `useState` en este fichero.

Eso es una pieza presentacional. Se puede contar sin eufemismos: es una plantilla con datos de entrada y un aviso de clic hacia fuera. Cualquier regla del tipo «L1 sí tiene detalle» que se encuentre aquí sería una fuga. En esta demo no está. Está en `App`.

## App

`App.jsx` es quien decide:

- De qué datos se parte (`lineas`).
- Qué vista está activa.
- Qué línea está elegida, buscándola por `id` en la lista.
- El título, condicional.
- Si toca listar tarjetas o pintar el detalle a mano.

El detalle, de hecho, no reutiliza `TarjetaLinea`. Está escrito otra vez en `App`, con el párrafo `detalle` que la tarjeta del listado no muestra. Es una pequeña inconsistencia didáctica que conviene ver: la pieza reutilizable cubre el listado, y el detalle se ha dejado explícito en la vista para que la guía pueda leer el texto «Centro / Norte» sin cazarlo dentro de la tarjeta. En un producto se unificaría. Aquí se deja visible para no esconder el texto de negocio dentro de una abstracción de más.

## datos.js

Cada línea tiene `id`, `nombre`, `estado` y `detalle`. El detalle viaja en el dato aunque el listado no lo enseñe. Cuando se abre L1, `App` lee `linea.detalle`. No hay una segunda fuente. Si el texto de frecuencia estuviera solo en la vista de detalle y también, distinto, en el dato, habría dos verdades. No las hay.

## main.jsx e index.html

No aportan negocio. Dicen: hay un hueco, y `App` entra en él, con estilos. Si una revisión de código empieza por aquí buscando las líneas, va al sitio equivocado. Las líneas están en `datos.js`. El comportamiento está en `App`. La forma de una fila está en la tarjeta.
