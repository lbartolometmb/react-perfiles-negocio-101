const estado = {
  lineas: [],
  filtro: "",
  pintadas: 0,
};

const app = document.getElementById("app");

function contarCarga() {
  const clave = "cargas-spa-vanilla";
  const cargas = Number(sessionStorage.getItem(clave) || 0) + 1;
  sessionStorage.setItem(clave, String(cargas));
  document.getElementById("cargas").textContent = cargas;
}

function escapar(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function vistaListado() {
  const texto = estado.filtro.trim().toLowerCase();
  const visibles = estado.lineas.filter(function (linea) {
    const donde = [linea.id, linea.tramo].concat(linea.paradas).join(" ").toLowerCase();
    return donde.includes(texto);
  });

  const fichas = visibles
    .map(function (linea) {
      return (
        "<article>" +
        "<h2>" + escapar(linea.nombre) + "</h2>" +
        "<p>Estado: " + escapar(linea.estado) + "</p>" +
        '<a href="/lineas/' + escapar(linea.id) + '">Ver detalle de ' + escapar(linea.id) + "</a>" +
        "</article>"
      );
    })
    .join("");

  return {
    titulo: "Red de transporte",
    html:
      '<label for="buscar">Buscar línea o parada</label>' +
      '<input id="buscar" type="search" placeholder="Por ejemplo: Mercado" value="' + escapar(estado.filtro) + '" />' +
      '<p id="resultado">' + visibles.length + " de " + estado.lineas.length + " líneas visibles.</p>" +
      '<div id="fichas">' + (fichas || "<p>Ninguna línea coincide con el filtro.</p>") + "</div>",
  };
}

function vistaDetalle(id) {
  const linea = estado.lineas.find(function (item) {
    return item.id === id;
  });
  if (!linea) {
    return vistaNoEncontrada();
  }
  return {
    titulo: "Detalle de " + linea.id,
    html:
      "<article>" +
      "<h2>" + escapar(linea.id) + " — " + escapar(linea.tramo) + "</h2>" +
      "<p>Frecuencia habitual: " + escapar(linea.frecuencia) + ". Ahora mismo: " + escapar(linea.estado) + ".</p>" +
      "<p>Paradas: " + linea.paradas.map(escapar).join(" · ") + ".</p>" +
      "</article>" +
      (estado.filtro ? "<p>Filtro guardado en memoria: «" + escapar(estado.filtro) + "».</p>" : "") +
      '<p><a href="/">Volver al listado</a></p>',
  };
}

function vistaNoEncontrada() {
  return {
    titulo: "No encontrado",
    html: "<p>Esa dirección no corresponde a ninguna vista.</p><p><a href=\"/\">Volver al listado</a></p>",
  };
}

function elegirVista(ruta) {
  if (ruta === "/") {
    return vistaListado();
  }
  const coincidencia = ruta.match(/^\/lineas\/([^/]+)$/);
  if (coincidencia) {
    return vistaDetalle(decodeURIComponent(coincidencia[1]));
  }
  return vistaNoEncontrada();
}

function pintar() {
  const vista = elegirVista(location.pathname);
  app.innerHTML = vista.html;
  document.getElementById("titulo").textContent = vista.titulo;
  document.title = vista.titulo + " — SPA sin React";
  estado.pintadas += 1;
  document.getElementById("pintadas").textContent = estado.pintadas;
}

function navegar(ruta) {
  history.pushState(null, "", ruta);
  pintar();
}

app.addEventListener("click", function (evento) {
  const enlace = evento.target.closest("a");
  if (!enlace || enlace.origin !== location.origin) {
    return;
  }
  if (evento.ctrlKey || evento.metaKey || evento.shiftKey) {
    return;
  }
  evento.preventDefault();
  navegar(enlace.pathname);
});

app.addEventListener("input", function (evento) {
  if (evento.target.id !== "buscar") {
    return;
  }
  estado.filtro = evento.target.value;
  const posicion = evento.target.selectionStart;
  pintar();
  const buscar = document.getElementById("buscar");
  buscar.focus();
  buscar.setSelectionRange(posicion, posicion);
});

window.addEventListener("popstate", pintar);

async function arrancar() {
  contarCarga();
  app.innerHTML = "<p>Cargando líneas…</p>";
  try {
    const respuesta = await fetch("/datos.json");
    if (!respuesta.ok) {
      throw new Error(String(respuesta.status));
    }
    estado.lineas = (await respuesta.json()).lineas;
    pintar();
  } catch (error) {
    app.innerHTML = "<p>No se han podido cargar las líneas.</p>";
  }
}

arrancar();
