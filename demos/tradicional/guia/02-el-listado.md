# El listado

[← Página anterior](01-antes-de-abrir.md) · [Siguiente página →](03-el-detalle.md)

## Qué aparece

Al abrir `http://localhost:8080/` el documento se llama «Red de transporte — página tradicional». En la página:

- Una marca: «Página tradicional».
- Un título: «Red de transporte».
- Una frase de contrato: «Cada enlace pide un documento nuevo al servidor.»
- Un contador: «Cargas de este documento en la pestaña:» seguido de un número. En la primera visita de esa pestaña es 1.
- Un buscador «Buscar línea o parada», un desplegable «Estado» y la frase «2 de 2 líneas visibles.»
- Una ficha L1, estado «en servicio», con el botón «Ver paradas» y el enlace «Ver detalle de L1».
- Una ficha L2, estado «retraso leve», con «Ver paradas» y sin enlace de detalle.
- Al final, el enlace «Ejemplos AJAX».

Nada de esto lo ha calculado un programa de interfaz después de cargar. Está en `index.html`, incluidas las paradas, que viajan en el HTML aunque empiecen ocultas. El script solo escribe el número del contador y reacciona a los controles.

## El contador, al detalle

El script hace una sola cosa: lee la clave `cargas-tradicional` de `sessionStorage`, le suma 1, la guarda y la escribe en el elemento `cargas`. `sessionStorage` vive en la pestaña. No es el servidor. No es React. Sirve para que la recarga sea visible: si el número no se moviera nunca, no habría prueba de que el documento ha vuelto a interpretarse.

Si se recarga el listado con el botón del navegador, el número sube. Sigue siendo el mismo fichero, pedido otra vez. Si se cierra la pestaña y se abre de nuevo, el almacenamiento de sesión desaparece y el contador vuelve a empezar. Eso también es información: lo que no está en el servidor no sobrevive a la pestaña.

## JavaScript dentro del documento

El listado tiene interacción, y ninguna pide nada al servidor.

**Ver paradas.** Cada ficha tiene un botón que despliega su lista (Plaza Mayor, Hospital, Estación Norte en L1; Mercado, Universidad, Puerto en L2). Al pulsarlo, el texto pasa a «Ocultar paradas» y la lista aparece. Lo que hace el script es quitar el atributo `hidden` de una `<ul>` que ya estaba en el HTML y cambiar `aria-expanded` del botón, para que un lector de pantalla sepa si está abierto.

**Buscar y Estado.** Al escribir «mercado» en el buscador, L1 desaparece y la frase pasa a «1 de 2 líneas visibles.» Si además se elige «En servicio» en el desplegable, no queda ninguna: «0 de 2 líneas visibles.» y «Ninguna línea coincide con el filtro.» La función `filtrar` compara el texto escrito con el atributo `data-texto` de cada ficha y el estado con `data-estado`, y oculta las que no coinciden.

Mientras se usan estos controles, el contador de cargas no se mueve y la dirección sigue siendo `/`. Es el mismo documento con partes que se enseñan o se esconden. Pulsar «Ver detalle de L1», en cambio, sí pide otro documento.

Al recargar, el filtro y los desplegables vuelven a su estado inicial. No se guardaron en ningún sitio: ni en la URL ni en el servidor.

## El código fuente

«Ver código fuente» del listado muestra las palabras «Línea L1» y «Línea L2» dentro del HTML. No hay un hueco vacío esperando a JavaScript. Esta es la prueba de contenido: un buscador, o una persona con el script bloqueado, sigue viendo las líneas. Pierde el contador, que es accesorio.

El enlace es un `<a href="/detalle.html">`. No es un botón con una función. La dirección es el mecanismo.

## Qué se puede afirmar aquí

- El listado es un documento completo.
- L2 demuestra que el modelo no obliga a que cada fila navegue. La navegación es un enlace puesto a mano en L1.
- Un documento tradicional puede tener interacción: desplegar, filtrar, mostrar un aviso. Eso no lo convierte en SPA. El criterio sigue siendo si cambiar de pantalla sustituye el documento.
- El contador no es una funcionalidad de negocio. Es el testigo de la carga. En una web real se quitaría; en la clase se deja porque sin él la recarga se puede discutir como impresión subjetiva.
