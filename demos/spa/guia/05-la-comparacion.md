# La comparación

[← Página anterior](04-lectura-del-codigo.md) · [Siguiente página →](../../../modulos/M02-nextjs/README.md)

## Las dos demos, juntas

Conviene tener las dos pestañas abiertas, 8080 y 5173, y hacer el mismo gesto: abrir L1 y volver.

| | Tradicional, puerto 8080 | SPA, puerto 5173 |
|---|--------------------------|------------------|
| Marca | Página tradicional | SPA React |
| Cómo se abre L1 | Enlace a `/detalle.html` | Botón, sin dirección nueva |
| Documento | Se sustituye | Sigue siendo el primero |
| Contador | Sube en cada fichero, medido de verdad | Pintado como 1; no mide recargas de vista |
| Código fuente del listado | Contiene «Línea L1» | No las contiene; las pinta el programa |
| Atrás del navegador | Vuelve al listado | No conoce el detalle |
| Enlace compartible del detalle | Sí, `/detalle.html` | No hay |
| Dónde está el texto «4 minutos» | Escrito en `detalle.html` | En `datos.js`, mostrado por `App` |
| Qué pasa al recargar en el detalle | Se vuelve a ver el detalle | Se cae al listado |

## Qué no se debe concluir

- No se concluye que la SPA sea más moderna. Se concluye que guarda la sesión de pantalla y pierde la dirección.
- No se concluye que la tradicional no pueda llevar datos vivos. Esta no los lleva. Un servidor puede generar el HTML con datos del momento. La demo no incluye ese servidor para que el fichero se pueda leer entero.
- No se concluye que React sea la causa de la SPA. React es la herramienta con la que esta SPA está hecha. El contrato (un documento vivo) se podría haber hecho con otra biblioteca. El módulo siguiente enseña React usado al revés: para producir HTML en el servidor, que es lo que la tradicional hace a mano.

## Cierre del primer bloque

Quien haya seguido las dos guías puede separar, en una frase de una propuesta, «web» de «aplicación de una sola página», y puede pedir la URL del detalle y el código fuente antes de creerse el adjetivo. Lo que aún no puede juzgar es el SEO ni la hora generada en cada visita. Eso es Next.js, y usa las mismas líneas para que el tercer contrato se vea sobre el mismo ejemplo.
