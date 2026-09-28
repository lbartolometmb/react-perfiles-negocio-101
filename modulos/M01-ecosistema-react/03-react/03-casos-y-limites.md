# Casos y límites

[← Página anterior](02-que-no-es.md) · [Siguiente página →](../04-alternativas-y-entorno/01-angular-y-vue.md)

## Dónde aparece de verdad

React encaja cuando la interfaz tiene **mucho estado y muchas piezas repetidas**:

- Un panel donde cada línea, cada incidencia y cada andén es la misma pieza con datos distintos, y esos datos cambian durante el turno.
- Un asistente de varios pasos en el que el paso 3 depende de lo elegido en el 1, sin que cada paso sea un documento nuevo.
- Una ficha rica (mapa + lista + detalle) que debe actualizarse por partes.
- Un design system de la organización: botones, tablas, estados vacíos, que se quieren iguales en varios productos. React es una forma habitual de construirlo; no la única.

En la red de transporte, el panel de sala es el caso claro. La web pública del aviso es un caso peor si se queda solo en React de navegador: el aviso tiene que estar en el HTML. Ahí el encaje es Next.js, que sigue usando React pero cambia el contrato de entrega. Conviene decir las dos frases, no solo «usamos React».

## Dónde se fuerza

- Un sitio de pocas páginas estables, con buen SEO y poco interacción. El componente no aporta y el arranque resta.
- Un informe que es una tabla que se exporta. La interfaz no es el producto; el dato sí.
- Un equipo que no va a tocar el front y pide React «para que quede moderno». El resultado es una maqueta cara o un proveedor eterno.
- Una necesidad de hardware (torno, impresora fiscal, sensor del vehículo) presentada como pantalla React. La pantalla será lo de menos; el proyecto es la integración.

## Límites que hay que pactar al encargarlo

1. **Quién es dueño de los componentes** cuando haya más de un proveedor. Si cada uno trae su botón, no hay sistema de diseño: hay una colección.
2. **Hasta dónde llega la primera entrega.** Un listado con datos fijos, como la demo, no es un panel conectado. El salto a la API cambia el producto: aparecen carga, vacío y error.
3. **Qué pasa al recargar.** Si el detalle debe sobrevivir, tiene que estar en la URL o en el servidor. React no lo hace solo.
4. **Versión y abandono.** React se actualiza. Un proyecto que congela la versión cinco años necesita un plan, no una esperanza. No es distinto de otros marcos; sí es distinto de un HTML que no depende de un ecosistema.

## Cómo cerrar el juicio

React es una buena elección cuando el problema es la interfaz viva y el equipo puede vivir en ese ecosistema. Es una mala etiqueta cuando se usa para no decidir si el producto es un documento, un panel, una app de campo o un puesto de estación. Esas cuatro cosas pueden compartir la palabra React y no compartir casi nada más. El resto del curso separa esas cuatro.
