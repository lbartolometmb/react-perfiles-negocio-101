# El detalle

[← Página anterior](02-el-listado.md) · [Siguiente página →](04-la-decision.md)

## Qué cambia al pulsar el enlace

Al pulsar «Ver detalle de L1» la barra de direcciones pasa a `http://localhost:8080/detalle.html`. El título del documento pasa a «Detalle L1 — página tradicional». Hay una carga: el listado ya no está en memoria como documento activo.

En la nueva página:

- La misma marca «Página tradicional», porque el CSS es compartido, no porque la aplicación continúe.
- Título: «Detalle de L1».
- Frase: «Esta pantalla es otro fichero HTML. El navegador ha recargado.»
- Otro contador, de **este** documento. La primera vez que se entra en el detalle durante la vida de la pestaña marca 1, aunque el listado ya fuera por 2 o por 3. La clave es otra: `cargas-detalle`.
- El texto de negocio: «L1 — Centro / Norte» y «Frecuencia habitual: 4 minutos. Ahora mismo: en servicio.»
- El enlace «Volver al listado», que apunta a `/`.

## Ida y vuelta

Al volver, `index.html` se pide de nuevo. Su contador sube una unidad respecto a la última vez que ese documento se cargó. El del detalle no se mueve mientras no se vuelva a abrir el detalle. Son dos vidas paralelas. No hay un estado «estoy en la ficha de L1» guardado por encima de los documentos. Hay la URL en la que se está.

El botón Atrás del navegador hace lo mismo que el enlace de vuelta, con el matiz del historial: Atrás recupera la entrada anterior. En un sitio de documentos, Atrás es fiable porque cada paso fue una entrada de historial.

Si se copia `http://localhost:8080/detalle.html` y se abre en otra pestaña, se ve el detalle sin haber pasado por el listado. La ficha se sostiene sola. Esa propiedad —la dirección basta— es la que se pierde en la SPA de esta demo, y hay que haberla visto aquí para echarla de menos allí con criterio.

## Qué no demuestra el detalle

No demuestra un horarios reales ni una base de datos. El texto «4 minutos» está escrito en `detalle.html`. Si el servicio cambiara, este fichero no se enteraría. La demo enseña la navegación, no la integración. Confundir las dos cosas llevaría a decir que «la web tradicional no puede mostrar datos vivos». Puede, si el servidor genera el HTML en cada visita con datos frescos. Esta demo, para que el mecanismo se vea sin un backend, usa ficheros fijos. El módulo de Next.js enseña el otro extremo: HTML generado en la visita, con una hora que sí cambia.
