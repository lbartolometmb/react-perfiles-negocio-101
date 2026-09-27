# Datos y vacío

[← Página anterior](carga.md) · [Siguiente página →](error.md)

## Con datos

`modo=ok` responde 200 y un array de dos elementos. La pantalla, al ver que la longitud no es cero, pone la fase en `ok` y pinta:

- «INC-14 — L2» y «Retraso de 6 minutos entre Mercado y Universidad.»
- «INC-15 — L1» y «Andén norte con acceso alternativo.»

Esos textos no están en `flujo/page.js`. Están en `route.js`. La prueba es buscarlos en el fichero de la página y no encontrarlos, y encontrarlos en la ruta. La pantalla solo conoce `id`, `linea` y `texto`. Si mañana el servicio añade un campo `gravedad` y la pantalla no lo pinta, no está roto el contrato: está incompleta la presentación. Si deja de enviar `texto`, sí está roto.

## Vacío

`modo=vacio` responde también 200, con `incidencias` igual a lista vacía. La fase pasa a `vacio` porque la longitud es cero. El texto es «No hay incidencias abiertas.» No hay artículos. No hay mensaje de fallo.

Vacío es una respuesta correcta. El servicio ha contestado y ha dicho que no hay nada. En explotación puede ser la mejor noticia del turno. Tratada como error, obliga a investigar una caída que no existe. Tratada como «no ha cargado», invita a pulsar otra vez sin fin.

## La distinción, escrita en el código

Después de un JSON válido, la línea que decide es la longitud de la lista. Cero es vacío. Más de cero es datos. El error no sale de esa línea: sale del `catch`, cuando la respuesta no es válida (código no ok, o un fallo de red). Tres caminos, tres frases. La página siguiente se queda solo con el tercero, porque es el que más se confunde con el vacío.
