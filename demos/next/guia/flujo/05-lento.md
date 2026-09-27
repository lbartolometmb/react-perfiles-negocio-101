# Lento

[← Página anterior](04-error.md) · [Siguiente página →](06-lectura.md)

## El clic

«Lento» pide `GET /api/incidencias?modo=lento`. La ruta espera 1200 milisegundos y después responde exactamente como `ok`: 200 y las dos incidencias. No es un desenlace distinto. Es tiempo para leer la fase de carga.

Durante la espera, el párrafo dice «Cargando incidencias…». No hay artículos todavía. Al cumplirse el tiempo, el párrafo desaparece y quedan INC-14 e INC-15, los mismos textos que con «Con datos».

## Qué confirmar con calma

1. Que la frase de carga llega a leerse entera, no solo a adivinarse.
2. Que, si se venía de «Vacío» o de «Error», esa frase anterior se sustituye por la de carga y no convive con ella. Solo hay un estado de fase a la vez.
3. Que el desenlace final coincide con «Con datos», no con un mensaje especial de «respuesta lenta». La lentitud no es un resultado de negocio.

## Si se pulsa dos veces

La página no cancela la primera petición. Con 1,2 segundos es posible disparar «Lento» y enseguida «Vacío». Ganará la que escriba la fase al final, no necesariamente la última que se pensó. En local, «Vacío» suele volver antes que «Lento», y entonces «Lento» pisa al final con los datos: se pidió vacío y se acaba viendo INC-14. Es la carrera que el módulo de asíncrono dejó escrita. Verla una vez vale más que la tabla: el puesto puede mostrar un resultado que ya no corresponde al último gesto. La demo no lo corrige. Lo deja observable.
