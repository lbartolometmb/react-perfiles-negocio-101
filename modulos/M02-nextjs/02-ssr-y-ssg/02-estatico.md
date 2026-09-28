# De antemano

[← Página anterior](01-servidor.md) · [Siguiente página →](03-cual-elegir.md)

## Qué es SSG

La generación estática (SSG) fabrica el HTML **al publicar**, no al visitar. El resultado se guarda y se sirve igual a todo el mundo, como se servía `detalle.html` en la demo tradicional, con una diferencia: ese HTML ha salido de componentes, no de un documento escrito a mano. Hasta la próxima publicación, todas las visitas leen la misma copia.

Encaja cuando el contenido no depende de quién entra ni del minuto:

- Una ficha de línea cuyo recorrido no cambia cada mañana.
- Una página de «cómo viajar» o de accesibilidad de una estación.
- Un aviso que se da por cerrado y se publica como versión, no como consulta en vivo.

No encaja cuando el dato es el estado de ahora mismo. Una página estática de «L2 en servicio» publicada a las 8:00 miente a las 8:20 si hubo una incidencia y nadie volvió a publicar.

## El parecido con la página tradicional

La demo tradicional es estática en el sentido fuerte: los ficheros están en disco y el servidor solo los reparte. No hay un paso de «generar el sitio» porque alguien escribió el HTML. SSG añade ese paso. El lector no lo nota. Quien opera el sitio sí: publicar es reconstruir, y un error de construcción es un sitio que no sale, no una página que falla en una visita suelta.

Hay un término intermedio que aparece en propuestas, la regeneración: la página nace estática y se vuelve a fabricar cada cierto tiempo o cuando alguien lo pide, sin esperar a un despliegue completo. Para este curso basta con la pregunta de negocio, no con el nombre del modo: **¿con qué retraso es aceptable que el lector vea un dato ya viejo?** Si el retraso aceptable es cero, no es estática. Si es «hasta la próxima publicación del aviso», sí.

## Coste

Servir un fichero ya hecho es barato y predecible. Recomponer en cada visita es flexible y más caro. Una web pública de mucho tráfico gana cuando lo estable va estático y lo vivo va al servidor o a una API que la página consulta. Mezclarlo todo en «cada visita recalcula todo el portal» funciona en una demo y se vuelve una factura y una fragilidad en producción.

> [!NOTE]
> La portada de esta demo **no** es estática. Se fuerza a recomponerse para que la hora demuestre la visita. `/cliente` y `/flujo`, en el arranque de producción, salen como cáscaras ya construidas: el contenido que cambia (la hora local, la lista de incidencias) llega después, por el navegador. Es un buen ejemplo de las dos políticas dentro de un solo proyecto.
