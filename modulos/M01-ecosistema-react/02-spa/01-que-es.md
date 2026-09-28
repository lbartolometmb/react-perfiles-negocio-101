# Qué es una SPA

[← Página anterior](../01-pagina-tradicional/03-cuando-basta.md) · [Siguiente página →](02-que-permanece.md)

## Una sola carga, muchas vistas

SPA significa *single page application*: la aplicación de una sola página. El nombre es literal y, a la vez, engañoso. Literal, porque el navegador descarga **un** documento y se queda en él. Engañoso, porque dentro de ese documento hay varias vistas que el usuario vive como pantallas distintas: listado, detalle, formulario, confirmación.

El documento inicial suele ser pobre a propósito. Trae el marco y el programa. El programa —JavaScript— construye lo que se ve y lo sustituye cuando hace falta. Ir al detalle de L1, en la demo, no pide `detalle.html`. Cambia variables en memoria y el programa vuelve a dibujar la zona principal.

Por eso el contador de la demo SPA dice siempre «Cargas del documento: 1». No es un adorno. Es la definición. Si ese número subiera al abrir el detalle, no estaríamos viendo una SPA: estaríamos viendo otro documento.

## Qué problema resuelve

Resuelve el problema de **operar sin reconstruir el puesto**. El usuario de sala que filtra incidencias, abre una, anota y vuelve, no quiere que el navegador tire la herramienta en cada gesto. Quiere que el marco (cabecera, sesión, selección) permanezca y cambie solo el contenido afectado.

También resuelve un problema de datos. Cuando la pantalla depende de combinaciones que no tiene sentido publicar como mil documentos (filtros, orden, página, selección múltiple), generar un HTML por combinación es absurdo. La aplicación pide datos y compone la vista.

No resuelve, por sí misma:

- Que la primera visita sea rápida. Al revés: hay que descargar el programa antes de tener la herramienta útil.
- Que un buscador lea el contenido. Si el HTML inicial va vacío, el buscador se queda sin texto.
- Que la dirección de cada vista se pueda compartir. Puede hacerse, pero hay que diseñarlo. No sale gratis, como salía en `detalle.html`.

## Cómo se reconoce

| Prueba | SPA | Página tradicional |
|--------|-----|--------------------|
| Al cambiar de vista, ¿hay petición de un HTML nuevo? | No, o no como documento de esa vista | Sí |
| ¿El contador de cargas del documento se mueve? | No | Sí, en cada fichero |
| ¿El código fuente inicial trae el listado? | A menudo no | Sí |
| ¿La dirección cambia sola con cada vista? | Solo si alguien lo ha programado | Sí, porque cada vista es una dirección |

En la demo, la dirección `http://localhost:5173/` no cambia al abrir el detalle. Es una SPA mínima, incluso radical: ni siquiera finge historial. Sirve para ver el mecanismo sin la capa extra de «rutas de cliente», que sí aparecerá como enlaces reales en Next.js.

> [!NOTE]
> «SPA» describe el contrato con el navegador, no una marca. Se puede construir una SPA sin React —la [demo del puerto 8081](../../../demos/spa-vanilla/guia/01-antes-de-abrir.md) es solo HTML, CSS y JavaScript, con direcciones propias para cada vista—, y se puede usar React sin que el producto entero sea una SPA (Next.js hace las dos cosas en páginas distintas). Cuando una propuesta dice «es una SPA en React» está diciendo dos cosas. Conviene separarlas: ¿un solo documento vivo? ¿y piezas de interfaz hechas con React?
