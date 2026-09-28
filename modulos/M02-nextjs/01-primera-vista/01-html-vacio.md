# HTML vacío

[← Página anterior](../README.md) · [Siguiente página →](02-seo-y-carga.md)

## Lo que llega primero

La primera vista es el documento que el servidor entrega **antes** de que el navegador ejecute el programa. En la página tradicional, ese documento ya trae L1 y L2. En la SPA de este curso, el documento trae un hueco (`div` con `id="root"`) y la orden de cargar JavaScript. Las líneas aparecen después, cuando React arranca.

Ese hueco no se ve mucho en un portátil con buena red y la demo en local: el programa arranca enseguida y la pantalla parece completa. Se ve cuando la red es justa, cuando el JavaScript es grande, cuando el script falla, o cuando quien lee no es un navegador completo. Ahí la primera vista es, durante un rato o para siempre, una página sin el estado del servicio.

Next.js existe para que esa primera vista no sea un hueco. El servidor compone el HTML con React —las mismas piezas, `TarjetaLinea` incluida— y lo manda ya relleno. El navegador puede seguir ejecutando JavaScript después, para lo que sea interactivo. La lectura inicial no depende de esa segunda fase.

## Dos momentos, no dos productos

Conviene no convertir esto en «Next.js es una web y React es una app». Las dos usan React. La diferencia es el momento:

| Momento | Quién compone el HTML | Qué ve quien no ejecuta JavaScript |
|---------|----------------------|-------------------------------------|
| Primera respuesta | El servidor, si el proyecto está preparado para ello | El contenido de negocio |
| Después de arrancar el programa | El navegador | Lo mismo, más lo que solo el clic puede hacer |

En la portada de la demo de Next.js, la hora y las dos líneas viajan en esa primera respuesta. En la página `/cliente`, la hora **no** viaja: el HTML dice que el servidor no la ha calculado, y el navegador la escribe al arrancar. Las dos páginas son del mismo proyecto. El marco permite las dos; el autor de cada pantalla elige.

## Qué no arregla el marco por sí solo

Si los datos de las líneas están escritos a mano en la página, el HTML llega lleno y aun así no es el servicio real. Next.js no conecta con el sistema de explotación. Conecta el momento de pintar con el momento de responder. De dónde sale el dato —un fichero, una API, una caché— es otra decisión, y se trata en el módulo de APIs. Aquí el foco es más estrecho: ¿el primer documento ya dice lo que el lector ha venido a leer?
