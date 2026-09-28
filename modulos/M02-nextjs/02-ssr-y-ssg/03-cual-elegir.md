# Cuál elegir

[← Página anterior](02-estatico.md) · [Siguiente página →](../03-next-frente-a-react/01-cuando-hace-falta.md)

## La pregunta no es el acrónimo

SSR y SSG son dos momentos de fabricar el HTML. La elección sale del dato, no de la preferencia por un nombre.

| El dato… | Momento que encaja | Ejemplo en la red |
|----------|--------------------|-------------------|
| Cambia en la visita y la página debe decirlo ya | Servidor, cada petición | Estado de la línea en la portada pública, si de verdad se lee en ese momento |
| Cambia poco y es igual para todo el mundo | De antemano, al publicar | Recorrido, normas, ficha de estación |
| Solo tiene sentido con la página ya abierta | Navegador | Un reloj local, un filtro del turno, el botón de «pedir incidencias» |
| No debe existir hasta que alguien se identifica | Ni SSR público ni estático público | El panel de sala. Otra URL, con acceso |

Se puede combinar. La ficha de L1 (recorrido, frecuencia habitual) puede ser estática, y un bloque «ahora mismo» puede venir de una petición posterior. Entonces el documento ya dice algo útil al llegar, y el dato vivo se actualiza sin bloquear el resto. Esa combinación hay que diseñarla. No sale de marcar «Next.js» en un formulario.

## Errores de elección que se ven en propuestas

- Todo SSR «por si acaso», incluida la página legal que no cambia en un año. Se paga recomposición y no se gana verdad.
- Todo estático, incluido el estado del servicio. Se gana velocidad y se pierde la incidencia de hace diez minutos.
- Todo en el cliente, incluida la portada pública. Se gana simplicidad de desarrollo y se pierde la primera vista.
- Un modo distinto en cada pantalla sin que nadie sepa cuál es cuál. La persona que valida no puede decir si una hora congelada es un fallo o una caché.

## Cómo dejarlo escrito

Para cada URL que importe, una frase: qué tiene que ser verdad en el instante de abrirla, y con qué retraso se acepta. De esa frase sale el momento. Si la frase no se puede escribir, la tecnología se está eligiendo antes que el producto.

La portada de la demo tiene la frase hecha: «la hora de generación tiene que ser la de esta visita». Por eso es dinámica. La página de cliente tiene otra: «la hora local no la sabe el servidor». Por eso no viaja en el HTML. El módulo siguiente usa esas dos frases para decidir cuándo el marco hace falta y cuándo sobra.
