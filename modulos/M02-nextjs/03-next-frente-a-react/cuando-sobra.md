# Cuándo sobra

[← Página anterior](cuando-hace-falta.md) · [Siguiente página →](como-leerlo.md)

## Dónde no paga

Next.js sobra cuando ninguna de sus aportaciones se usa:

- No hay URL pública que indexar.
- No hace falta que el primer HTML traiga el dato.
- El producto es una sesión larga tras identificarse: el coste de arranque se paga una vez por turno, no una vez por aviso.
- El equipo ya tiene un servidor que genera HTML en otro lenguaje, y meter Next.js solo duplica la forma de producir páginas.

También sobra como respuesta a «que sea moderno», «que sea React pero bien», o «lo piden todos los proveedores». Esas frases no nombran una URL.

El panel de incidencias de sala es el ejemplo. Puede vivir en la SPA del módulo anterior. Puede vivir también como ruta de cliente dentro de un proyecto Next.js, que es lo que hace `/flujo` en la demo: el marco está, y la pantalla pide los datos después. Las dos cosas son defendibles. Lo que no es defendible es exigir Next.js para que el filtro del operador «sea más profesional». El filtro no mejora por el marco. Mejora si conserva el contexto, si distingue vacío de error y si no bloquea el puesto.

## Coste de ponerlo igual

Un marco de más es una versión que actualizar, un modo de construir (`build`) y un modo de servir (`start`) que alguien tiene que saber operar. En esta demo, Next.js no se enseña con el servidor de desarrollo: se construye y se sirve en producción, porque esa es la forma estable de ver el HTML real. Ese detalle de operación —hay un paso de construcción— es parte del coste. Una SPA con Vite también se construye para publicarse; en local se puede mirar en caliente. Quien encargue Next.js está encargando ese ciclo, no solo una biblioteca de interfaz.

Si el proveedor lo trae y el equipo interno no va a tocarlo, el coste no desaparece: se traslada a la dependencia. Dentro de dos años alguien tiene que poder decir si la portada se regenera en la visita o está congelada. Si nadie puede, el marco está de más aunque el primer día se viera bien.

## La frontera práctica

| Se oye | Lectura |
|--------|---------|
| «El panel interno irá en Next.js» | Aceptable si el mismo proyecto ya tiene la web pública y se quiere un solo repositorio. No es un requisito del panel |
| «La web pública irá en React, sin más» | Preguntar por el HTML de la ficha |
| «Next.js y además una SPA suelta y además la web vieja» | Tres formas de publicar. Pedir cuál es la que vale para cada URL, y cuál se apaga |
