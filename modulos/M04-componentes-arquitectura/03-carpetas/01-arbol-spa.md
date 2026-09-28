# Árbol de la SPA

[← Página anterior](../02-responsabilidades/03-lectura-de-la-spa.md) · [Siguiente página →](02-arbol-next.md)

## Mapa

La SPA es un proyecto React pequeño, arrancado con Vite. Las carpetas dicen el oficio de cada fichero.

| Ruta | Qué es |
|------|--------|
| `demos/spa/index.html` | El único documento. Un hueco `#root` |
| `demos/spa/src/main.jsx` | Arranque: mete `App` en el hueco, carga el CSS |
| `demos/spa/src/App.jsx` | Estado de la pantalla y composición |
| `demos/spa/src/components/TarjetaLinea.jsx` | Pieza presentacional |
| `demos/spa/src/datos.js` | Datos fijos |
| `demos/spa/src/estilos.css` | Aspecto, cabecera verde oscura |
| `demos/spa/package.json` | Dependencias y comando de arranque |
| `demos/spa/vite.config.js` | Puerto 5173, accesible en la red del contenedor |

No hay carpeta `api`. No hay carpeta por cada URL. No puede haberla: la aplicación no tiene URLs de vista. Buscar `detalle.html` aquí es buscar el modelo tradicional en el sitio equivocado.

## Cómo se usa el mapa en una revisión

Se entra por la pregunta, no por arriba del árbol.

- «¿Dónde está el texto de L1?» → `datos.js`.
- «¿Quién decide el botón?» → `App.jsx`.
- «¿Por qué el fuente de la página va vacío?» → `index.html` solo tiene el hueco, y `main.jsx` lo llena después.
- «¿Qué hay que instalar?» → `package.json`. Si en una entrega el mapa no cabe en una lista como esta, la estructura no está contada y el coste de entrar en el proyecto es el primer riesgo.

`node_modules` no forma parte del mapa. Es el resultado de instalar. No se revisa línea a línea ni se edita. Si algo falla por una dependencia, se mira la declaración, se reinstala, y no se «arregla» dentro de esa carpeta.
