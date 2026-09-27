# El código fuente

[← Página anterior](02-la-portada.md) · [Siguiente página →](04-pagina-de-cliente.md)

## Qué mirar

En la portada, «Ver código fuente de la página» (el documento recibido, no el inspector de elementos). Hay que encontrar, como texto:

- `Línea L1` y `Línea L2`.
- `en servicio` y `retraso leve`.
- `Generada en el servidor`.
- Un sello horario dentro de la etiqueta cuyo id es `hora-servidor`.

Si esas palabras están, la primera respuesta cumplió. El inspector también las muestra, y además muestra el resultado de cualquier JavaScript posterior. Por eso el inspector no sirve como prueba de la primera vista: enseña el documento ya vivo. En esta portada, fuente e inspector coinciden en las líneas, porque nadie las reescribe después. La hora del fuente es la de esa respuesta; si se espera y se mira el inspector sin recargar, sigue siendo la misma, porque no hay un efecto que la actualice en el cliente.

## Qué no debe buscarse

No debe buscarse un `div id="root"` vacío como en la SPA. El layout de Next.js entrega `<body>` con el HTML de la página dentro. Habrá también scripts del propio marco, para hidratar. Su presencia no anula el texto. El criterio es si el texto de negocio está **además** de los scripts, no si existen scripts.

Tampoco debe buscarse INC-14 ni la hora de `/cliente`. Esta URL no las trae.

## La prueba de la recarga, en el fuente

Recargar, volver a abrir el fuente, comparar el sello. Tiene que diferir. Si se comparan solo a ojo en la página pintada, también se ve; el fuente evita la duda de si React ha reescrito la hora después. En esta portada no la reescribe. Sale así del servidor.

## Si el fuente no trae las líneas

Entonces no se está viendo la demo que esta guía describe: o el servidor no es el de producción de este proyecto, o se ha abierto otra URL, o un error ha devuelto una página de fallo. No se sigue con la conclusión de SEO hasta que el fuente cuadre con `page.js`.
