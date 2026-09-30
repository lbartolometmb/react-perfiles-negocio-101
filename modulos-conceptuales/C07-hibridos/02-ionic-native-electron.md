# Ionic, React Native y Electron

[← Página anterior](01-la-misma-idea.md) · [Siguiente página →](03-como-elegir.md)

Tres nombres, tres contratos con el dispositivo. Conviene poder decir cada uno en dos frases, y poder oír cuándo una propuesta los mezcla.

## Ionic

Ionic construye la interfaz con tecnología web —con React, si ese es el pegamento— y la empaqueta para que viva como aplicación, en el teléfono y a menudo también en el navegador. Un puente (Capacitor es el habitual) abre algunas capacidades del dispositivo: cámara, ficheros, notificaciones.

La persona instala un icono. Por dentro sigue siendo la web, con aspecto de aplicación si el equipo usa los controles de Ionic. El reaprovechamiento con la web de la casa es alto. El techo aparece cuando se exige el gesto, la fluidez o una API muy propia del sistema operativo. Prometer «nativo» aquí es prometer de más. Prometer «una sola interfaz para el móvil y la web, empaquetada» es justo.

## React Native

React Native toma la idea de React —piezas, props, estado, la visita— y la dibuja con controles del propio teléfono, no con una página web metida en un marco. `FilaLinea` se piensa igual. Se escribe con otras piezas (`View`, `Text`, listas nativas) y sin el CSS de la web.

Se comparte criterio y, con disciplina, parte de la lógica que no toca la pantalla. No se comparte el dibujo. El resultado puede publicarse en las tiendas y sentarse al lado de las aplicaciones del sistema. El coste es un segundo oficio de interfaz, más el de cada plataforma. Se pide cuando el móvil es el producto, no un acceso ocasional a la web.

## Electron

Electron hace un programa de escritorio con un navegador dentro, más permiso para hablar con el ordenador: ficheros locales, varias ventanas, una bandeja, impresoras, un puesto que no depende de que el navegador corporativo deje pasar la herramienta.

La interfaz puede ser la misma React de la web. El entorno es otro: se instala, se actualiza como programa, pesa como programa y se revisa como programa. Encaja en un puesto fijo, en una sala de control, en una herramienta que necesita el disco. Sobra cuando la tarea era abrir una dirección: entonces el navegador ya era el producto, y Electron añade un ciclo de instalación para nada.

## Los tres al lado

| | Ionic | React Native | Electron |
|---|---|---|---|
| Superficie | Icono de app que contiene la web | App con controles del teléfono | Programa de escritorio |
| Qué se reaprovecha | Casi toda la interfaz web | La idea y parte de la lógica | La interfaz web, más acceso al ordenador |
| Promesa justa | Una UI empaquetada en varias tiendas y en el navegador | App del teléfono, con oficio propio | Puesto fijo o integración con la máquina |
| Promesa de más | «Es nativa» | «Es la misma web» | «Es solo un acceso rápido a la URL» |

## Qué preguntar

- ¿El icono abre una web empaquetada o controles del sistema?
- ¿Hace falta el disco, la bandeja o un periférico del puesto?
- ¿La tienda de aplicaciones es un requisito del negocio o un adorno de la frase?
