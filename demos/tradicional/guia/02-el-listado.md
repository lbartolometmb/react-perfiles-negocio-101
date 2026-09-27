# El listado

[← Página anterior](01-antes-de-abrir.md) · [Siguiente página →](03-el-detalle.md)

## Qué aparece

Al abrir `http://localhost:8080/` el documento se llama «Red de transporte — página tradicional». En la página:

- Una marca: «Página tradicional».
- Un título: «Red de transporte».
- Una frase de contrato: «Cada enlace pide un documento nuevo al servidor.»
- Un contador: «Cargas de este documento en la pestaña:» seguido de un número. En la primera visita de esa pestaña es 1.
- Una ficha L1, estado «en servicio», con el enlace «Ver detalle de L1».
- Una ficha L2, estado «retraso leve», sin enlace.

Nada de esto lo ha calculado un programa de interfaz después de cargar. Está en `index.html` salvo el número del contador, que un script corto escribe al terminar de leer el documento.

## El contador, al detalle

El script hace una sola cosa: lee la clave `cargas-tradicional` de `sessionStorage`, le suma 1, la guarda y la escribe en el elemento `cargas`. `sessionStorage` vive en la pestaña. No es el servidor. No es React. Sirve para que la recarga sea visible: si el número no se moviera nunca, no habría prueba de que el documento ha vuelto a interpretarse.

Si se recarga el listado con el botón del navegador, el número sube. Sigue siendo el mismo fichero, pedido otra vez. Si se cierra la pestaña y se abre de nuevo, el almacenamiento de sesión desaparece y el contador vuelve a empezar. Eso también es información: lo que no está en el servidor no sobrevive a la pestaña.

## El código fuente

«Ver código fuente» del listado muestra las palabras «Línea L1» y «Línea L2» dentro del HTML. No hay un hueco vacío esperando a JavaScript. Esta es la prueba de contenido: un buscador, o una persona con el script bloqueado, sigue viendo las líneas. Pierde el contador, que es accesorio.

El enlace es un `<a href="/detalle.html">`. No es un botón con una función. La dirección es el mecanismo.

## Qué se puede afirmar aquí

- El listado es un documento completo.
- L2 demuestra que el modelo no obliga a que cada fila navegue. La navegación es un enlace puesto a mano en L1.
- El contador no es una funcionalidad de negocio. Es el testigo de la carga. En una web real se quitaría; en la clase se deja porque sin él la recarga se puede discutir como impresión subjetiva.
