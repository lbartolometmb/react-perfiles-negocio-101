# Arquitectura y rendimiento

[← Página anterior](../02-desenlaces/error.md) · [Siguiente página →](interfaz-acceso-pruebas.md)

## Para qué es el checklist

Sirve para leer una entrega o una demo. No sirve para programarla. Cada fila es una pregunta que se puede contestar señalando una pantalla o un fichero. Si no se puede señalar, la fila está en alerta.

## Arquitectura

| Señal sana | Señal de alerta |
|------------|-----------------|
| Se distingue la pantalla, la petición y los datos. En la demo: `flujo/page.js`, `route.js`, y el array de incidencias | Un solo bloque hace de interfaz, de reglas y de acceso, y un cambio no se sabe qué rompe |
| Hay un sitio para el estado de la vista (`fase`) | El estado se deduce de si el párrafo está vacío |
| Las URLs públicas y las internas no comparten el mismo HTML con los mismos datos | La portada de viajeros y el panel son el mismo proyecto sin frontera de acceso |

## Rendimiento

| Señal sana | Señal de alerta |
|------------|-----------------|
| La primera vista útil llega en el HTML cuando es pública. La portada ya lo enseña | La página pública espera a un programa grande antes de mostrar el aviso |
| Lo pesado no bloquea el resto. Un mapa puede llegar después del texto | Cada clic recarga el documento entero, o no recarga nunca y enseña datos viejos como si fueran de ahora |
| La espera se ve (el modo lento) | La espera es un puesto congelado sin frase |

El rendimiento, en este curso, no se mide con una herramienta de laboratorio. Se reconoce: ¿hay texto en el primer documento? ¿hay una frase mientras la red no contesta? ¿el dato que cambia de verdad se vuelve a pedir? Quien necesite cifras usará la pestaña de red (tamaño, tiempo) sobre la URL concreta, no una nota media del marco.

## Cómo aplicarlo a las demos sin mezclarlas

La SPA no suspende por no tener fase de carga: no pide nada. Suspendería si se vendiera como panel conectado. La portada no suspende por no tener botón de error: no hay petición. `/flujo` sí se juzga con las cuatro frases. Aplicar el checklist entero a cada pantalla, sin mirar qué hace esa pantalla, fabrica falsos suspensos.
