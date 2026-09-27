# Con datos

[← Página anterior](01-antes-de-pulsar.md) · [Siguiente página →](03-vacio.md)

## El clic

«Con datos» llama a `pedir("ok")`. La fase pasa a carga y la lista en memoria se vacía. La petición es `GET /api/incidencias?modo=ok`. La ruta, si no reconoce otro modo, cae en el caso por defecto y devuelve 200 con las dos incidencias.

En la pestaña Red: estado 200, cuerpo con la clave `incidencias` y dos objetos.

## En pantalla

Tras el instante de «Cargando incidencias…» desaparece ese párrafo y aparecen dos artículos:

- Título «INC-14 — L2». Texto «Retraso de 6 minutos entre Mercado y Universidad.»
- Título «INC-15 — L1». Texto «Andén norte con acceso alternativo.»

No queda «Elige un caso.» No queda la frase de vacío ni la de error. El id `fase` ya no está en el DOM: en la fase `ok` la página no pinta ese párrafo, pinta los artículos. Es útil saberlo si se busca el id y no aparece: no es un fallo, es la rama `ok`.

## Comprobación de origen

Buscar «Mercado y Universidad» en `flujo/page.js`: no está. Buscarlo en `route.js`: está. La pantalla ha pintado lo recibido. Si los textos estuvieran también escritos en la página, la demo no demostraría el contrato: demostraría un duplicado. No lo están.
