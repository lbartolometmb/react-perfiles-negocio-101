# Qué pasa al pulsar

[← Página anterior](01-el-documento.md) · [Siguiente página →](03-cuando-basta.md)

## El viaje de un clic

En una página tradicional, un enlace no «cambia de vista». Pide **otro recurso**. La secuencia, con el listado y el detalle de la demo, es esta:

1. El navegador tiene abierto `index.html`. En memoria está ese documento: su título, sus dos líneas, su contador.
2. El enlace «Ver detalle de L1» apunta a `/detalle.html`. No apunta a una función. Apunta a una dirección.
3. El navegador hace una petición HTTP de ese fichero. El servidor (en la demo, un proceso Node que solo reparte ficheros) lo devuelve entero.
4. El documento anterior se descarta. Se interpreta el nuevo: otro `<title>`, otro encabezado, otro contador, que cuenta las cargas **de este** documento, no las del listado.
5. «Volver al listado» repite el viaje al revés. `index.html` se pide de nuevo. Su contador sube, porque para él esta visita es una carga nueva.

No hay una aplicación en medio que decida. Hay el navegador, el enlace y el fichero.

## Qué se conserva y qué no

| Se conserva | No se conserva |
|-------------|----------------|
| Lo que está en la dirección (la URL del detalle se puede compartir y volver a abrir) | La posición de scroll del listado, salvo que el navegador la recuerde al usar atrás |
| Lo que el servidor vuelve a escribir en el HTML | Un panel abierto, un filtro no reflejado en la URL, un formulario a medias |
| Lo que se guardó aparte (`sessionStorage` en la demo, una cookie, la sesión del servidor) | El propio documento anterior como objeto vivo |

En la demo, el contador usa `sessionStorage` con dos claves distintas: `cargas-tradicional` en el listado y `cargas-detalle` en la ficha. Por eso no es «un contador de la aplicación». Son dos documentos que se cuentan a sí mismos. Si fuera una sola aplicación, habría un solo contador de cargas del puesto de trabajo, y cambiar de vista no lo movería. Eso es lo que se verá en la SPA, y el contraste es el objeto de la guía.

## Coste de cada clic

Cada navegación tradicional tiene un precio visible y otro invisible.

El visible: la página se sustituye. En una red lenta o en un puesto con el navegador justo, se nota. En una ficha que se abre una vez, no importa. En un operador que abre veinte incidencias por hora, el parpadeo y la reconstrucción de menús, cabeceras y scripts se pagan veinte veces.

El invisible: el servidor vuelve a enviar estructura que no había cambiado (la cabecera, el CSS, el marco). Se puede cachear, y un sitio bien hecho lo hace. Aun así, el modelo mental sigue siendo «una visita = un documento», y diseñar una herramienta de turno largo con esa unidad empuja a páginas enormes o a una navegación que parece una aplicación y se comporta como una imprenta.

## El botón Atrás y la dirección

En este modelo, el historial del navegador es el historial de verdad. Atrás significa «el documento anterior». La dirección es compartible: quien recibe `/detalle.html` ve el detalle sin que nadie le tenga que dejar la aplicación en un estado concreto.

Eso es una ventaja seria para contenido público. Un aviso con URL propia se enlaza desde un correo o desde un código QR. Una vista que solo existe como estado interno de una SPA no se enlaza, o se enlaza mal, cayendo siempre en la portada.

> [!NOTE]
> Si una propuesta de página tradicional promete «el operador no pierde el contexto al cambiar de pantalla», hay que preguntar dónde se guarda ese contexto. Si la respuesta es «en la página», se pierde en el siguiente documento. Si la respuesta es «en la URL o en el servidor», el modelo tradicional puede sostenerlo. Si la respuesta es vaga, el uso ya está pidiendo una SPA y se está presupuestando una web de documentos.
