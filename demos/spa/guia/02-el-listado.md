# El listado de la SPA

[← Página anterior](01-antes-de-abrir.md) · [Siguiente página →](03-el-detalle-sin-recarga.md)

## Qué aparece

Título del documento: «Red de transporte — SPA». En la página:

- Marca «SPA React».
- Título «Red de transporte».
- Frase: «Cambiar de vista no recarga el documento.»
- «Cargas del documento: 1». Ese 1 está escrito en `App.jsx` como texto fijo. No consulta `sessionStorage`. Es una afirmación de la demo: mientras no se recargue el documento, la carga sigue siendo la primera. Si se recarga, el programa arranca otra vez y vuelve a pintar 1. No sube. A diferencia de la demo tradicional, aquí el número no es una medición: es un recordatorio del contrato. La medición de verdad es la barra de direcciones y la pestaña de red del navegador, que no debe pedir un HTML nuevo al cambiar de vista.
- Ficha L1, «en servicio», con un botón «Ver detalle» (no un enlace).
- Ficha L2, «retraso leve», sin botón.

## De dónde sale cada frase

Los nombres y estados salen de `datos.js`. `App` recorre esa lista y, por cada elemento, pinta una `TarjetaLinea`. A L1 le pasa `onVerDetalle`. A L2 no le pasa esa acción, y la tarjeta no inventa un botón: si no recibe la acción, no la muestra. Las dos fichas son la misma pieza. La diferencia está en los argumentos.

El código fuente de la página, el del documento inicial, no contiene «Línea L1». Contiene el `div` vacío. Si se mira demasiado tarde, con las herramientas de inspección del DOM ya vivo, las líneas sí aparecen, porque React ya las ha metido. La prueba limpia es el código fuente (el documento que llegó), no el inspector (el documento ya modificado). En la tradicional era al revés: fuente e inspector decían lo mismo.

## La pestaña de red

Al cargar, hay peticiones: el HTML, los módulos de JavaScript, quizá el CSS. Al quedarse en el listado sin pulsar, no hace falta ninguna petición de datos de líneas: ya venían en `datos.js`, dentro del programa. Eso es cómodo para la clase y falso como metáfora de un panel real. La guía lo nombra para que nadie diga que «React no usa red». Esta demo no usa red para el negocio. El módulo de APIs enseña la misma familia de pantallas cuando los datos sí se piden.
