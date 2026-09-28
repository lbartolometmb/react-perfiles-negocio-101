# JSONP

[← Página anterior](06-ajax-json.md) · [Siguiente página →](../../spa/guia/01-antes-de-abrir.md)

## Bloque 6: sin XMLHttpRequest ni fetch

«6. JSONP». Tres botones: «Todas», «Solo L1» y «Solo L2». Ninguno usa `XMLHttpRequest` ni `fetch`. Lo que hacen es crear una etiqueta `<script>` y añadirla a la página con esta dirección:

```text
/jsonp/incidencias?callback=recibirIncidencias&linea=L1
```

El navegador descarga ese script y lo ejecuta, como haría con cualquier otro. El servidor no responde con JSON suelto. Responde con una línea de código que llama a la función cuyo nombre le han pasado:

```js
recibirIncidencias({"incidencias":[{"id":"INC-15","linea":"L1","texto":"Andén norte con acceso alternativo."}]});
```

`recibirIncidencias` está definida en `ajax.html`. Recibe el objeto y lo pasa por la misma `renderizarIncidencias` del bloque anterior. Por eso el resultado es igual: «Solo L1» deja «INC-15 — L1», «Solo L2» deja «INC-14 — L2» y «Todas» deja las dos.

En la pestaña Red, la petición aparece como script y su tipo es `application/javascript`. Al terminar, la etiqueta `<script>` se borra de la página.

## Por qué existió

Durante años, `XMLHttpRequest` no podía leer respuestas de otro dominio. Las etiquetas `<script>`, en cambio, sí podían cargarse desde cualquier sitio. JSONP aprovechaba eso: los datos venían envueltos en una llamada a función y entraban como si fueran código. Así se consumían APIs de terceros, mapas o contadores desde otra web.

Hoy ese problema se resuelve con CORS: el servidor declara qué otros dominios pueden leerle, y `fetch` funciona entre dominios. JSONP queda en sistemas antiguos y en integraciones que nadie ha tocado.

## Lo que hay que saber de él

- **Ejecuta código ajeno.** La página no recibe datos: recibe un programa y lo ejecuta con todos sus permisos. Si el servidor de JSONP está comprometido, la página también.
- **El nombre de la función es una entrada del usuario.** `server.js` solo acepta nombres de función válidos. Con `callback=alert(1)` responde 400 «callback no válido». Sin esa comprobación, cualquiera podría meter código en la respuesta.
- **Solo lectura.** Una etiqueta `<script>` solo hace `GET`. No hay forma de enviar un formulario ni un cuerpo.
- **Errores pobres.** No hay código de estado que leer. Si el script falla al cargar, `onerror` avisa, y la página muestra «No se han podido cargar las incidencias.» Si carga pero trae otra cosa, la página no se entera.

En una propuesta, «integración por JSONP» describe un sistema viejo o un proveedor que no ha habilitado CORS. Merece una pregunta de seguridad antes de aceptarse.

## Cierre de la demo tradicional

Tres documentos: el listado, la ficha y los ejemplos AJAX. En los dos primeros el JavaScript enseña y esconde lo que ya traía el HTML. En el tercero pide más al servidor —HTML hecho, JSON o JSONP— y lo coloca en un hueco sin sustituir el documento. En ningún caso la dirección de la página ha cambiado sin un enlace.

La guía siguiente abre la SPA, donde la interfaz entera la construye el navegador.
