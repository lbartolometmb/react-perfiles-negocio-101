# Cuál pedir

[← Página anterior](02-next-gatsby-remix.md) · [Siguiente página →](../C07-hibridos/README.md)

La elección cabe en tres preguntas, hechas en orden. Si la primera ya cierra, las otras no hace falta complicarlas.

## ¿Alguien tiene que leer la primera vista sin arrancar el programa?

Si la respuesta es sí —un buscador, un enlace compartido, una ficha pública— el HTML tiene que nacer antes que el navegador termine de pensar. Next o Remix sirven. Gatsby sirve si además el dato es de publicación. React solo obliga a esa persona, o a ese buscador, a esperar al programa.

Si la respuesta es no —herramienta interna, detrás de una sesión— React solo sigue siendo honesto. Next también puede serlo, si el equipo lo usa como manera de organizar rutas y no como un rito. El coste de un marco se paga en conceptos que el equipo debe dominar.

## ¿El dato cambia mientras se mira?

Si cambia al minuto, fabricar al publicar llega tarde. Gatsby queda fuera del camino principal. Cabe una página pública estática al lado de un panel en vivo; son dos momentos, y pueden ser dos trozos. Next sabe partirlos. Una SPA con WebSocket también. Remix sabe refrescar en la navegación; para un chorro continuo, la línea abierta sigue haciendo falta igual.

Si el dato cambia cuando el equipo de contenidos publica, Gatsby o la parte estática de Next son el ajuste fino: se gasta el trabajo una vez y se sirve barato.

## ¿El gesto principal es enviar o es mirar un tablero?

Enviar formularios, recorrer expedientes, guardar y ver el resultado: la apuesta de Remix se lee con facilidad. Mirar un tablero que se mueve solo: el recuerdo y la línea abierta viven bien en el navegador, con o sin Next por delante para la entrada. Hacer las dos cosas en un mismo producto es normal. Lo que no es normal es que nadie sepa qué apuesta gobierna cada ruta.

Una frase de propuesta que ya se puede corregir: «lo hacemos en React». La frase completa dice la biblioteca, el marco si lo hay, y el momento en que nace el HTML de las dos o tres pantallas que importan.

## Qué preguntar

- ¿Qué pasa en el primer segundo, antes de que el programa del navegador arranque?
- ¿Qué pantallas pueden ir un paso por detrás del dato y cuáles no?
- ¿El marco está porque el problema lo pide o porque era el valor por defecto del equipo?
