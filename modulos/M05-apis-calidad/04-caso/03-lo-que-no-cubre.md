# Lo que no cubre

[← Página anterior](02-riesgos.md) · [Siguiente página →](../../../demos/next/guia/flujo/01-antes-de-pulsar.md)

## Fuera de estas demos, a propósito

- **Acceso.** Nadie inicia sesión. Cualquier URL se abre. En un panel real es inaceptable, y no se arregla ocultando el enlace.
- **Escritura.** No se crea una incidencia. Solo se lee. Un alta tiene validación, permisos y un desenlace de «no se ha podido guardar» que esta guía no enseña.
- **Tiempo real.** No hay canal abierto. Hay botones.
- **Pruebas automáticas.** La comprobación es la guía, hecha por una persona. Repetible, y no automática.
- **React Native, Electron, Ionic.** No hay proyecto que arrancar. El caso dice cuándo se pedirían.
- **Datos de una red real.** Los nombres, las frecuencias y las incidencias son de ejemplo. No describen un servicio concreto.
- **Versiones y despliegue.** Se sabe que Next.js se sirve construido y que Node hace falta para arrancar. No hay un entorno de producción de la empresa.

Nombrarlos evita que el silencio parezca cobertura. Una propuesta que prometa alguno de estos puntos no puede usar la demo como evidencia de que ya está hecho.

## Qué sí queda cubierto

Queda cubierto el criterio para leer lo que sí se ha construido: documento frente a SPA, HTML de servidor frente a hora de cliente, pieza presentacional frente a estado, y los cuatro desenlaces de una lectura. Con eso se puede devolver una propuesta o seguir una entrega sin confundir el nombre del marco con el uso.

La guía que sigue baja a `/flujo` y comprueba, botón a botón, las frases que este módulo ha dado por ciertas.
