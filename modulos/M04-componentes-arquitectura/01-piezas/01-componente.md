# El componente

[← Página anterior](../README.md) · [Siguiente página →](02-props-y-estado.md)

## Una pieza con nombre

Un componente es una función de interfaz con un nombre estable. `TarjetaLinea` pinta una línea. Se usa una vez por cada elemento de la lista. L1 y L2 no son dos diseños copiados: son dos llamadas. Si el rótulo «Estado:» cambia, cambia en la pieza y las dos fichas lo heredan.

Eso es todo lo que «reutilizable» tiene que significar en una propuesta. No un catálogo visual separado del producto. Un sitio donde vive una decisión de presentación, usado desde varios sitios. Si cada pantalla tiene su propia tarjeta «porque esta es un poco distinta», la reutilización no existe aunque el informe diga que hay un design system.

## Qué se le pide a la pieza para que se pueda leer

- Un nombre que diga qué pinta, no un nombre genérico (`Componente1`, `Box`).
- Entradas explícitas: lo que necesita para pintarse, y nada oculto que vaya a buscar por su cuenta, si la pieza es de presentación.
- Un tamaño que quepa en una revisión. La tarjeta de la demo cabe en una pantalla. `App` cabe en dos. Un fichero de mil líneas que es «el componente de la página» es una página disfrazada: no se puede señalar qué trozo rompe un cambio.

## La pantalla como función de los datos

Si el dato dice «retraso leve», la ficha dice «retraso leve». No hay una segunda verdad en un texto fijo que alguien olvidó actualizar. Cuando el dato cambia, se vuelve a calcular la pieza. El criterio para leer un proyecto es buscar el dato, no el color. El color, en estas demos, está en el CSS y no significa el estado del servicio: el estado está escrito en palabras. Eso es también una decisión de calidad, y el checklist del módulo siguiente la nombra.

En la SPA, el dato está en `datos.js`. En la portada Next.js, está en el array de `page.js`. En `/flujo`, llegará en el JSON. Tres sitios distintos, la misma idea: la pieza no inventa la línea. La recibe.
