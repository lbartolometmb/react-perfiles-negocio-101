# Rutas y memoria

[← Página anterior](02-arbol-next.md) · [Siguiente página →](../../M05-apis-calidad/README.md)

## Dos formas de «estar en el detalle»

En la SPA, estar en el detalle es un valor de `vista` en memoria. No hay ruta. No se puede abrir en otra pestaña. Atrás no lo conoce.

En Next.js, estar en la página de cliente es estar en `/cliente`. Es una ruta. Se abre sola, se comparte, Atrás vuelve a `/`. No recuerda un filtro, porque no tiene filtro. Recuerda la dirección, que es otra cosa.

Una propuesta que diga «cada pantalla tendrá su enlace» está pidiendo rutas, no estado. Se comprueba intentando copiar el enlace en el momento interesante. Si la barra no ha cambiado, no hay enlace, aunque la pantalla haya cambiado.

| Pregunta | SPA de la demo | Next.js de la demo |
|----------|----------------|--------------------|
| ¿El detalle de L1 tiene URL? | No | No hay detalle de L1. Las páginas grandes sí tienen URL |
| ¿Atrás deshace el último gesto interno? | No | Deshace el cambio de página, porque fue una navegación |
| ¿Dónde se añade una pantalla nueva? | Otra rama de `vista` en `App` | Otra carpeta con `page.js` |
| ¿Dónde se añade un dato que no es pantalla? | No hay sitio natural | `app/api/.../route.js` |

## Qué llevarse a una revisión

Se pide el mapa de URLs al lado del mapa de estados. Si solo hay uno de los dos, el otro se está ocultando. El panel puede legítimamente vivir en memoria **si** nadie ha prometido enlaces. La web pública no puede. El módulo de Next.js ya fijó esa frontera; aquí se ve en las carpetas: donde hay `page.js` hay promesa de dirección, y donde solo hay `useState` no la hay.

El módulo siguiente usa la ruta que falta por recorrer, `/flujo` y `/api/incidencias`, para ver qué pasa cuando la pantalla deja de tener el dato en un fichero y pasa a pedirlo.
