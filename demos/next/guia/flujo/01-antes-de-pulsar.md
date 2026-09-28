# Antes de pulsar

[← Página anterior](../../../../modulos/M05-apis-calidad/04-caso/03-lo-que-no-cubre.md) · [Siguiente página →](02-con-datos.md)

## Dónde está

La pantalla es `http://localhost:3000/flujo`, con la demo de Next.js ya arrancada. La pastilla dice «Next.js — API». El título es «Incidencias». La frase de contrato es: «La pantalla pide datos y muestra carga, resultado, vacío o error.» Hay enlaces a la portada y a la página de cliente. Esos enlaces salen de esta guía: aquí no se juzga la hora.

Debajo hay cuatro botones: «Con datos», «Vacío», «Error» y «Lento». Antes de pulsar ninguno, el párrafo con id `fase` dice «Elige un caso.» No hay artículos de incidencias. No se ha fingido un resultado.

## Ficheros

| Fichero | Qué mirar con esta guía |
|---------|-------------------------|
| `demos/next/app/flujo/page.js` | Los botones, las frases de cada fase, el `fetch` |
| `demos/next/app/api/incidencias/route.js` | El JSON, el 500, la espera de 1200 ms |

Conviene la pestaña Red abierta antes del primer clic, vaciada, para ver una sola petición y no las de la carga de la página.

## Qué no va a ocurrir

- Pulsar un botón no cambia la URL de la página. Cambia la query de la petición (`/api/incidencias?modo=…`), que se ve en la red, no en la barra.
- No se navega a otra pantalla de detalle. Cada incidencia se pinta en la misma página.
- No hace falta reconstruir el proyecto entre un botón y otro. La ruta responde en cada GET.
