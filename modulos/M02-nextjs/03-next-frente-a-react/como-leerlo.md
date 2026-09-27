# Cómo leerlo

[← Página anterior](cuando-sobra.md) · [Siguiente página →](../../../demos/next/guia/01-antes-de-abrir.md)

## Desmontar el párrafo

«El portal irá en Next.js, con SSR, para que sea rápido y posicionable, y el área privada también.»

| Trozo | Qué falta |
|-------|-----------|
| Portal en Next.js | Qué URL, y qué texto tiene que estar en el fuente |
| SSR | ¿Todas las páginas, o solo las de dato vivo? |
| Rápido | Rápido el primer texto, o rápida la interacción. No es la misma obra |
| Posicionable | ¿Hay contenido público que un buscador deba leer? Si el portal es solo el panel, no |
| Área privada también | Puede compartir el proyecto. No debe compartir el HTML público ni los datos |

Una versión que sí se puede encargar: «La ficha pública de cada línea tiene URL propia, el recorrido va en el HTML publicado, y el estado de ahora se pide aparte y no bloquea la ficha. El panel de sala es otra entrada, identificada, y no se indexa.»

Ahí Next.js encaja en la ficha. El nombre del marco del panel queda en segundo plano.

## Qué mirar en una entrega, antes de la guía

1. Abrir la URL pública y ver el código fuente.
2. Buscar el texto de negocio, no el título de la ventana.
3. Recargar si el dato pretendía ser de la visita. Tiene que poder cambiar.
4. Abrir la URL que se dice «de cliente» y comprobar que el fuente **no** trae lo que solo el navegador calcula.
5. Preguntar qué pasa si el JavaScript no arranca: qué queda leíble.

La guía siguiente hace exactamente esos cinco pasos sobre el puerto 3000, con las frases literales de la demo, para que el método quede atado a una pantalla y no solo a una tabla.
