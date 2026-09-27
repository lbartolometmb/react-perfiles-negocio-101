# Cuándo hace falta

[← Página anterior](../02-ssr-y-ssg/cual-elegir.md) · [Siguiente página →](cuando-sobra.md)

## El criterio

Next.js hace falta cuando **alguna URL tiene que llegar como documento completo** y, a la vez, el equipo construye la interfaz con componentes React. Si no hay componentes React, una página tradicional o un generador más simple cubren el documento. Si no hay ninguna URL que deba leerse al llegar, el marco de servidor no está ganando su sitio.

Casos de la red en los que sí:

- La portada del estado del servicio, abierta desde un buscador o desde un enlace en un aviso.
- La ficha de una línea, con su propia dirección, que alguien reenvía por mensaje.
- Una campaña o una página de alteración que tiene que leerse aunque el JavaScript tarde o falle.
- Un sitio que mezcla lectura pública e interacción: el HTML trae el aviso, y el cliente añade un buscador o un mapa después.

En esos casos, «React» a secas no cierra el encargo. Cierra «React con HTML previo», y Next.js es la forma concreta que usa este curso para enseñarlo.

## Qué se pide en el encargo, además del nombre

1. La lista de URL que tienen que verse completas sin ejecutar JavaScript.
2. Para cada una, si el dato es de la visita o de la última publicación.
3. Qué parte queda explícitamente en el navegador (filtros, hora local, botones).
4. Cómo se comprueba: código fuente, no captura de pantalla una vez cargada.

Sin esa lista, Next.js es un rótulo. Con ella, se puede mirar la entrega y decir si la portada cumple.

## Relación con la SPA ya vista

La SPA sigue siendo válida al lado, para el puesto que no se comparte por URL. Un mismo equipo puede mantener las dos. Next.js no obliga a convertir el panel de sala en páginas de servidor. Obliga a no usar el panel como modelo de la web pública.

La demo lo pone en un solo proceso, puerto 3000: `/` cumple el criterio, `/cliente` lo incumple a propósito. Ver las dos evita la lectura perezosa de «todo lo que está en Next.js ya viene del servidor».
