# Cómo elegir

[← Página anterior](02-ionic-native-electron.md) · [Siguiente página →](../C08-casos/README.md)

Se elige por el sitio de la persona y por lo que el dispositivo tiene que poder hacer. El nombre de la tecnología llega el tercero.

## Si le basta un navegador

La tarea se hace en un enlace, dentro de la red de la casa o en un móvil con Chrome o Safari. No hay React Native ni Electron ni Ionic todavía. Hay la web del resto del curso, con o sin marco. Muchas «apps» que se piden en una primera reunión acaban aquí cuando se mira la tarea de verdad: consultar un estado, filtrar una lista, abrir un detalle.

## Si el teléfono es el lugar de trabajo

Hace falta icono, uso con una mano, quizá la cámara o un aviso que llegue con la pantalla bloqueada. Si la interfaz puede ser la de la web y el requisito es de distribución, Ionic es una hipótesis seria. Si la interfaz tiene que sentarse con las apps del sistema y el móvil es el producto principal, React Native es la hipótesis seria. Las dos pueden ser ciertas en productos distintos de la misma casa. Juntas en la misma frase, sin decir cuál pinta, son una alerta.

## Si el puesto es fijo

Varias pantallas, ficheros, un periférico, una sala donde el navegador está capado o donde la herramienta no puede parecer «una pestaña más». Electron entra en la conversación. También entra el coste: instalador, actualizaciones, peso, permisos. Si ninguno de esos requisitos es real, el navegador sigue ganando.

Un caso completo se lee como un reparto, no como un ganador. La ficha pública en la web. El panel del operador en un navegador de escritorio o, si el puesto lo exige, en Electron. La consulta rápida de quien está en vía, en Ionic o en React Native según el grado de oficio móvil. La idea de la fila es la misma en los tres sitios. La superficie, no.

## Qué preguntar

- ¿Qué falla si mañana esto es solo una dirección web?
- ¿Qué capacidad del dispositivo está en el requisito, con nombre?
- ¿Quién actualiza el programa el día que cambie el contrato del JSON?
