# Error

[← Página anterior](02-datos-y-vacio.md) · [Siguiente página →](../03-checklist/01-arquitectura-y-rendimiento.md)

## Qué ha pasado

`modo=error` no devuelve la lista. Devuelve estado HTTP 500 y un JSON `{ "error": "servicio no disponible" }`. `pedir` comprueba `respuesta.ok`. Con 500 no lo es, lanza, y el `catch` pone la fase en `error`. El texto es «No se han podido cargar las incidencias.» La lista se había vaciado al empezar la petición, así que no quedan INC-14 ni INC-15 en pantalla.

Eso es un fallo explícito. Significa «no sabemos si hay incidencias». Es lo contrario de «sabemos que no las hay».

## Cómo se confunde

| Respuesta | Frase que toca | Frase que no toca |
|-----------|----------------|-------------------|
| 200 y lista con elementos | Los artículos INC-14 e INC-15 | La de fallo |
| 200 y lista vacía | «No hay incidencias abiertas.» | La de fallo |
| 500 | «No se han podido cargar las incidencias.» | La de vacío |
| Sin red (no ocurre sola en esta demo) | La de fallo, por el `catch` | Una lista vieja presentada como actual |

Si una entrega usa la misma frase para vacío y para error, no se puede operar: o se ignora una caída, o se trata una sala tranquila como una incidencia de sistemas. El requisito se escribe con las dos frases, no con «gestionar los errores».

## Qué no hace la demo al fallar

No reintenta sola. No guarda el último éxito para enseñarlo «mientras tanto». No explica el código 500 en la interfaz: el detalle técnico se queda en la red y en el JSON, y la persona ve una frase. Es un reparto razonable para un panel. En una herramienta de diagnóstico se enseñaría el código. Aquí el público de la pantalla es quien opera el servicio, no quien opera el servidor.

Tampoco distingue «el servicio ha dicho que no» de «no hemos podido ni hablar con él». Los dos caen en el mismo `catch`. Para la clase basta una frase de fallo. Para un producto, separar «500 del servicio» de «el puesto está offline» cambia la acción: en un caso se espera o se llama a sistemas; en el otro se mira la red del puesto. Es una ampliación natural del mismo estado, no un marco distinto.
