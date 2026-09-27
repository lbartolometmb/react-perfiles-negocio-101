"use client";

import { useEffect, useState } from "react";

export default function PaginaCliente() {
  const [hora, setHora] = useState(null);

  useEffect(() => {
    setHora(new Date().toISOString());
  }, []);

  return (
    <>
      <header>
        <p className="marca">Next.js — cliente</p>
        <h1>Hora en el navegador</h1>
        <p>El servidor entrega la página sin la hora. El navegador la calcula al abrirse.</p>
        <nav>
          <a href="/">Inicio en el servidor</a>
          <a href="/flujo">Flujo con API</a>
        </nav>
      </header>
      <main>
        <p id="hora-cliente">
          {hora ? `Hora en el navegador: ${hora}` : "Aún no hay hora: el servidor no la ha calculado."}
        </p>
      </main>
    </>
  );
}
