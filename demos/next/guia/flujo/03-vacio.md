# Vacío

[← Página anterior](02-con-datos.md) · [Siguiente página →](04-error.md)

## El clic, viniendo de los datos

Conviene pulsar «Vacío» **después** de haber visto INC-14, no en frío. Así se comprueba que el resultado anterior desaparece. `pedir` vacía la lista y pone «Cargando incidencias…» antes de esperar. Durante la espera no deben seguir visibles las dos incidencias.

La petición es `GET /api/incidencias?modo=vacio`. Respuesta 200 y cuerpo `{ "incidencias": [] }`. No es un 404. No es un 500. Es una lista de longitud cero.

## En pantalla

«No hay incidencias abiertas.»

No hay artículos. No aparece «No se han podido cargar las incidencias.» Si apareciera, la página estaría tratando una respuesta correcta como un fallo. El código no lo hace: entra por `respuesta.ok` y elige `vacio` porque la longitud es 0.

## Qué se puede afirmar

El servicio ha contestado. La ausencia de incidencias es el contenido de la respuesta, no un silencio. En una sala, esta frase autoriza a seguir el turno sin abrir una incidencia de sistemas. La frase de error, en la página siguiente, no autoriza eso.
