# Cuándo compensa

[← Página anterior](02-que-permanece.md) · [Siguiente página →](../03-react/01-la-idea.md)

## El coste que se adelanta

Una SPA cobra al principio lo que la página tradicional cobra en cada clic.

La primera visita descarga el programa: el marco, React, la lógica de pantallas, a veces mapas, gráficas y librerías que el usuario aún no ha pedido. Hasta que eso llega y se ejecuta, la herramienta no está. En un puesto de la red interna, con el programa ya en caché, el coste se paga una vez al día. En un móvil, en la calle, con la web pública, se paga en cada primer contacto, y es justo donde más duele.

Después, los clics son baratos: no rehaces el marco. Esa es la compensación. Compensa si va a haber muchos clics en la misma sesión. No compensa si va a haber uno.

## Cuándo el intercambio sale a cuenta

| Situación | ¿Compensa la SPA? | Por qué |
|-----------|-------------------|---------|
| Panel de sala, turno de horas, mismos operadores | Sí | El arranque se amortiza en el primer cuarto de hora. El resto del turno gana fluidez |
| Consulta pública de una línea desde un buscador | No como único modelo | El visitante quiere el dato ya, y el buscador también. El programa es lastre |
| Formulario que se envía una vez | Casi nunca | No hay sesión que proteger del parpadeo |
| Herramienta con filtros, selección y detalle encadenados | Sí | El estado de trabajo es el producto |
| Contenido público y, además, un área privada de operación | Partido | La parte pública puede ser documento (o Next.js). El área privada puede ser SPA. No tienen por qué ser el mismo contrato |

## Qué mirar en el presupuesto

Una SPA no es «unas páginas en JavaScript». Trae consigo:

- Un arranque y un empaquetado (en la demo, Vite). Hay versión, hay build, hay un sitio donde publicar ese paquete.
- Un estado de interfaz que alguien tiene que definir: qué se recuerda, qué se pide de nuevo, qué pasa al recargar.
- Pruebas de flujos, no solo de páginas. «El detalle abre» no basta; hace falta «volver conserva el filtro» si eso se ha prometido.
- Una política de carga: qué va en el primer paquete y qué se deja para después. Si no existe, el primer paquete crece con cada capricho.

Si el presupuesto habla de pantallas sueltas y de «maquetación», y el uso descrito es un turno entero, el presupuesto está en el modelo equivocado. Si habla de una aplicación con versión y el uso es una ficha pública, también.

## La demo, en su sitio

La SPA de este curso es pequeña a propósito: dos vistas, datos fijos, sin login, sin rutas. No demuestra un panel real. Demuestra el contrato —un documento, memoria, sin recarga— para poder compararlo con la página tradicional sin que el tamaño del producto tape el mecanismo. El coste de arranque, aquí, es bajo porque no hay mapa ni tablas enormes. En un panel de verdad ese coste hay que preguntarlo, no darlo por pequeño porque la demo haya abierto rápido en un portátil.
