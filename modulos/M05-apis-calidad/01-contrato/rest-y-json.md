# REST y JSON

[← Página anterior](../README.md) · [Siguiente página →](quien-es-quien.md)

## El contrato, no la pantalla

La pantalla no es el sistema. Es un cliente. Una API es el acuerdo por el que pide o envía datos sin recibir otra página HTML. En esta demo el acuerdo es REST, en la forma mínima que basta para leerlo: una URL, un verbo y una respuesta.

La URL es `/api/incidencias`. El verbo es GET: leer, no modificar. El modo viaja en la query (`?modo=ok`, `vacio`, `error` o `lento`) para que la clase pueda forzar cada desenlace. En un sistema real el modo no lo elegiría el botón de la demo; lo decidiría el servicio. Aquí el botón existe para enseñar el contrato, no para simular una operación de sala.

La respuesta es JSON: texto estructurado, no un documento para pintar. Con datos, tiene esta forma:

```json
{
  "incidencias": [
    {
      "id": "INC-14",
      "linea": "L2",
      "texto": "Retraso de 6 minutos entre Mercado y Universidad."
    }
  ]
}
```

La pantalla lee `incidencias` y pinta un `article` por elemento. Si el JSON cambiara de forma —por ejemplo, si la lista viniera suelta y no dentro de esa clave—, la pantalla rompería aunque el servicio «siga enviando las incidencias». El contrato es la forma, no la intención.

## Qué se mira en la pestaña de red

Al pulsar un botón, la pestaña Red del navegador muestra la petición: método GET, la URL con el modo, el código de respuesta y el cuerpo. Esa pestaña es la prueba. Lo que la página acaba mostrando es la interpretación. Las dos tienen que cuadrar. Si la red dice 500 y la página dice «no hay incidencias», la interpretación está mal. Si la red dice 200 con lista vacía y la página dice que ha fallado, también.

> [!NOTE]
> Abrir `/api/incidencias?modo=ok` en una pestaña aparte enseña el JSON sin la cabecera de la aplicación. Es la forma más limpia de ver que la API no es una pantalla. Luego se vuelve a `/flujo` para ver la misma respuesta interpretada.
