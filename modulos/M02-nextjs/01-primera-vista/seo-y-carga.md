# SEO y carga

[← Página anterior](html-vacio.md) · [Siguiente página →](que-se-pierde.md)

## Encontrable

SEO, en este curso, no es una lista de trucos de posicionamiento. Es una condición de producto: **si una persona o un buscador abre la dirección, el contenido tiene que estar en el documento**. Un aviso de interrupción de L2 que solo existe después de ejecutar JavaScript no es un aviso para quien llega desde una búsqueda, desde un enlace en un correo leído por un cliente que no ejecuta la página, o desde una herramienta que archiva HTML.

La prueba no es «la página se ve bien cuando ya ha cargado». La prueba es «ver código fuente» —el documento que llegó, no el inspector, que muestra el documento ya modificado—. Si en el fuente de la portada aparecen «Línea L1» y la hora del servidor, esa visita era encontrable. Si en el fuente solo hay un hueco, no lo era, aunque un segundo después la pantalla se vea completa.

En un panel interno, detrás de identificación, casi nadie entra por un buscador. La condición se relaja. En la web pública del servicio, no.

## Carga inicial

El tiempo hasta la primera información útil depende de cuánto hay que descargar y ejecutar antes de pintar algo que se pueda leer. Una SPA puede ser ligera. También puede arrastrar un programa grande, fuentes, mapas y librerías antes de mostrar «L2, retraso leve». Cada pieza que se deja para el navegador es una espera en un móvil con cobertura irregular, que es justo el teléfono de quien mira si sale a la calle.

Preparar el HTML en el servidor adelanta el texto. No adelanta las imágenes pesadas ni un mapa que se pide después. Por eso «usamos Next.js» no es un compromiso de velocidad. Es un compromiso de que el texto puede ir en la primera respuesta. La velocidad real se mira en esa respuesta: tamaño, si el servidor tarda en componerla, si vuelve a calcularla en cada visita sin necesidad.

| Lo que el usuario nota | Causa habitual | Qué preguntar |
|------------------------|----------------|---------------|
| Pantalla en blanco y luego el listado | El HTML iba vacío y el programa tardó | ¿El listado puede ir ya en el documento? |
| El listado aparece y un segundo después cambia | El HTML traía un dato y el cliente lo sustituyó por otro | ¿Cuál de los dos es el válido? |
| La ficha tarda igual en cada visita | El servidor recompone algo que no cambia | ¿Se puede publicar ya hecha? |

## Datos frescos y datos estables

Una hora generada en la visita demuestra frescura: recargar cambia el número porque cada petición vuelve a componer. Un aviso que cambia dos veces al día no necesita recomponerse en cada una de las miles de visitas; puede fabricarse al publicarse y servirse igual. Las dos estrategias conviven en el mismo sitio. La siguiente parte del módulo las separa con nombre: SSR y SSG.
