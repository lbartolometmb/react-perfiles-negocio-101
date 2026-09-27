"use client";

import { useState } from "react";

export default function Flujo() {
  const [fase, setFase] = useState("inicial");
  const [incidencias, setIncidencias] = useState([]);

  async function pedir(modo) {
    setFase("cargando");
    setIncidencias([]);
    try {
      const respuesta = await fetch(`/api/incidencias?modo=${modo}`);
      if (!respuesta.ok) {
        throw new Error(String(respuesta.status));
      }
      const datos = await respuesta.json();
      setIncidencias(datos.incidencias);
      setFase(datos.incidencias.length === 0 ? "vacio" : "ok");
    } catch {
      setFase("error");
    }
  }

  return (
    <>
      <header>
        <p className="marca">Next.js — API</p>
        <h1>Incidencias</h1>
        <p>La pantalla pide datos y muestra carga, resultado, vacío o error.</p>
        <nav>
          <a href="/">Inicio en el servidor</a>
          <a href="/cliente">Página de cliente</a>
        </nav>
      </header>
      <main>
        <p>
          <button onClick={() => pedir("ok")}>Con datos</button>
          <button onClick={() => pedir("vacio")}>Vacío</button>
          <button onClick={() => pedir("error")}>Error</button>
          <button onClick={() => pedir("lento")}>Lento</button>
        </p>
        {fase === "inicial" ? <p id="fase">Elige un caso.</p> : null}
        {fase === "cargando" ? <p id="fase">Cargando incidencias…</p> : null}
        {fase === "vacio" ? <p id="fase">No hay incidencias abiertas.</p> : null}
        {fase === "error" ? <p id="fase">No se han podido cargar las incidencias.</p> : null}
        {fase === "ok"
          ? incidencias.map((item) => (
              <article key={item.id}>
                <h2>
                  {item.id} — {item.linea}
                </h2>
                <p>{item.texto}</p>
              </article>
            ))
          : null}
      </main>
    </>
  );
}
