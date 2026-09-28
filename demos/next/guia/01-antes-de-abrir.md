# Antes de abrir Next.js

[← Página anterior](../../../modulos/M02-nextjs/03-next-frente-a-react/03-como-leerlo.md) · [Siguiente página →](02-la-portada.md)

## Arranque

La demo se arranca con `npm run demo:next` y se abre en `http://localhost:3000`. Ese comando no es el modo de desarrollo. Sirve la aplicación **ya construida** (`next start`). La primera vez hace falta haber instalado dependencias y haber construido: `npm run install:demos` y `npm --prefix demos/next run build`. El contenedor de este curso lo hace al crearse.

Si se abre el puerto y la hora de la portada no cambia al recargar, o la página no está, el fallo es de construcción o de arranque, no de la teoría. No se interpreta una pantalla a medias.

Hay tres direcciones:

| URL | Qué es |
|-----|--------|
| `/` | Portada compuesta en el servidor en cada visita |
| `/cliente` | Página cuya hora la calcula el navegador |
| `/flujo` | Pantalla que pide una API. Su guía va al final del curso, cuando toca el contrato de datos |

La cabecera es violeta. La pastilla de la portada dice «Next.js — servidor». Si la pastilla dice «SPA React», se está en el puerto 5173.

## Ficheros

| Fichero | Papel en esta guía |
|---------|--------------------|
| `demos/next/app/page.js` | Portada. Hora de servidor y listado. Declara `force-dynamic` |
| `demos/next/app/cliente/page.js` | Hora de navegador. Empieza por `"use client"` |
| `demos/next/app/components/TarjetaLinea.js` | La pieza del listado. No tiene botón |
| `demos/next/app/layout.js` | Título del documento, idioma, estilos |

`/flujo` y `app/api/incidencias/route.js` existen ya en el proyecto. Esta guía no los usa. Abrirlos ahora mezcla el HTML de la primera vista con el JSON de una petición, que es otro contrato.

## Qué se va a comprobar

1. En `/`, el fuente trae las líneas y una hora.
2. Recargar cambia esa hora.
3. En `/cliente`, el fuente trae la frase de espera, no una hora ISO.
4. Un instante después, la página de cliente muestra la hora. El fuente no ha cambiado: ha cambiado el documento vivo.
