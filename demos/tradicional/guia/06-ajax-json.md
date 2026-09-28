# AJAX con JSON y función de renderizado

[← Página anterior](05-ajax-html.md) · [Siguiente página →](07-jsonp.md)

## Bloque 5: llegan datos, no HTML

«5. JSON y una función de renderizado». Dos filas de botones: tres con `XMLHttpRequest` («XHR · Con datos», «XHR · Vacío», «XHR · Error») y cuatro con `fetch` («fetch · Con datos», «fetch · Vacío», «fetch · Error», «fetch · Lento»). Todos piden `GET /api/incidencias?modo=…` y pintan en el mismo hueco.

La respuesta ya no es un trozo de página. Es JSON:

```json
{
  "incidencias": [
    { "id": "INC-14", "linea": "L2", "texto": "Retraso de 6 minutos entre Mercado y Universidad." },
    { "id": "INC-15", "linea": "L1", "texto": "Andén norte con acceso alternativo." }
  ]
}
```

En la pestaña Red, el tipo es `application/json`. Si se abre `http://localhost:8080/api/incidencias` en otra pestaña, se ve ese texto, sin ningún `<article>`.

## La función de renderizado

El HTML que acaba en pantalla lo escribe `renderizarIncidencias`, en `ajax.html`. Recibe el objeto y devuelve una cadena de HTML:

- Si la lista está vacía, devuelve «No hay incidencias abiertas.»
- Si no, recorre la lista y por cada elemento escribe un `<article>` con `id — linea` como título y `texto` como párrafo.

Antes de meter cada campo en el HTML lo pasa por `escapar`, que convierte `<`, `>`, `&` y comillas dobles en texto. Sin ese paso, una incidencia cuyo texto trajera etiquetas se colocaría como HTML de verdad dentro de la página. Con HTML del servidor, ese cuidado lo tenía que haber tenido `server.js`; aquí lo tiene la página.

| Botón | Respuesta | Qué queda en el hueco |
|-------|-----------|------------------------|
| Con datos (XHR o fetch) | 200 y dos incidencias | «INC-14 — L2» e «INC-15 — L1» |
| Vacío | 200 y lista vacía | «No hay incidencias abiertas.» |
| Error | 500 | «No se han podido cargar las incidencias.» |
| fetch · Lento | 200 al cabo de algo más de un segundo | «Cargando incidencias…» y luego las dos incidencias |

A diferencia del bloque 1, el mensaje de error y el de vacío los redacta la página, no el servidor. No hay sello de hora: el servidor ya no compone HTML.

## XMLHttpRequest frente a fetch

Las dos funciones hacen lo mismo con dos herramientas:

- `pedirJsonXhr` abre la petición, espera `onload`, mira `xhr.status` y convierte el texto con `JSON.parse`.
- `pedirJsonFetch` usa `await fetch(…)`, comprueba `respuesta.ok` y lee con `respuesta.json()`.

El resultado en pantalla es idéntico. `XMLHttpRequest` es la herramienta con la que nació AJAX y sigue en muchos sistemas en uso; `fetch` es la que se escribe hoy. Para quien lee una propuesta, la diferencia no es de producto.

## HTML del servidor o JSON

| | Bloques 1 a 4 (HTML) | Bloque 5 (JSON) |
|---|----------------------|-----------------|
| Quién escribe «INC-14 — L2» | `server.js` | `renderizarIncidencias`, en el navegador |
| Qué viaja | Un trozo de página | Datos |
| Quién más puede usar la respuesta | Solo una página que quiera ese trozo | Cualquier cliente: otra web, una app, un informe |
| Cambiar la redacción | Se toca el servidor | Se toca la página |

La segunda columna es el camino que siguen la SPA y React: el servidor da datos y la interfaz se construye en el navegador. `renderizarIncidencias` es la versión más pequeña de esa idea, escrita a mano.
