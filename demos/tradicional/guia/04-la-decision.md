# La decisión

[← Página anterior](03-el-detalle.md) · [Siguiente página →](05-ajax-html.md)

## Qué ha quedado demostrado

Después del listado, del detalle y de la vuelta, se puede afirmar con la demo delante:

1. Cambiar de pantalla ha sido cambiar de documento.
2. Cada documento cuenta sus propias cargas.
3. La dirección del detalle se abre sola.
4. El contenido de negocio está en el HTML, también el que empieza oculto (paradas, pestañas).
5. Dentro de cada documento hay interacción —desplegar, filtrar, cambiar de pestaña— sin recargar. Esa interacción no pasa de un documento a otro: el filtro escrito en el listado se pierde al abrir el detalle, porque no se guardó ni en la URL ni en el servidor.

## Qué decisión de producto autoriza esta demo

Autoriza a dejar en páginas tradicionales (o en HTML generado, que se verá después) todo uso cuyo éxito sea «la persona abre una dirección y lee». El aviso público de una línea, la ficha de una estación, un comunicado. Pedir ahí una SPA no mejora la lectura.

No autoriza a construir el panel de sala con este modelo solo porque la demo sea simple. El panel necesita permanecer. Esta demo enseña el precio de no permanecer: cada gesto reconstruye el documento. En dos ficheros el precio es invisible. En cuarenta pantallas de un turno, es el producto.

## Preguntas que la demo deja listas para una propuesta

- ¿Esta pantalla se tiene que poder abrir con su URL, sin haber visitado la anterior? Si sí, hace falta documento o ruta real, no solo memoria.
- ¿El contenido tiene que estar en el HTML? Si sí, no basta un programa que pinte después.
- ¿El usuario va a hacer un gesto o veinte? Uno cabe aquí. Veinte, no.

Las páginas siguientes abren el tercer documento de esta demo, `/ajax.html`, donde el documento ya no se limita a enseñar lo que traía: pide más al servidor sin sustituirse.
