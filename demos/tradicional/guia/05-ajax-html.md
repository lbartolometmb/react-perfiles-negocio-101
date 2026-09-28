# AJAX con HTML del servidor

[← Página anterior](04-la-decision.md) · [Siguiente página →](06-ajax-json.md)

## Dónde está

Desde el listado, el enlace «Ejemplos AJAX» abre `http://localhost:8080/ajax.html`. Eso sí es otro documento: la barra cambia y el contador de esta página (`cargas-ajax`) marca su propia carga. A partir de ahí, ningún botón de la página vuelve a subirlo. Todo lo que se ve después llega por detrás, sin cambiar de documento.

La página tiene seis bloques numerados. Esta guía recorre los cuatro primeros, en los que el servidor manda **HTML ya construido** y el navegador se limita a colocarlo. Es AJAX a la vieja usanza.

## Bloque 1: XMLHttpRequest

«1. HTML construido en el servidor, con XMLHttpRequest». Cuatro botones: «Con datos», «Vacío», «Error», «Lento». Cada uno pide `GET /fragmentos/incidencias?modo=…`.

La función `pedirHtmlXhr` abre un `XMLHttpRequest`, espera la respuesta y copia `xhr.responseText` en el hueco con `innerHTML`. No sabe qué es una incidencia. No recorre ninguna lista. Coloca texto HTML.

| Botón | Respuesta del servidor | Qué queda en el hueco |
|-------|------------------------|------------------------|
| Con datos | 200, dos `<article>` y un sello de hora | «INC-14 — L2», «INC-15 — L1», «HTML compuesto en el servidor a las…» |
| Vacío | 200, un párrafo | «No hay incidencias abiertas.» y el sello |
| Error | 500, un párrafo | «Respuesta 500:» y «No se han podido cargar las incidencias.» |
| Lento | 200 al cabo de algo más de un segundo | «Cargando…» y luego lo mismo que «Con datos» |

Incluso el mensaje de vacío y el de error los redacta el servidor. El sello de hora cambia en cada clic: prueba de que el fragmento se compone en esa petición.

En la pestaña Red, la respuesta es `text/html`. Se puede abrir `http://localhost:8080/fragmentos/incidencias` en otra pestaña y se ve el trozo suelto: artículos sin cabecera ni estilos.

## Bloque 2: formulario

«2. Formulario que trae HTML». Un desplegable «Línea» (Todas, L1, L2) y «Filtrar». El formulario tiene `action="/fragmentos/incidencias"` y `method="get"`: sin JavaScript, enviar abre ese fragmento como página nueva, con la query `?linea=L2`. Con JavaScript, `submit` se intercepta, la misma petición va por `XMLHttpRequest` y solo cambia el hueco. Con L2 queda solo «INC-14 — L2». Con L1, solo «INC-15 — L1».

Es el patrón clásico de mejora progresiva: el formulario funciona igual como documento, y el AJAX lo hace más fluido.

## Bloque 3: fragmento en un fichero

«3. Fragmento guardado como fichero». El botón «Aviso L2» pide `/fragmentos/aviso-l2.html`, un trozo de HTML escrito a mano en `demos/tradicional/public/fragmentos/`. Aparece «Aviso L2 — Este / Sur» y «Frecuencia prevista: 8 minutos». El servidor no compone nada: lo reparte, igual que reparte `index.html`.

## Bloque 4: el mismo HTML con fetch

«4. El mismo HTML con fetch». Mismos cuatro botones, misma URL, misma respuesta. Cambia la función: `pedirHtmlFetch` usa `fetch` y `respuesta.text()` en lugar de `XMLHttpRequest`. El hueco termina igual. `fetch` es la forma actual de pedir; lo que viaja sigue siendo HTML.

## Qué se ha visto

En los cuatro bloques la página no sabe construir una incidencia. Quien decide cómo se escribe «INC-14 — L2» es `server.js`, en `fragmentoIncidencias`. Si mañana cambia la redacción, se toca el servidor y la página no se entera. La contrapartida: el fragmento solo sirve para esta página. Otro cliente —una app, otro panel— recibiría HTML que no le vale. La página siguiente cambia eso: llegan datos, y el HTML se construye en el navegador.
