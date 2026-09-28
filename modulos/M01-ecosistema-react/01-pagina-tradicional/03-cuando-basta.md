# Cuándo basta

[← Página anterior](02-que-pasa-al-pulsar.md) · [Siguiente página →](../02-spa/01-que-es.md)

## El uso que cabe en documentos

La página tradicional basta cuando la tarea principal es **leer un recurso identificable**:

- Consultar el estado público de una línea y salir.
- Abrir la ficha de una estación desde un buscador o desde un enlace.
- Publicar un aviso que debe existir como URL estable.
- Mantener un sitio con muchas páginas de contenido y poca interacción entre ellas.
- Permitir que la página se lea aunque el JavaScript falle o tarde.

En esos casos, añadir una aplicación por delante no mejora la lectura. Añade un arranque, un equipo que mantiene un front, y un riesgo: que el contenido importante solo aparezca después de ejecutar código.

También basta, aunque duela escucharlo en una reunión de «modernización», cuando el volumen de uso interno es bajo y las pantallas son formularios que se envían y se confirman en otra página. Un parte que se rellena y se manda no necesita una SPA. Necesita un formulario claro, una confirmación y un registro en el servidor.

## Señales de que ya no basta

Hace falta otro modelo cuando, en la misma sesión, se repiten gestos que no son «ir a otro documento»:

- Filtrar un listado y que el resto de la pantalla (mapa, contadores, selección) siga en su sitio.
- Abrir un detalle y volver al mismo filtro, al mismo scroll y a la misma fila marcada.
- Recibir un dato nuevo —un retraso— sin reconstruir la página entera.
- Encadenar varios pasos (elegir línea, anotar, confirmar) sin que cada paso sea una navegación con recarga.
- Trabajar con estados de la propia interfaz: cargando, vacío, error, éxito. Esos estados son de la sesión, no de un documento publicado.

Si el relato del usuario es «estoy toda la mañana en esta herramienta», la unidad documento se queda pequeña. Si el relato es «entro, miro el aviso y cierro», sobra la aplicación.

## Cómo se ve en una propuesta

Preguntas que separan un sitio de documentos de una aplicación disfrazada:

| Pregunta | Si la respuesta es… | Lectura |
|----------|---------------------|---------|
| ¿Cada pantalla tiene URL propia y se entiende sola? | Sí, y el contenido está en el HTML | Página tradicional (o Next.js generándola; eso es el módulo 2) |
| ¿El operador encadena diez gestos sin querer perder el sitio? | Sí | El modelo de documentos se va a forzar |
| ¿Qué pasa con JavaScript desactivado o bloqueado? | «No se ve nada» | No es una página de contenido; es una aplicación |
| ¿El presupuesto habla de pantallas o de un producto con versión? | De un producto, con despliegues | No se está comprando un puñado de HTML |

## Qué demo es esta

Las preguntas de arriba se responden con una pantalla concreta del curso: la **página tradicional**.

| | |
|--|--|
| Arranque | `npm run demo:tradicional` |
| Dirección | http://localhost:8080 |
| Carpeta | `demos/tradicional/` |
| Listado | `public/index.html` — «Línea L1» con «Ver detalle de L1», «Línea L2» sin detalle, buscador, filtro de estado y «Ver paradas» |
| Ficha | `public/detalle.html` — «L1 — Centro / Norte», «Frecuencia habitual: 4 minutos», pestañas Horario, Paradas y Accesibilidad |
| AJAX | `public/ajax.html` — HTML construido en el servidor, JSON con función de renderizado y JSONP, sin salir de `/ajax.html` |
| Cómo reconocerla | Cabecera azul marino y pastilla «Página tradicional» |
| Guía | [Antes de abrir](../../../demos/tradicional/guia/01-antes-de-abrir.md), más adelante en el recorrido |

En clase, «página tradicional» significa esa demo. Pulsar «Ver detalle de L1» pide `detalle.html`. El contador de cargas de ese fichero sube. Volver al listado pide otra vez `index.html` y sube el otro contador. El texto de las líneas se lee en el HTML, abriendo el fichero o con «Ver código fuente». Filtrar, desplegar paradas o cambiar de pestaña no mueve ningún contador: es JavaScript dentro del mismo documento. El enlace «Ejemplos AJAX» abre un tercer documento: ahí los botones piden más al servidor y el contador de esa página tampoco se mueve.

Sirve para el caso «entro, miro el aviso y cierro»: una URL, un documento, el contenido ya dentro. Un parte con formulario, un buscador o una pantalla de edición son otros encargos; esta demo no los trae porque el gesto que hay que ver es el cambio de documento.

## Cuando el HTML no está escrito a mano

En el puerto 8080 los dos ficheros están guardados en la carpeta, para poder abrirlos y ver L1 y L2 dentro. Un aviso o una ficha reales, del mismo tipo, pueden salir de un CMS o componerse en el servidor en cada visita. Siguen siendo documentos: cada uno tiene su URL y el texto viaja en esa respuesta.

Ese segundo caso está en otra demo, la de Next.js: `npm run demo:next`, http://localhost:3000. La portada pinta las mismas líneas y una hora que el servidor escribe en el HTML de esa visita. La cabecera es violeta y la pastilla dice «Next.js — servidor». La guía es [Antes de abrir Next.js](../../../demos/next/guia/01-antes-de-abrir.md), en el módulo siguiente.
