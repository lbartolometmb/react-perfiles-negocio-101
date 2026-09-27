# La portada

[← Página anterior](01-antes-de-abrir.md) · [Siguiente página →](03-codigo-fuente.md)

## Qué aparece

Al abrir `http://localhost:3000/` el título del documento es «Red de transporte — Next.js». En la página:

- Pastilla «Next.js — servidor».
- Título «Red de transporte».
- Frase: «Esta hora ya viaja dentro del HTML. No espera al navegador.»
- Dos enlaces: «Página de cliente» y «Flujo con API». Son `<a href>`, no botones. Cambian de documento de verdad: la barra pasa a `/cliente` o a `/flujo`.
- «Generada en el servidor:» y una hora en formato ISO, dentro de un elemento con `id="hora-servidor"`.
- Dos fichas, L1 «en servicio» y L2 «retraso leve», sin enlace de detalle.

La hora es la del proceso que sirve la página, en UTC (`toISOString`). No es la hora local de la estación. Sirve como sello de «esta respuesta se acaba de componer», no como reloj de negocio. Si se usara como hora al público, el requisito estaría mal planteado: el requisito aquí es ver que el sello viaja ya hecho.

## De dónde sale

`page.js` define las dos líneas en un array y llama a `new Date()` al componer. `TarjetaLinea` solo recibe nombre y estado. No hay `useState`. No hay espera. Por eso no existe en esta pantalla un texto de «cargando»: no hay una segunda fase para el listado.

`export const dynamic = "force-dynamic"` impide que la construcción de producción deje la portada congelada con la hora del build. Sin esa línea, `next build` podría guardar un HTML estático y `next start` lo repetiría. La demo perdería su prueba. Conviene ver la línea en el fichero y no dar por hecho que «Next siempre recalcula».

## Recarga

Recargar pide otra vez `/`. El sello cambia. Las líneas no, porque están escritas en el código, no leídas de un servicio. La demo demuestra frescura de la **composición**, no frescura del estado de L2. Si L2 pasara a «interrumpida» en el mundo real, esta portada no se enteraría hasta que alguien cambie el array y vuelva a construir, o hasta que el array se sustituya por una lectura. Eso se dice en alto para no vender la hora cambiante como integración con explotación.

## Navegación

Los dos enlaces crean historial. Atrás vuelve a la portada. A diferencia de la SPA, aquí «cambiar de pantalla» es cambiar de URL. El precio es una carga de documento. El beneficio es poder enviar `/cliente` a otra persona sin explicar qué botones pulsar.
