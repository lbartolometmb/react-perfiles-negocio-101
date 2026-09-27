# Interfaz, acceso y pruebas

[← Página anterior](arquitectura-y-rendimiento.md) · [Siguiente página →](eleccion.md)

## Respuesta de la interfaz

Ya está recorrida en los desenlaces. En el checklist cabe como una sola exigencia: carga, datos, vacío y error se leen distinto. Un fallo no deja la pantalla en blanco ni en el estado anterior sin decirlo. Los botones de la demo dicen «Con datos», «Vacío», «Error» y «Lento». En un producto los botones dirían acciones de verdad («Actualizar»), y los cuatro desenlaces seguirían haciendo falta aunque solo haya un botón. No hace falta un botón por desenlace. Hace falta un estado por desenlace.

## Responsive y accesibilidad

Al estrechar la ventana, el texto se lee y los botones se pueden pulsar. Si hay que hacer scroll horizontal o los botones se salen, se arregla el layout. No se encarga una app para tapar una página que no cabe.

Los botones son botones. El título es un `h1`. El estado de la línea va escrito («retraso leve»), no solo en un color. Un rojo sin palabras no existe para quien no distingue el color, y tampoco existe en una impresión o en una lectura en voz alta. Las demos cumplen esto en lo pequeño: no hay un semáforo como única información. Una entrega se mira igual, con el color desactivado o en una ventana estrecha, no solo en la captura a pantalla completa.

## Seguridad básica

El panel interno no debería ser una URL pública. No se ven tokens en la pantalla. El JSON no trae campos que no hagan falta (un teléfono personal, una nota interna). La demo falla este punto a propósito si se toma como producto: `/api/incidencias` responde a quien la pida, sin acceso. El fallo se anota, no se disimula. Sirve para preguntar, en la entrega real, quién puede llamar a la ruta.

## Pruebas

Hay una forma repetible de comprobar el flujo. En la demo, la forma es la guía: cuatro modos, cuatro resultados, más el código fuente de la portada. «Lo he mirado yo» no se puede repetir la semana que viene ni lo puede hacer otra persona. No se pide aún un curso de automatización. Se pide que los pasos estén escritos y que otra persona llegue al mismo texto en pantalla. La guía de `/flujo` es ese escrito.
