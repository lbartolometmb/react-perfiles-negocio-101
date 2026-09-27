# Qué se pierde

[← Página anterior](seo-y-carga.md) · [Siguiente página →](../02-ssr-y-ssg/servidor.md)

## Lo que una SPA deja fuera de la primera vista

Al quedarse solo con React en el navegador, se pierde, para la primera respuesta:

- El texto de negocio, hasta que el programa arranca.
- La dirección de cada vista, si la vista es una variable en memoria y no una ruta. La SPA de L1 no tiene URL de detalle. Next.js, en esta demo, sí tiene URL para la portada, para `/cliente` y para `/flujo`.
- La posibilidad de que un sistema externo lea la página sin ejecutarla.
- Una parte del botón Atrás y de «compartir este enlace», que dependen de que el estado importante esté en la dirección.

No se pierde React. Las piezas siguen siendo componentes. No se pierde la posibilidad de interacción posterior: un botón, un filtro, una hora local. Se pierde la confusión de tratar todo como si tuviera que nacer en el navegador.

## Lo que Next.js no devuelve solo

Poner el marco no restaura por arte el detalle de L1 como URL si nadie crea esa ruta. En la portada de la demo, L1 y L2 se pintan y no se navega a un detalle. El enlace compartible que sí existe es el de las tres páginas del proyecto, no el de cada línea. Hay que leer lo que está construido, no lo que el nombre del marco sugiere.

Tampoco devuelve el estado de un turno. Si el operador lleva veinte minutos filtrando y recarga, Next.js vuelve a mandar el documento de esa URL. Lo que no esté en la URL o en el servidor se pierde igual que en la SPA. El marco mejora la primera lectura. La memoria de trabajo sigue siendo un diseño aparte.

## Señales en una propuesta

- «Web pública en React» sin decir si el HTML va lleno.
- «SPA con buen SEO» sin enseñar el código fuente de una ficha.
- «Next.js» usado como sinónimo de «rápido» o de «moderno», sin una URL concreta que tenga que llegar completa.
- Una sola aplicación que mezcla el aviso público y el panel de sala, con un solo contrato de carga para los dos usos.

> [!NOTE]
> La demo tradicional ya enseñaba un HTML lleno, escrito a mano. Next.js enseña el mismo contrato —el documento llega completo— fabricado con componentes, y al lado una página del mismo proyecto que a propósito no lo cumple, para que la diferencia se vea sin cambiar de herramienta.
