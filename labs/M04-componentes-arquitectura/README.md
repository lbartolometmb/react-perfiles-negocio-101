# M04 — Componentes y arquitectura

[← Página anterior](../M03-web-movil-escritorio/README.md) · [Siguiente página →](../M05-apis-calidad/README.md)

> [!NOTE]
> **Cómo funciona este módulo.** La teoría nombra las piezas. La demostración las señala en los dos proyectos que ya están abiertos: la SPA y Next.js.

## Qué aprenderás

- Leer una pantalla como piezas: qué se pinta, qué datos entran y dónde vive lo que cambia.
- Distinguir props de estado, y un componente que solo muestra de otro que decide.
- Reconocer, en un árbol de carpetas, dónde está la interfaz, dónde los datos y dónde las direcciones.
- Ver en qué se parece y en qué se separa un proyecto React de uno Next.js.

## Teoría

### La pantalla como función de los datos

Si el dato dice «retraso leve», la pantalla dice «retraso leve». No hay una segunda verdad escondida en el dibujo. Cuando el dato cambia, la interfaz se vuelve a calcular. Esa frase —la interfaz es función del estado— es el criterio para leer un proyecto: buscar dónde está el dato, no dónde está el color.

Un **componente** es una pieza con nombre. `TarjetaLinea` pinta una línea. Se usa dos veces, con datos distintos, en lugar de copiar el mismo bloque HTML.

### Props y estado

| | Props | Estado |
|---|-------|--------|
| Qué son | Datos que la pieza recibe desde fuera | Datos que la pieza recuerda mientras está en pantalla |
| Ejemplo | Nombre y estado de servicio de una línea | Qué vista está abierta: listado o detalle |
| Quién los cambia | Quien usa la pieza | La propia pieza, ante un clic o una respuesta |
| Si se leen mal | Se cree que la tarjeta «sabe» de qué línea se trata | Se cree que al cambiar de página el recuerdo se pierde siempre |

> [!NOTE]
> Props no son «configuración del programador» y el estado no es «la base de datos». Los dos viven en la pantalla. La base de datos está en otro sistema. El módulo siguiente sigue ese salto.

El **renderizado** es calcular la pantalla a partir de props y estado. Una **actualización** es volver a calcularla porque algo cambió. El **Virtual DOM** es el mecanismo interno con el que React compara el resultado nuevo con el anterior y toca solo el trozo necesario del documento. No es una tecnología que el negocio compre aparte. Sirve para entender una frase de una propuesta: «no recargamos la página, actualizamos el componente».

### Dos tipos de pieza

| Pieza | Hace | No hace |
|-------|------|---------|
| Presentacional | Pinta lo que recibe. Puede avisar de un clic | No pide datos, no decide la vista |
| Con lógica | Guarda el estado, elige qué vista mostrar, pide datos | No debería ser el único sitio donde también se dibuja cada detalle visual |

Cuando todo está en un solo fichero enorme, leer un cambio («¿esto es un color o una regla de negocio?») se vuelve caro. Cuando la tarjeta solo pinta y otra pieza decide, un cambio de redacción no se mezcla con un cambio de flujo.

El **estado de la aplicación** (qué línea está seleccionada, si la lista va vacía) no tiene por qué vivir en cada tarjeta. En proyectos grandes se concentra en un sitio común. En esta demo basta con que viva en `App`. El nombre de la librería que lo concentre, si aparece en una propuesta, importa menos que la pregunta: ¿hay un solo sitio donde mirar qué está pasando, o hay que cazar variables por diez ficheros?

### Carpetas: React y Next.js

La SPA de esta demo es un proyecto React pequeño, arrancado con Vite.

| Ruta | Qué es |
|------|--------|
| `demos/spa/index.html` | El único documento. Tiene un hueco vacío (`#root`) donde entra la aplicación |
| `demos/spa/src/main.jsx` | El arranque: mete `App` en ese hueco |
| `demos/spa/src/App.jsx` | La lógica de la pantalla: vista actual y línea elegida |
| `demos/spa/src/components/TarjetaLinea.jsx` | La pieza presentacional |
| `demos/spa/src/datos.js` | Los datos de ejemplo, fijos, sin servidor |
| `demos/spa/package.json` | Qué herramientas hay que instalar para arrancar |

Next.js organiza el proyecto por **direcciones**. Una carpeta dentro de `app/` es una URL.

| Ruta | Qué es |
|------|--------|
| `demos/next/app/page.js` | La portada `/`. Se compone en el servidor |
| `demos/next/app/cliente/page.js` | La URL `/cliente`. La hora se calcula en el navegador |
| `demos/next/app/flujo/page.js` | La URL `/flujo`. Pide datos a una API |
| `demos/next/app/api/incidencias/route.js` | La URL `/api/incidencias`. No es una pantalla: es la respuesta JSON |
| `demos/next/app/components/TarjetaLinea.js` | La misma idea de pieza, en el proyecto Next |
| `demos/next/app/layout.js` | El marco común de todas las páginas (idioma, estilos) |

> [!NOTE]
> En la SPA, cambiar de listado a detalle no crea una URL nueva: lo decide una variable. En Next.js, «Página de cliente» y «Flujo con API» son rutas de verdad. Si una propuesta promete «cada pantalla tendrá su enlace para compartirla», hace falta ruta, no solo un estado interno.

## Demostración guiada

Con la SPA abierta en `http://localhost:5173` y el fichero [TarjetaLinea.jsx](../../demos/spa/src/components/TarjetaLinea.jsx) a la vista.

1. `TarjetaLinea` recibe `nombre`, `estado` y, si corresponde, una acción `onVerDetalle`. No contiene la lista de líneas ni sabe qué vista viene después. Al recorrer el listado, la misma pieza aparece dos veces: L1 con botón, L2 sin él, porque quien la usa ha decidido pasar la acción solo en L1.
2. En [App.jsx](../../demos/spa/src/App.jsx) están `vista` y `lineaId`. Al pulsar «Ver detalle», esas dos variables cambian y la pantalla se calcula otra vez: el título pasa a ser el detalle y aparece «Volver al listado». No ha habido otro documento. El dato de las líneas no se pide: está importado de [datos.js](../../demos/spa/src/datos.js). Por eso el listado no tiene estado de carga ni de error. Eso no es una virtud: es un ejemplo cerrado. El módulo siguiente abre el caso en el que los datos vienen de fuera.
3. Al pasar al proyecto Next.js, la tarjeta equivalente está en [TarjetaLinea.js](../../demos/next/app/components/TarjetaLinea.js) y no ofrece un clic: en la portada solo informa. La navegación no es una variable `vista`. Son enlaces a `/cliente` y a `/flujo`, y cada uno tiene su `page.js`. La portada, además, calcula la hora en el servidor en el momento de la petición. La estructura que se recorre es la de la tabla anterior: `app/` para direcciones, `components/` para piezas, `api/` para la respuesta que no es una pantalla.
