# Una lectura corta

[← Página anterior](04-cuando-cambia-un-dato.md) · [Siguiente página →](../C03-arquitectura/README.md)

Esta es la única página del recorrido con código. No hay que escribirlo. Hay que reconocer las piezas del boceto dentro de unas pocas líneas. Si un día te sientan delante de un fichero, el gesto es el mismo: buscar la pieza, las props y el recuerdo.

## La fila que solo pinta

```jsx
function FilaLinea({ nombre, estado }) {
  return (
    <li>
      <strong>{nombre}</strong>
      <span>{estado}</span>
    </li>
  );
}
```

`FilaLinea` es la caja ámbar del boceto. `{ nombre, estado }` son las props: llegan desde fuera. Lo que hay dentro de `return` es la descripción de la fila. Con `nombre` en `"L2"` y `estado` en `"Retraso leve"`, la pantalla enseña esas dos palabras. La función no pregunta cuántas líneas hay ni de dónde salió el estado.

Si vieras el color del texto decidido aquí a partir de `estado`, seguiría siendo la misma pieza: la regla visual vive con la fila. Si vieras aquí la llamada al servidor, la pieza habría dejado de ser solo una fila.

## El panel que recuerda

```jsx
function PanelServicio({ lineas }) {
  const [texto, setTexto] = useState("");

  const visibles = lineas.filter((linea) =>
    linea.nombre.toLowerCase().includes(texto.toLowerCase())
  );

  return (
    <section>
      <BarraBusqueda texto={texto} alEscribir={setTexto} />
      <ListaLineas lineas={visibles} />
    </section>
  );
}
```

Léelo en el orden del esquema de props:

- `lineas` entra desde fuera. El panel no se las inventa.
- `useState("")` es el recuerdo del texto. Empieza vacío. `setTexto` es la forma de cambiarlo. Ese es el estado mínimo de esta versión (la casilla iría al lado, con otro recuerdo).
- `visibles` no se guarda. Se calcula filtrando `lineas` con `texto`. Es el paso 3: lo que se puede derivar, no es estado.
- `BarraBusqueda` recibe el texto y el aviso `alEscribir`. Cuando la persona escribe, el aviso actualiza el recuerdo y el panel se vuelve a describir.
- `ListaLineas` recibe ya la lista filtrada. No conoce el texto.

`useState` es un hook: el enchufe con el que una pieza recuerda. En el fichero real llega con un import desde React; aquí se omite para quedarnos con el gesto. En la página de la visita de una pieza aparecen los otros nombres que verás al lado.

## Qué preguntar delante de un fichero

- ¿Dónde está la pieza que corresponde a la caja del boceto?
- ¿Qué le llega (props) y qué recuerda (`useState`)?
- ¿Hay un dato calculado que, además, esté guardado?
