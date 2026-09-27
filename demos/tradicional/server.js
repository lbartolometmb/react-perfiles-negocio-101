const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "public");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
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
