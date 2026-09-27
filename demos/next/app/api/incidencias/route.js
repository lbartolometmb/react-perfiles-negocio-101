const incidencias = [
  { id: "INC-14", linea: "L2", texto: "Retraso de 6 minutos entre Mercado y Universidad." },
  { id: "INC-15", linea: "L1", texto: "Andén norte con acceso alternativo." },
];

export async function GET(request) {
  const modo = new URL(request.url).searchParams.get("modo") || "ok";

  if (modo === "lento") {
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  if (modo === "error") {
    return Response.json({ error: "servicio no disponible" }, { status: 500 });
  }

  if (modo === "vacio") {
    return Response.json({ incidencias: [] });
  }

  return Response.json({ incidencias });
}
