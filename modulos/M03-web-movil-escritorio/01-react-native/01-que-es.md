# Qué es React Native

[← Página anterior](../README.md) · [Siguiente página →](02-que-no-es.md)

## La superficie

React Native construye aplicaciones para iOS y Android con el modelo de componentes que ya se ha visto, y dibuja **controles de la plataforma**, no una página web dentro de un marco. Un botón es un botón del sistema. La app se instala, aparece con icono y se publica por la tienda o por el canal interno de la empresa.

El lenguaje de las pantallas se parece al de React. El resultado no es una pestaña. No se abre con una URL pública. Se abre porque está instalada. Eso cambia el alcance: hay cuentas de tienda, revisiones, permisos del sistema (cámara, ubicación, notificaciones) y una versión que el teléfono debe actualizar.

## Qué problema de negocio cubre

Cubre el puesto que **no vive en un escritorio con navegador**. En la red, es el personal de campo: ronda, foto de un desperfecto, aviso desde el andén, consulta cuando la cobertura va y viene. Ahí importan tres cosas que una web hace peor o no hace:

- Seguir en el teléfono como herramienta propia, no como un favorito del navegador que se cierra.
- Llegar a la cámara, al GPS o a una notificación con el permiso del sistema.
- Poder guardar trabajo cuando la red falla y enviarlo después. Eso no lo regala React Native: hay que diseñarlo. Pero la app instalada es el sitio natural donde esa cola vive. Una pestaña no lo es.

## Qué se comparte con la web y qué no

Se puede compartir el criterio de componentes, a veces tipos y a veces alguna lógica. No se comparte el HTML de la portada Next.js. No se comparte `TarjetaLinea` tal cual está escrita para el navegador. Quien prometa «la misma base» tiene que decir qué ficheros viajan y cuáles se reescriben. Si la respuesta es «todo», la respuesta es falsa. Si es «el modelo de una incidencia y las reglas de validación», es creíble.

> [!NOTE]
> En este curso no se instala React Native ni se abre un emulador. Juzgarlo no exige verlo arrancar. Exige saber qué uso no cabe en las tres demos que sí arrancan.
