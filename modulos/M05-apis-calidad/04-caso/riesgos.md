# Riesgos

[← Página anterior](lectura-del-conjunto.md) · [Siguiente página →](lo-que-no-cubre.md)

## Si se toma la demo por el sistema

| Riesgo | Cómo se cuela | Qué se pregunta |
|--------|----------------|-----------------|
| Datos fijos presentados como servicio real | L1 y L2 salen de un array | ¿Qué URL de API alimenta la portada el día de la puesta en marcha? |
| SPA exigida como web pública | El detalle es fluido | ¿Cuál es el fuente de la ficha? |
| Vacío y error unidos | Una sola frase «sin resultados» | ¿Cuál es el texto de 200 vacío y cuál el de 500? |
| Sin dueño de la espera | No hay límite de tiempo | ¿Qué ve el puesto a los veinte segundos? |
| Respuestas fuera de orden | Dos clics rápidos | ¿Se ignora la respuesta que ya no corresponde? |
| App de más | «Ya que hay React…» | ¿Qué uso no cabe en el navegador? |
| Puesto sin operación | Electron en el papel | ¿Quién reinstala y qué ocurre sin red? |
| API abierta | La demo no pide acceso | ¿Quién puede leer las incidencias internas? |

## Riesgo de arquitectura, dicho en una frase

El riesgo no es «usar React». Es no saber, para cada pantalla, si el documento viaja lleno, si el estado está en memoria o en la URL, y si el dato es una constante o una respuesta. Las demos separan esos tres ejes a propósito. Una entrega que los vuelva a mezclar en un solo proyecto sin fronteras hereda los tres riesgos a la vez: no se indexa lo que debe, se pierde lo que el turno necesitaba conservar, y se muestra como vivo un dato que estaba escrito en el código.

## Riesgo de lectura

El otro riesgo es el de quien valida: dar por buena la pantalla ya pintada. El fuente de `/cliente` y la pestaña de red de `/flujo` existen para no caer en eso. Si la revisión solo mira la captura, no ve la espera del cliente ni el 500. El checklist sin abrir esas dos herramientas no se ha aplicado.
