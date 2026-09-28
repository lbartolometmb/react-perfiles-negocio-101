const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "public");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

const incidencias = [
  { id: "INC-14", linea: "L2", texto: "Retraso de 6 minutos entre Mercado y Universidad." },
  { id: "INC-15", linea: "L1", texto: "Andén norte con acceso alternativo." },
];

function escapar(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function enviar(res, status, type, cuerpo) {
  res.writeHead(status, { "Content-Type": type });
  res.end(cuerpo);
}

function enviarJson(res, status, cuerpo) {
  enviar(res, status, "application/json; charset=utf-8", JSON.stringify(cuerpo));
}

function enviarHtml(res, status, cuerpo) {
  enviar(res, status, "text/html; charset=utf-8", cuerpo);
}

function seleccionar(modo, linea) {
  if (modo === "vacio") {
    return [];
  }
  if (linea) {
    return incidencias.filter((item) => item.linea === linea);
  }
  return incidencias;
}

function fragmentoIncidencias(lista) {
  const hora = new Date().toISOString();
  if (lista.length === 0) {
    return `<p>No hay incidencias abiertas.</p>\n<p class="sello">HTML compuesto en el servidor a las ${hora}.</p>\n`;
  }
  const articulos = lista
    .map((item) => `<article><h2>${escapar(item.id)} — ${escapar(item.linea)}</h2><p>${escapar(item.texto)}</p></article>`)
    .join("\n");
  return `${articulos}\n<p class="sello">HTML compuesto en el servidor a las ${hora}.</p>\n`;
}

function conRetardo(modo, responder) {
  if (modo === "lento") {
    setTimeout(responder, 1200);
    return;
  }
  responder();
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const pathname = url.pathname;
  const modo = url.searchParams.get("modo") || "ok";
  const linea = url.searchParams.get("linea") || "";

  if (pathname === "/api/incidencias") {
    conRetardo(modo, () => {
      if (modo === "error") {
        enviarJson(res, 500, { error: "servicio no disponible" });
        return;
      }
      enviarJson(res, 200, { incidencias: seleccionar(modo, linea) });
    });
    return;
  }

  if (pathname === "/fragmentos/incidencias") {
    conRetardo(modo, () => {
      if (modo === "error") {
        enviarHtml(res, 500, "<p>No se han podido cargar las incidencias.</p>\n");
        return;
      }
      enviarHtml(res, 200, fragmentoIncidencias(seleccionar(modo, linea)));
    });
    return;
  }

  if (pathname === "/jsonp/incidencias") {
    const callback = url.searchParams.get("callback") || "";
    if (!/^[A-Za-z_$][\w$]*$/.test(callback)) {
      enviar(res, 400, "text/plain; charset=utf-8", "callback no válido");
      return;
    }
    const cuerpo = JSON.stringify({ incidencias: seleccionar(modo, linea) });
    enviar(res, 200, "application/javascript; charset=utf-8", `${callback}(${cuerpo});`);
    return;
  }

  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const file = path.normalize(path.join(root, relative));
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end("Prohibido");
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("No encontrado");
      return;
    }
    const type = types[path.extname(file)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

server.listen(8080, "0.0.0.0", () => {
  console.log("Página tradicional en http://localhost:8080");
});
