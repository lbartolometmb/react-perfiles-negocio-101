# La idea

[← Página anterior](../02-spa/cuando-compensa.md) · [Siguiente página →](que-no-es.md)

## La pantalla sigue a los datos

React parte de una frase operativa: **la interfaz es una función de los datos**. Si el dato de L2 es «retraso leve», la pantalla dice «retraso leve». No hay un letrero que alguien actualice a mano en paralelo. Cuando el dato cambia, se vuelve a calcular el trozo de pantalla que depende de él.

Eso cambia la pregunta que se le hace a un proyecto. La pregunta deja de ser «¿cómo está maquetada esta caja?» y pasa a ser «¿de qué dato sale esta caja, y quién lo modifica?». Si nadie sabe responder, la pantalla y el negocio se van a desincronizar: el operador verá un estado y el sistema tendrá otro.

Un **componente** es la unidad con la que se escribe esa función. `TarjetaLinea` sabe pintar un nombre y un estado. No sabe cuántas líneas hay. Quien la usa se lo dice, una vez por línea. Dos tarjetas no son dos diseños copiados: son la misma función con datos distintos.

## Por qué se construye así

Sin componentes, cada pantalla es un documento único. El listado y el detalle repiten cabeceras, estados y estilos. Un cambio de redacción («en servicio» pasa a llamarse «operativa») se busca en varios sitios y se olvida en uno.

Con componentes, el cambio de redacción vive en un sitio si el texto sale del dato, o en la pieza si es un rótulo fijo. El listado y cualquier otra futura pantalla que muestre una línea heredan el mismo criterio visual. Eso es lo que una propuesta quiere decir, cuando es seria, con «componentes reutilizables»: no que haya un catálogo bonito, sino que un cambio de significado no se persigue por diez pantallas.

React no obliga a hacerlo bien. Se puede tener un componente gigante que es la aplicación entera. La idea está disponible; la disciplina es del proyecto. En la lectura de una entrega, la señal sana es poder señalar la pieza y el dato por separado. La señal de alerta es un fichero donde se mezclan colores, reglas de negocio y llamadas al servidor sin frontera.

## Qué se ve en la demo

En la SPA, L1 y L2 pasan por la misma pieza. L1 recibe además una acción («ver detalle») y L2 no. La diferencia no está copiada como dos HTML distintos. Está en los datos y en la decisión de quien compone la lista. Esa es la idea de React en una pantalla pequeña, sin más teoría de la necesaria.

La página tradicional no tiene esta pieza. Tiene dos bloques escritos en el documento. Cambiar el rótulo de las dos líneas obliga a tocar los dos bloques, o a generar el HTML desde una plantilla en el servidor. Las plantillas de servidor también evitan la copia; React no es el único modo de no repetirse. Es el modo que usa el navegador (o un marco como Next.js) para recalcular la interfaz cuando los datos cambian **sin** pedir otro documento.

## Qué preguntar

- ¿El texto que veo sale de un dato o está clavado en cada pantalla?
- Si el nombre de un estado de servicio cambia, ¿cuántos sitios hay que tocar?
- ¿Puedo señalar el componente que pinta una línea, separado del sitio que decide qué líneas hay?
