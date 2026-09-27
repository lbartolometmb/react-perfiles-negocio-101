// Presentacional: pinta lo que recibe y avisa del clic. No guarda datos.
export function TarjetaLinea({ nombre, estado, onVerDetalle }) {
  return (
    <article>
      <h2>{nombre}</h2>
      <p>Estado: {estado}</p>
      {onVerDetalle ? <button onClick={onVerDetalle}>Ver detalle</button> : null}
    </article>
  );
}
