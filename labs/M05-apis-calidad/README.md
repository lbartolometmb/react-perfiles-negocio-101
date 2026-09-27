# M05 — APIs, calidad y caso

[← Página anterior](../M04-componentes-arquitectura/README.md) · [Siguiente página →](../../README.md)

> [!NOTE]
> **Cómo funciona este módulo.** La teoría sigue el camino de un dato desde el servicio hasta la pantalla, y cierra con un checklist. La demostración recorre los cuatro desenlaces de la misma petición y valora el caso completo.

## Qué aprenderás

- Seguir un flujo frontend–API: quién pide, qué viaja y qué debe mostrar la pantalla mientras tanto.
- Reconocer los cuatro desenlaces de una petición: carga, datos, vacío y error.
- Aplicar un checklist de calidad a una interfaz ya hecha y señalar riesgos de arquitectura, de rendimiento y de elección tecnológica.

## Teoría

La pantalla no es el sistema. Es el cliente de otros sistemas. Una **API** es el contrato por el que la interfaz pide o envía datos. En estas demos el contrato es **REST**: una URL, un verbo (aquí, leer con `GET`) y una respuesta **JSON**, texto estructurado que no es HTML.

Relación habitual:

| Pieza | Rol en el caso |
|-------|----------------|
| Navegador | Muestra la pantalla y dispara la petición al pulsar un botón |
| Frontend | Decide los estados de carga, vacío y error. No inventa las incidencias |
| API | Devuelve JSON. Puede tardar, venir vacía o fallar |
| Backend y datos | Detrás de la API. En la demo están simulados en la propia ruta, para poder forzar cada desenlace |

Una petición es **asíncrona**: se lanza y la pantalla sigue viva hasta que llega la respuesta. En ese intervalo el usuario tiene que ver que algo pasa. Si la respuesta no llega, tiene que ver que ha fallado y no un listado viejo presentado como actual.

| Desenlace | Qué ha pasado | Qué debe verse |
|-----------|---------------|----------------|
| Carga | La petición sigue en curso | Un aviso de espera. No el listado anterior como si fuera el nuevo |
| Con datos | Hay incidencias | Cada incidencia, con su identificador y su línea |
| Vacío | La respuesta es correcta y la lista tiene cero elementos | Una frase de «no hay», distinta del error |
| Error | El servicio no responde bien | Un fallo explícito. No una lista vacía, que significaría otra cosa |

> [!NOTE]
> Vacío y error no son lo mismo. Vacío es «el servicio ha contestado: no hay incidencias». Error es «no sabemos si las hay». Tratarlos igual esconde una caída del servicio detrás de una buena noticia.

**Tiempo real**, en una frase: en lugar de pulsar para preguntar, la pantalla recibe avisos cuando el dato cambia (un canal abierto, no una pregunta suelta). Esta demo no lo hace. Si una propuesta lo promete, la pregunta útil es qué pasa cuando ese canal se corta: ¿la pantalla se queda congelada en el último dato y lo dice, o parece en vivo sin estarlo?

### Checklist de calidad

Sirve para leer una entrega o una demo, no para programarla.

| Se mira | Señal sana | Señal de alerta |
|---------|------------|-----------------|
| Arquitectura | Se distingue la pantalla, la petición y los datos. Hay un sitio donde ver el estado de la vista | Un solo bloque hace de interfaz, de reglas y de acceso a datos, y nadie sabe qué rompe un cambio |
| Rendimiento | La primera vista útil llega pronto. Lo pesado no bloquea el resto | La página pública espera a un programa grande antes de mostrar el aviso. Cada clic recarga de más, o no recarga nunca y enseña datos viejos |
| Respuesta de la interfaz | Hay carga, vacío y error, y no se parecen | Un fallo deja la pantalla en blanco o en el estado anterior sin decirlo |
| Responsive | Al estrechar la ventana, se puede leer y pulsar | Hay que hacer scroll horizontal o los botones se salen. Eso no se arregla con una app: se arregla el layout |
| Accesibilidad | Los botones son botones, el título es un título, el contraste se lee | La acción importante es solo un icono o un color (rojo = retraso) sin texto |
| Seguridad básica | El panel interno no es una URL pública. No se ven tokens ni datos de más en la pantalla | Una API de incidencias internas responde sin contexto de acceso, o el JSON trae campos que la pantalla no debería enseñar |
| Pruebas | Hay una forma repetible de comprobar el flujo completo, no solo «lo he mirado yo» | El único control es recorrer a mano el día de la demo |
| Elección tecnológica | La superficie coincide con el uso (web pública, panel, campo, puesto fijo) | Electron para una web pública, o una SPA como única web de avisos |

Herramientas que bastan para esa lectura, sin convertirse en un curso de medición: las herramientas del navegador (pestaña Red, para ver la petición; pestaña de rendimiento, si la página tarda) y el código fuente de la página, para ver si el contenido ya venía en el HTML.

## Demostración guiada

La pantalla está en `http://localhost:3000/flujo`. La petición que dispara cada botón está en [flujo/page.js](../../demos/next/app/flujo/page.js). La respuesta está en [route.js](../../demos/next/app/api/incidencias/route.js).

1. Al abrir `/flujo`, todavía no hay lista. El texto pide elegir un caso. No se ha fingido un «todo va bien» antes de preguntar.
2. Con **Con datos**, la pantalla pasa un instante por «Cargando incidencias…» y después muestra INC-14 en L2 e INC-15 en L1. La petición ha sido `GET /api/incidencias?modo=ok`. El JSON trae un array `incidencias`. La pantalla no tenía esos textos escritos: los ha pintado al recibirlos.
3. Con **Vacío**, la misma URL con `modo=vacio` responde bien y con la lista en cero. El texto es «No hay incidencias abiertas». No aparece un mensaje de fallo.
4. Con **Error**, `modo=error` responde con un fallo. El texto es «No se han podido cargar las incidencias». No aparece la frase de lista vacía. Vacío y error quedan separados.
5. Con **Lento**, la misma respuesta que «Con datos» tarda más de un segundo. Durante la espera se mantiene el aviso de carga. Sin ese aviso, el usuario repetiría el clic o creería que el puesto se ha colgado.

### Lectura del caso

Sobre el conjunto de las demos, no solo sobre este botón:

| Pregunta | Qué se ve | Riesgo si faltara |
|----------|-----------|-------------------|
| ¿Qué arquitectura es cada pieza? | La web de líneas en Next.js separa portada de servidor, página de cliente y flujo con API. La SPA guarda listado y detalle en memoria, con datos fijos | Tratarlas como «la misma app» y exigir a la SPA una URL pública indexable, o a la portada un comportamiento de panel |
| ¿De dónde salen los datos? | En la SPA, de un fichero. En `/flujo`, de una API. En la portada Next, están escritos en la página y la hora se calcula al vuelo | Una demo con datos fijos presentada como integración con el sistema real |
| ¿La elección tecnológica cuadra? | Avisos públicos en HTML de servidor. Panel de sala como SPA o como ruta de cliente. Campo y puesto fijo, decididos en el módulo de superficies, no metidos en esta demo | Prometer móvil nativo o escritorio porque el panel web ya existe |
| ¿La calidad del flujo aguanta? | Carga, datos, vacío y error son cuatro frases distintas. Los botones se leen. El título de la página es un título | Una entrega en la que el error se ve como lista vacía, o en la que el retraso solo se marca con un color |

Señales que esta demo deja fuera a propósito, y que en una entrega real habría que preguntar: quién puede llamar a `/api/incidencias`, qué pasa si el dato cambia solo (tiempo real) y cómo se repite esta comprobación sin pulsar los cuatro botones a mano cada vez.
