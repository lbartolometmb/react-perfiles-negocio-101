# Cuándo basta

[← Página anterior](que-pasa-al-pulsar.md) · [Siguiente página →](../02-spa/que-es.md)

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

## El límite honesto de la demo

La demo tradicional enseña el contrato, no un sitio completo. No hay formularios, ni buscador, ni edición. Tiene dos documentos y un contador para hacer visible la recarga. Con eso basta para no confundir «web» con «React». Lo que no hay que concluir es que toda web tradicional sea un HTML estático escrito a mano: muchas se generan con un CMS o con un servidor en cada visita. Siguen siendo documentos. El módulo de Next.js vuelve sobre esa diferencia —documento generado frente a aplicación en el navegador— con más precisión.
