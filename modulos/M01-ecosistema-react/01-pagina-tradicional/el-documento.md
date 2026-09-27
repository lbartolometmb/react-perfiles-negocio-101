# El documento

[← Página anterior](../README.md) · [Siguiente página →](que-pasa-al-pulsar.md)

## Qué es una página tradicional

Una página tradicional es un **documento**. El servidor guarda, o fabrica, un HTML completo: títulos, párrafos, enlaces, y a menudo los datos ya escritos dentro. El navegador lo descarga y lo pinta. No hay una aplicación residente que «siga viva» entre una pantalla y la siguiente. Hay una sucesión de documentos.

En la red de transporte, el listado de líneas puede ser exactamente eso: un HTML donde L1 y L2 ya figuran como texto. Quien abre la dirección recibe el listado. No espera a que un programa lo construya después.

Esto no es una tecnología antigua. Es un contrato:

- La unidad de publicación es la página.
- La unidad de lectura es el documento que ha llegado.
- Lo que no está en ese documento, no está en esa visita.

Un aviso de servicio, una ficha de línea, una noticia, un PDF enlazado, una página de horarios que cambia poco: encajan en ese contrato. El lector entra, lee y se va. No necesita que la herramienta recuerde en qué filtro estaba hace diez minutos.

## Qué contiene el documento y qué no

Un HTML de este tipo suele llevar:

- La estructura visible: encabezado, listado, ficha.
- Los enlaces a otros documentos (`detalle.html`, otra URL).
- Estilos, para que se lea con una jerarquía clara.
- A veces un poco de JavaScript auxiliar: contar visitas de esa pestaña, abrir un menú, validar un formulario. Ese JavaScript no convierte la página en una aplicación. Ayuda al documento.

Lo que no lleva, por definición de este modelo, es un estado de trabajo que sobreviva al cambio de documento. Al ir al detalle, el listado deja de existir en memoria. Si se vuelve, se pide otra vez. Cualquier contador, scroll o selección que no se haya guardado en otro sitio (la propia dirección, una cookie, el servidor) se pierde.

> [!NOTE]
> Que una página use JavaScript no la convierte en SPA. El criterio no es «lleva script». El criterio es si el cambio de pantalla sustituye el documento o solo cambia un trozo dentro del mismo documento.

## Cómo se reconoce al mirarla

Tres pruebas, sin abrir el código:

1. Cada enlace importante cambia la dirección y el navegador muestra una carga (el indicador de la pestaña, un parpadeo, el título del documento que cambia porque es otro fichero).
2. «Ver código fuente» muestra el contenido de negocio ya escrito: los nombres de las líneas, no un `div` vacío.
3. Si se desactiva JavaScript, el listado y el enlace siguen ahí. Puede perderse un contador o un adorno. No se pierde la información.

En la demo tradicional esas tres pruebas se cumplen. El listado está en el HTML. El detalle es otro fichero. El script solo incrementa un contador de cargas en `sessionStorage`; no pinta las líneas.

## Qué implica para quien encarga el trabajo

Publicar documentos es un oficio conocido: plantillas, un CMS, caché, una URL por contenido. El coste de una ficha nueva se parece al coste de una página, no al de una versión de aplicación. El riesgo también es distinto: un error rompe una página, no una sesión entera de un puesto de operador.

La limitación aparece cuando el trabajo deja de ser «leer un documento» y pasa a ser «operar durante un turno»: filtrar, abrir, volver, actualizar un dato que acaba de cambiar, tener tres estados de la misma vista. Ahí el modelo de documentos se fuerza. Cada gesto pide otro HTML, el puesto parpadea y el servidor rehace pantallas que el usuario ya tenía delante.

Esa frontera —leer frente a operar— es la que el módulo siguiente cruza con la SPA. No se cruza porque React exista. Se cruza porque el uso ya no cabe en una sucesión de documentos.
