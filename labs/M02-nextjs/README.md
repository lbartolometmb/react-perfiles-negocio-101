# M02 — Next.js

[← Página anterior](../M01-ecosistema-react/README.md) · [Siguiente página →](../M03-web-movil-escritorio/README.md)

> [!NOTE]
> **Cómo funciona este módulo.** La teoría separa React en el navegador de Next.js. La demostración enseña qué parte de la página ya viene hecha desde el servidor y qué parte aparece después en el navegador.

## Qué aprenderás

- Explicar qué problema de negocio resuelve Next.js: que la primera vista llegue completa, sea encontrable y no dependa de esperar a JavaScript.
- Distinguir una página generada en el servidor de una página montada solo en el navegador.
- Decidir cuándo hace falta Next.js y cuándo basta React en el cliente.

## Teoría

React, por defecto, pinta en el **navegador**. El servidor entrega un HTML casi vacío y un programa. Hasta que ese programa arranca, el usuario ve poco, y un buscador que no ejecuta JavaScript ve poco. En un panel interno, detrás de un login, eso suele ser aceptable. En la web pública de una línea, un aviso o una campaña, no.

**Next.js** es un marco que pone React en un proyecto con servidor. La misma interfaz puede prepararse antes de llegar al navegador.

Tres ideas, sin entrar a implementarlas:

| Idea | Qué ocurre | Qué nota el negocio |
|------|------------|---------------------|
| Renderizado en servidor (SSR) | En cada visita, el servidor compone el HTML con los datos de ese momento y lo envía | La primera pantalla ya trae el contenido. La hora, el estado de la línea o el aviso van en el documento |
| Generación estática (SSG) | El HTML se fabrica de antemano, al publicar, y se sirve igual a todo el mundo | Encaja en contenido que no cambia por usuario: una ficha, una página de servicio, un aviso estable |
| React solo en el cliente | El HTML inicial no trae los datos. El navegador los pide y pinta después | Encaja en un panel ya autenticado. Es frágil como única estrategia si la página tiene que leerse al instante o indexarse |

> [!NOTE]
> SSR y SSG no son «Next.js sí o no». Son dos momentos de fabricar el HTML. Next.js es la herramienta que permite elegir ese momento. Una SPA de React puro no lo elige: pinta en el cliente.

Problemas que esta elección toca:

- **SEO.** Si el contenido tiene que encontrarse en un buscador, tiene que estar en el HTML, no solo después de ejecutar JavaScript.
- **Tiempo de carga inicial.** Cuanto más trabajo se deja al navegador antes de mostrar algo útil, más espera el usuario en un móvil o en una red justa.
- **Datos frescos.** Una página estática es rápida y barata, y se queda vieja hasta la próxima publicación. Una página de servidor puede leer el estado del servicio en esa visita, y cuesta una computación por visita.

### Cuándo Next.js y cuándo React a secas

| Situación | Enfoque que encaja |
|-----------|--------------------|
| Web pública, fichas, avisos, campañas | Next.js, con HTML generado en servidor o de antemano |
| Panel interno, mucho rato abierto, datos tras identificarse | React en el cliente suele bastar |
| Las dos cosas en el mismo producto | Next.js para la parte pública y pantallas de cliente para la parte interactiva |
| La propuesta dice «Next» solo porque es el nombre que está de moda | Preguntar qué URL tiene que verse completa sin esperar a JavaScript |

Next.js no sustituye la conversación del módulo anterior. Sigue siendo React. Añade dónde se fabrica el HTML y cómo se organizan las direcciones.

## Demostración guiada

La demo de Next.js se abre en `http://localhost:3000` cuando está arrancada ([demos/README.md](../../demos/README.md)). El código de la portada está en [page.js](../../demos/next/app/page.js).

1. Al abrir `/`, el listado de líneas y la frase «Generada en el servidor» ya vienen en el documento. La hora es la del servidor en esa petición: si se recarga, cambia, porque cada visita vuelve a componer la página. No ha hecho falta que el navegador calcule el contenido para que esté ahí.
2. Al abrir [Página de cliente](http://localhost:3000/cliente), el HTML inicial dice que el servidor no ha calculado la hora. La hora aparece un instante después, cuando el navegador ejecuta el programa. Esa pantalla está en [cliente/page.js](../../demos/next/app/cliente/page.js). Si se mira el documento antes de que el programa corra, la hora no está.
3. La decisión que sale de las dos pantallas: lo que tiene que leerse al llegar (estado del servicio, un aviso, una ficha) viaja en el HTML del servidor. Lo que solo tiene sentido con la página ya abierta (un reloj local, un clic, un filtro) puede calcularse en el navegador. Pedir Next.js para un panel que nadie indexa, o pedir una SPA para la web pública de las líneas, son las dos confusiones habituales.

> [!NOTE]
> «Ver el código fuente» de `/` muestra las líneas y la hora. En `/cliente`, el código fuente muestra el texto de espera, no la hora. Esa es la prueba, no el aspecto visual una vez la página ya ha arrancado: cuando todo ha cargado, las dos pantallas parecen igual de completas.
