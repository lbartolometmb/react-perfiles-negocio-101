# Cuándo pedirlo

[← Página anterior](02-que-no-es.md) · [Siguiente página →](../02-electron/01-que-es.md)

## Pedirlo

React Native se pide cuando se cumplen a la vez:

1. El uso es un teléfono o una tableta, en la mano, no un navegador de escritorio.
2. Hace falta instalación: icono, notificación, o seguir abierto como herramienta.
3. Hace falta algo del dispositivo que la web no cubre con la calidad exigida: cámara de forma continua, trabajo offline serio, integración con el sistema.
4. Hay quien lo mantenga. Un equipo que solo ha hecho la web va a aprender otra superficie, aunque el vocabulario de componentes le suene.

La ronda de inspección encaja. El viajero que mira si L2 va con retraso, no.

## No pedirlo

- «Para que se vea en el móvil.» Responsive.
- «Para estar en la tienda» como objetivo de marca, sin un uso que la tienda mejore. La tienda es un canal con fricción (descarga, permisos, actualizaciones). Se justifica si el uso es repetido. No si es un vistazo al mes.
- «Porque el panel ya está en React.» El panel no se convierte. Como mucho se comparte contrato de datos.

## Cómo dejarlo en el encargo

Una frase de uso, no de tecnología: «La persona de campo fotografía el desperfecto, guarda el parte si no hay red y lo envía al volver la cobertura. El viajero no usa esta app.» A partir de ahí React Native es una implementación posible. Si la frase no se puede escribir sin hablar de la tienda, el encargo está al revés.

Preguntas que cierran el alcance antes de construir:

- ¿Qué ocurre con un parte a medias si se acaba la batería?
- ¿Qué permisos se piden, y qué pantalla queda si se niegan?
- ¿Qué versión mínima del sistema se soporta?
- ¿La misma API del panel sirve, o el campo necesita un contrato más corto?

Si esas preguntas no tienen dueño, pedir React Native adelanta la herramienta y deja el uso sin cerrar.
