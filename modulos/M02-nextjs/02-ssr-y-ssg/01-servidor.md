# En el servidor

[← Página anterior](../01-primera-vista/03-que-se-pierde.md) · [Siguiente página →](02-estatico.md)

## Qué es SSR

El renderizado en servidor (SSR) significa: **en cada visita, el servidor compone el HTML con los datos de ese momento y lo envía**. El navegador recibe un documento ya hecho. Puede después «hidratarlo»: enganchar los eventos (clics, formularios) al HTML que ya está pintado, para que la página siga viva. La hidratación no es la que trae el texto. El texto ya vino.

En la portada de la demo, la hora es `new Date()` en el servidor, dentro de `page.js`, y la página declara que no se congele en el momento de publicar (`force-dynamic`). Por eso recargar cambia la hora. Si esa declaración no estuviera, una construcción de producción podría hornear la hora una sola vez y servir siempre la misma. El detalle importa: «está en Next.js» no garantiza frescura. La garantiza la decisión de recomponer en la visita.

## Qué nota el negocio

- La primera pantalla ya trae el estado, el aviso o la ficha.
- Dos personas que entran a la vez pueden recibir documentos distintos si el dato ha cambiado entre una y otra. Eso es lo deseable en el estado del servicio. Es un problema si la página era un texto legal que no debía variar por la hora del servidor.
- Cada visita cuesta trabajo en el servidor. Una portada muy visitada que recompone lo mismo mil veces por minuto paga ese trabajo sin ganar frescura.

## Qué no es

No es «la página no usa JavaScript». Puede usarlo después. No es «más seguro» por defecto: el HTML público sigue siendo público; lo que no debe verse no debe meterse en ese documento. No es una API. La API devuelve JSON. SSR devuelve la página. En esta demo conviven las dos cosas en el mismo proyecto: la portada es HTML compuesto, y `/api/incidencias` es JSON. Se miran en módulos distintos porque el contrato con el lector no es el mismo.

## Cómo se reconoce en la demo

1. Abrir `/`.
2. Ver el código fuente, no la vista ya arrancada.
3. Encontrar «Generada en el servidor» y un sello de hora dentro del HTML.
4. Recargar y comprobar que el sello cambia.

Si el sello no cambiara, o no estuviera en el fuente, no se estaría viendo esta forma de servir, aunque el marco sea el mismo.
