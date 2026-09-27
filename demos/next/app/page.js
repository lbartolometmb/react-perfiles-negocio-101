import { TarjetaLinea } from "./components/TarjetaLinea";

export const dynamic = "force-dynamic";

const lineas = [
  { id: "L1", nombre: "Línea L1", estado: "en servicio" },
  { id: "L2", nombre: "Línea L2", estado: "retraso leve" },
];

export default function Page() {
  const generada = new Date().toISOString();

  return (
    <>
      <header>
        <p className="marca">Next.js — servidor</p>
        <h1>Red de transporte</h1>
        <p>Esta hora ya viaja dentro del HTML. No espera al navegador.</p>
        <nav>
          <a href="/cliente">Página de cliente</a>
          <a href="/flujo">Flujo con API</a>
        </nav>
      </header>
      <main>
        <p>
          Generada en el servidor: <strong id="hora-servidor">{generada}</strong>
        </p>
        {lineas.map((linea) => (
          <TarjetaLinea key={linea.id} nombre={linea.nombre} estado={linea.estado} />
        ))}
      </main>
    </>
  );
}
