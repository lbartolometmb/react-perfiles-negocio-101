const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const puerto = 8081;
const carpeta = path.join(__dirname, "public");

const tipos = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function enviarFichero(res, ruta) {
  fs.readFile(ruta, (error, contenido) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("No encontrado");
      return;
    }
    res.writeHead(200, { "Content-Type": tipos[path.extname(ruta)] || "application/octet-stream" });
    res.end(contenido);
  });
}

http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pedido = decodeURIComponent(url.pathname);

    // Rutas sin extensión (/, /lineas/L1…) reciben siempre el mismo documento: la aplicación decide qué pintar.
    if (!path.extname(pedido)) {
      console.log(`${req.method} ${pedido} → index.html`);
      enviarFichero(res, path.join(carpeta, "index.html"));
      return;
    }

    const ruta = path.normalize(path.join(carpeta, pedido));
    if (!ruta.startsWith(carpeta)) {
      res.writeHead(403);
      res.end();
      return;
    }
    console.log(`${req.method} ${pedido}`);
    enviarFichero(res, ruta);
  })
  .listen(puerto, () => {
    console.log(`SPA sin React en http://localhost:${puerto}`);
  });
