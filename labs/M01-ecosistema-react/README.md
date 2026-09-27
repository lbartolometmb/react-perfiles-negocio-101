# M01 — Ecosistema React

[← Página anterior](../../README.md) · [Siguiente página →](../M02-nextjs/README.md)

> [!NOTE]
> **Cómo funciona este módulo.** Primero la teoría. Después una demostración que compara una página tradicional con una SPA hecha en React.

## Qué aprenderás

- Distinguir una página que se recarga entera de una aplicación que cambia de vista sin recargar.
- Explicar qué problema resuelve React y en qué tipo de producto encaja.
- Reconocer cuándo React no es la mejor elección, y qué papel juegan Angular y Vue en esa conversación.
- Saber para qué sirven Node.js y NPM aunque no vayas a programar.

## Teoría

### Dos formas de construir la misma pantalla

Una **página tradicional** es un documento HTML. Cada enlace pide otro documento al servidor. El navegador tira la pantalla actual y pinta la nueva. Es el modelo de una web de contenidos: noticias, fichas, un listado con su detalle.

Una **SPA** (single page application) carga un solo documento. A partir de ahí, JavaScript cambia lo que se ve. La dirección puede quedarse igual o cambiar sin pedir un HTML nuevo. Es el modelo de un panel, un backoffice o una herramienta que el usuario tiene abierta un buen rato.

| | Página tradicional | SPA |
|---|--------------------|-----|
| Qué viaja en cada clic | Un documento HTML completo | Datos, o solo un cambio de vista ya descargado |
| Qué nota el usuario | Un parpadeo, la página «vuelve a entrar» | La pantalla sigue abierta |
| Dónde encaja | Contenido público, SEO sencillo | Herramienta de uso continuo |
| Coste típico | Menos aplicación que mantener | Más JavaScript, más cuidado con la carga inicial |

> [!NOTE]
> SPA no significa «web moderna» y página tradicional no significa «web vieja». Son dos contratos distintos con el navegador. Elegir mal el contrato es una decisión de producto, no un detalle de código.

### Qué es React

React es una biblioteca de JavaScript para construir la interfaz como piezas reutilizables, los **componentes**. La idea que hay que retener: la pantalla es una función de los datos. Si cambian los datos (una línea pasa a «retraso»), React calcula qué trozo de pantalla debe cambiar.

React no es un servidor, ni una base de datos, ni un lenguaje. Vive en el navegador, o en un entorno que sepa ejecutar JavaScript. Por sí solo no posiciona bien en buscadores ni convierte una web en una app de móvil. Esas piezas llegan con otras herramientas del mismo ecosistema (Next.js, React Native), que se ven en los módulos siguientes.

Casos habituales:

- Paneles internos: incidencias, planificación, seguimiento de servicio.
- Áreas privadas donde el usuario navega mucho rato sin «salir» de la herramienta.
- Interfaces que varias plataformas quieren compartir (web, y más adelante móvil).

### Cuándo sí y cuándo no

| Encaja | No encaja, o encaja mal |
|--------|-------------------------|
| La pantalla cambia según datos que llegan todo el tiempo | La web es sobre todo contenido público y estable |
| Hay muchos estados de la misma vista (cargando, vacío, error, detalle) | Cada URL es un documento que debe leerse tal cual, también sin JavaScript |
| El equipo ya mantiene un front en JavaScript | El proyecto es una página institucional pequeña y el coste de una SPA no se recupera |
| Hace falta la misma base visual en web y en otras superficies | Hace falta control fino del dispositivo (cámara, sensores, rendimiento nativo) y la web se queda corta |

Angular y Vue resuelven el mismo problema de fondo: interfaz construida por componentes. La diferencia que importa en una conversación de negocio no es la sintaxis.

| | React | Angular | Vue |
|---|-------|---------|-----|
| Qué es | Biblioteca de interfaz. El resto del proyecto se elige aparte | Framework completo: estructura, formularios, peticiones | Framework progresivo: se puede usar poco o mucho |
| Quién lo empuja | Comunidad y Meta | Google | Comunidad, con origen en un autor independiente |
| Cuándo aparece en una propuesta | Equipos front, productos con mucho estado de pantalla | Entornos corporativos que quieren un marco cerrado | Equipos que buscan una curva más corta o un marco menos rígido |

Ninguno de los tres «está muerto» ni «es el único profesional». Si una propuesta cambia de React a Angular a mitad de proyecto, el coste no es el logo: es rehacer componentes, formar al equipo y volver a probar los flujos.

### Node.js y NPM

**Node.js** ejecuta JavaScript fuera del navegador. En este ecosistema sirve para arrancar las demos, construir el proyecto y, en otros cursos, para un servidor. No hace falta que el alumno lo programe: hace falta saber que «hay que tener Node» significa «hace falta el motor con el que se instalan y se lanzan estas herramientas».

**NPM** es el registro y la herramienta que descarga esas piezas (React, Vite, Next.js) y las anota en un `package.json`. Si el `package.json` no está, o si nadie ha ejecutado la instalación, la demo no arranca. Eso es una dependencia de entorno, no una funcionalidad de la pantalla.

## Demostración guiada

Hay dos ventanas de la misma red de transporte. El contenido es el mismo: líneas L1 y L2, y el detalle de L1. Cambia el contrato con el navegador.

Arranque de ambas: [demos/README.md](../../demos/README.md).

1. Al abrir la página tradicional en `http://localhost:8080`, el listado ya está escrito en el HTML. El contador de cargas marca 1. El enlace «Ver detalle de L1» pide otro fichero, `detalle.html`. La pestaña recarga. El contador de ese segundo documento sube en cada visita, porque cada ida es una carga nueva. El código de esa pantalla está en [index.html](../../demos/tradicional/public/index.html) y [detalle.html](../../demos/tradicional/public/detalle.html).
2. Al abrir la SPA en `http://localhost:5173`, el documento se carga una vez. «Ver detalle» no cambia la dirección y el contador de cargas se queda en 1: no ha habido otro documento. La vista de detalle sale del mismo programa, en memoria. Ese programa está en [App.jsx](../../demos/spa/src/App.jsx).
3. Lo que esta comparación permite decidir: si el usuario entra, lee y se va, la página tradicional basta y es más simple de publicar. Si el usuario vive dentro de la herramienta (filtros, detalle, vuelta al listado, datos que cambian), la SPA evita recargar el puesto de trabajo en cada clic. El coste es otro: hay una aplicación JavaScript que construir, versionar y cargar la primera vez.

> [!NOTE]
> Las dos demos enseñan el mismo negocio a propósito. Si el contenido fuera distinto, la diferencia de comportamiento se confundiría con una diferencia de funcionalidad.
