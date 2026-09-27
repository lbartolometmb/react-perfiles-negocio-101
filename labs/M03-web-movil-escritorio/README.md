# M03 — Web, móvil y escritorio

[← Página anterior](../M02-nextjs/README.md) · [Siguiente página →](../M04-componentes-arquitectura/README.md)

> [!NOTE]
> **Cómo funciona este módulo.** La teoría compara tres formas de salir del navegador de escritorio. El cierre es un caso: elegir superficie según la necesidad, no según el nombre de la herramienta. No hay una app de móvil ni de escritorio que arrancar.

## Qué aprenderás

- Situar React Native, Electron e Ionic: qué dispositivo cubre cada uno y qué no cubre.
- Separar «una sola base tecnológica» de «una sola experiencia». Compartir código no es compartir calidad.
- Elegir web, móvil o escritorio con un criterio de uso, de tienda de aplicaciones y de acceso al dispositivo.

## Teoría

React no está atado a una pestaña de navegador. El mismo lenguaje de componentes se usa como base en otras superficies. La base común es una ventaja de equipo (una forma de construir pantallas). No es una garantía de que el producto se sienta nativo ni de que salga más barato.

### Móvil: React Native

React Native dibuja controles del sistema (iOS y Android) a partir de componentes. No es una web metida en un marco. Llega a la tienda de aplicaciones como app propia.

| A favor | En contra |
|---------|-----------|
| Una base de pantallas para iOS y Android | No es «escribir la web y ya está en el móvil» |
| Acceso a cámara, notificaciones, GPS, con módulos | Esas capacidades dependen de librerías y de permisos |
| Tiene sentido si hay un equipo que ya piensa en componentes React | El pulido fino de cada plataforma sigue costando |

Encaja cuando el puesto de trabajo está en la calle o en el andén: consulta fuera de cobertura estable, notificación, cámara. No encaja si el único requisito es «que se vea bien en el móvil»: eso es una web responsive.

### Escritorio: Electron

Electron empaqueta una aplicación web dentro de un ejecutable de escritorio (es el camino de muchas herramientas de empresa que se instalan como programa). Lleva consigo un navegador. El usuario abre un icono, no una URL.

| A favor | En contra |
|---------|-----------|
| Se instala, se actualiza y puede vivir fuera del navegador corporativo | El paquete pesa: incluye el motor de navegador |
| Puede hablar con ficheros e impresoras del puesto | Consume más memoria que un programa nativo |
| Reutiliza la interfaz web | No es la vía si el requisito es ligereza o un puesto muy cerrado |

Encaja en un puesto fijo de estación, una taquilla o un operador que no debe «buscar la URL». No encaja como sustituto de una web pública.

### Híbrido web: Ionic

Ionic construye la app con tecnologías web y la envuelve para instalarla o para servirla como web. La interfaz es HTML. En el dispositivo, un contenedor (a menudo Capacitor) abre el puente con la cámara o el GPS.

| A favor | En contra |
|---------|-----------|
| La misma interfaz sirve en el navegador y, empaquetada, en el móvil | La sensación es de web, no de app del sistema |
| El equipo que ya hace web aprovecha ese oficio | Animaciones, gestos y acceso al hardware se quedan por detrás de lo nativo |
| Útil si el producto debe existir como URL y también como icono | Si la app es el producto principal y el hardware importa, se queda corta |

> [!NOTE]
> «Híbrido» aquí no significa «un poco de cada cosa y mejor». Significa interfaz web dentro de un envoltorio. React Native no es híbrido en ese sentido: dibuja controles de la plataforma. Electron tampoco: es escritorio. Mezclar los tres nombres en una propuesta es una señal para pedir un párrafo que diga dónde corre cada pantalla.

### Comparativa

| Necesidad | Superficie | Base habitual |
|-----------|------------|----------------|
| Cualquiera con un navegador, incluida la búsqueda | Web | React o Next.js |
| Icono en el teléfono, tienda, sensores, trabajo de campo | Móvil | React Native, o Ionic si la prioridad es reutilizar la web |
| Programa instalado en un PC de puesto fijo | Escritorio | Electron, o simplemente el navegador si no hace falta instalar |
| Se ve bien al estrechar la ventana | Sigue siendo web | Una web responsive. No hace falta una app |

## Caso guiado — elegir tecnología

Una red de transporte quiere cuatro cosas a la vez. No son un solo producto.

| Pieza | Quién la usa | Dónde está | Qué debe poder hacer | Enfoque que encaja | Por qué no el otro |
|-------|----------------|------------|----------------------|--------------------|--------------------|
| Estado del servicio, público | Cualquier persona | Navegador, también desde el móvil | Leerse al instante y encontrarse en un buscador | Next.js | Una SPA deja el aviso fuera del HTML. Una app de tienda obliga a instalar para leer un aviso |
| Panel de incidencias | Personal de sala | Navegador, turno largo | Filtrar, abrir detalle, ver carga y error | React en el cliente | Next.js no sobra, pero no es el problema. Electron obliga a instalar un puesto que ya tiene navegador |
| Ronda de inspección | Personal de campo | Teléfono, a veces con mala cobertura | Foto, aviso, cola si no hay red | React Native | Una web se queda corta con la cámara y con la falta de red. Ionic solo si el equipo no puede mantener una app y acepta una experiencia web |
| Puesto de información en estación | Pantalla fija, sin que el público navegue | PC dedicado | Abrir siempre la misma vista, a pantalla completa | Electron, o un navegador en modo quiosco | React Native no es de escritorio. Una URL suelta se cierra o se cambia si nadie bloquea el puesto |

La decisión no es «usamos React para todo». Es: React (y Next.js) en la web, otra superficie solo donde el navegador no llega, y un equipo capaz de mantener esa superficie. Si la propuesta dice «una base única» y luego lista tiendas, permisos de cámara y un ejecutable de escritorio, son tres productos con una familia común, no uno.
