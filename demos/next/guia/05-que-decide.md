# Qué decide

[← Página anterior](04-pagina-de-cliente.md) · [Siguiente página →](../../../modulos/M03-web-movil-escritorio/README.md)

## Las dos páginas, juntas

| | `/` | `/cliente` |
|---|---------------------|------------|
| Pastilla | Next.js — servidor | Next.js — cliente |
| Texto de negocio en el fuente | L1, L2, hora de generación | La frase de espera, sin sello |
| Al recargar | Cambia la hora del servidor | El fuente vuelve a la espera; el sello nuevo lo pone el navegador |
| Interacción | Enlaces a otras URL | Enlaces a otras URL |
| Estado en memoria | No guarda una vista | Solo la hora local, y se pierde al recargar porque se recalcula |

## Decisiones que esta guía autoriza

- Lo que tiene que leerse al llegar viaja en el HTML de `/`. Pedirlo en una ficha pública es concreto: «como la portada, el texto está en el fuente».
- Lo que solo el navegador puede saber se calcula como en `/cliente`, y no se exige verlo en el fuente.
- Un proyecto Next.js puede tener las dos. Encargar el marco no equivale a encargar SSR en cada URL.
- Los enlaces de esta demo sí cambian la dirección. Si una entrega promete compartir pantallas y luego la pantalla es un estado interno, no ha cumplido lo que estas URL sí cumplen.

## Decisiones que no autoriza

- No dice que L2 esté conectada al servicio real.
- No dice que `/flujo` ya esté juzgada. Esa pantalla tiene carga, vacío y error, y se recorre cuando el curso llega al contrato de la API.
- No dice que haga falta Next.js para un panel sin URL pública. Dice cuándo el documento inicial importa.

El módulo siguiente sale del navegador de propósito general: móvil de campo, puesto fijo y envoltorio híbrido. No hay una cuarta demo que arrancar. Hay un caso con cuatro piezas, y esta portada es una de ellas: la web que cualquiera abre.
