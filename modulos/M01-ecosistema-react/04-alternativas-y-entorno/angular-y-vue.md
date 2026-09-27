# Angular y Vue

[← Página anterior](../03-react/casos-y-limites.md) · [Siguiente página →](node-y-npm.md)

## El mismo problema

Angular y Vue responden a la misma necesidad que React: construir la interfaz por piezas que dependen de datos, normalmente en el navegador, a menudo como SPA. Quien no va a programar no necesita el detalle de la sintaxis. Necesita no tratarlos como mundos incomparables ni como modas sucesivas en las que la última borra a la anterior.

Los tres están en productos grandes. Los tres tienen empleo, documentación y proveedores. Ninguno gana por decreto una licitación. Gana el que ya está en la casa, o el que el equipo puede sostener, o el que encaja con un marco más cerrado o más libre según cómo se quiera gobernar el proyecto.

## En qué se distinguen, a la altura de una decisión

| | React | Angular | Vue |
|---|-------|---------|-----|
| Forma | Biblioteca de interfaz. El resto (rutas, peticiones, estructura) se elige y se suma | Marco completo. Trae estructura, formularios, enfoque de aplicación | Marco que puede usarse en una parte de una página o como aplicación entera |
| Quién lo impulsa | Comunidad amplia, origen en Meta | Google | Comunidad, origen en un autor y luego en un equipo |
| Qué se nota al entrar en un proyecto | Hay que mirar qué más han elegido además de React. Dos proyectos React pueden parecerse poco | Dos proyectos Angular se parecen más entre sí. El marco manda | Depende de cuánto del marco hayan adoptado |
| Cambio desde otro | Reescritura de la interfaz y de las costumbres del equipo | Igual | Igual |

La consecuencia práctica: **migrar** de uno a otro es un proyecto, no una preferencia. Se rehacen componentes, se rehacen pruebas, se forma a la gente y durante un tiempo conviven dos formas de construir la misma pantalla. Si el motivo es «el nuevo suena más actual» y el sistema actual cumple, el motivo es débil.

## Qué no cambia al cambiar de nombre

- Sigue haciendo falta decidir si el producto es documento o aplicación.
- Sigue haciendo falta una API si los datos no viven en la página.
- Sigue haciendo falta accesibilidad, estados de error y una forma de desplegar.
- El usuario del panel no nota el nombre. Nota si el filtro se conserva y si el error se explica.

> [!NOTE]
> En una propuesta, «mejor que Angular» o «más moderno que Vue» no es un requisito. Un requisito es: el equipo actual es de Angular; o el componente de diseño de la empresa está en React; o no hay nada y se elige uno con un criterio de contratación a cinco años. Esas tres frases se pueden discutir. «Es el que se lleva» no.

## Cómo leer una comparativa comercial

Las tablas de «rendimiento» entre los tres, sin un producto concreto, no deciden. El rendimiento lo dominan el tamaño de lo que se descarga, cómo se piden los datos y cuánto se redibuja, no el logo. Si la comparativa no habla del uso (público, sala, campo) y solo habla del marco, está contestando una pregunta que no es la de este curso.
