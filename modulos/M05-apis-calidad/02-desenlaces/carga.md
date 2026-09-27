# Carga

[← Página anterior](../01-contrato/asincrono.md) · [Siguiente página →](datos-y-vacio.md)

## Qué ha pasado

La petición sigue en curso. Todavía no se sabe si habrá datos, vacío o error. La pantalla tiene que decir eso, y no otra cosa.

En la demo, el texto es «Cargando incidencias…», en el párrafo cuyo id es `fase`. Aparece en cuanto se pulsa cualquier botón, porque `pedir` pone la fase antes del `fetch`. Desaparece cuando llega un desenlace. No hay un icono giratorio aparte. El texto basta, y además se puede leer en la guía sin depender de un dibujo.

## Qué no vale como carga

- Dejar el listado anterior. Dice «estas incidencias siguen vigentes» cuando en realidad se está preguntando otra vez.
- Dejar la pantalla en blanco. No se distingue de un fallo de la propia página.
- Un bloqueo de todo el puesto, si se pudiera evitar. Aquí los botones siguen activos. Es aceptable en la demo y discutible en sala: un segundo clic pisa al primero. El estado de carga honesto es al menos visible.

## Por qué existe el botón «Lento»

«Con datos» también pasa por la carga, tan deprisa que en local casi no se lee. «Lento» alarga la misma respuesta para que el estado se pueda mirar, señalar y nombrar. No es un quinto desenlace de negocio. Es el mismo camino con tiempo. Quien valide una entrega y diga «no he visto el cargando» tiene que repetir la prueba con red lenta o con el servidor frenado, no concluir que el estado no existe. En esta demo el freno está en el botón, para no depender de la red de la sala.
