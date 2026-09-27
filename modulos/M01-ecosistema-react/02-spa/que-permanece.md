# Qué permanece

[← Página anterior](que-es.md) · [Siguiente página →](cuando-compensa.md)

## La memoria de la sesión

En la SPA, el programa sigue en marcha al cambiar de vista. Lo que esté en su memoria sigue ahí. En la demo, esa memoria es pequeña y deliberada:

- `vista`: vale `listado` o `detalle`.
- `lineaId`: qué línea está abierta, o ninguna.
- Los datos de L1 y L2, importados de un fichero, no pedidos a un servidor.

Al pulsar «Ver detalle», no se destruye el programa. Se cambian `vista` y `lineaId`. El título pasa de «Red de transporte» a «Detalle de L1». El listado deja de dibujarse y aparece el párrafo de frecuencia. Al volver, las variables regresan al listado. El documento, el que el navegador cargó al principio, es el mismo.

Eso es lo que un operador reconoce como «no he salido de la herramienta».

## Lo que la SPA no recuerda sola

Permanecer en memoria no significa recordar todo lo que el negocio necesita.

Si se recarga la pestaña, el programa arranca de cero. `vista` vuelve a `listado`. El detalle que estaba abierto se esfuma, porque nadie lo guardó en la URL ni en el servidor. En la demo eso se ve con una recarga manual: se regresa al listado y el contador de cargas del documento, que en esta demo está escrito como 1 fijo en la pantalla, sigue diciendo 1 solo porque así está pintado; el programa sí ha vuelto a arrancar.

Si se cierra el portátil, la memoria muere. Una SPA no es una base de datos. Los datos de verdad —la incidencia anotada, el parte enviado— tienen que haber salido de la memoria y haber llegado a un sistema. Si solo vivían en la pantalla, no existen para el resto de la organización.

Si otro compañero abre la misma dirección, no ve el detalle que el primero tenía abierto. Ve el arranque. El estado de trabajo no es compartible mientras sea solo memoria local.

| Permanece al cambiar de vista | No permanece |
|--------------------------------|--------------|
| Variables del programa (vista, selección) | El estado, si se recarga o se cierra la pestaña |
| Datos ya descargados, hasta que se decida pedirlos otra vez | Lo que no se envió al servidor |
| La sesión de login, si está en una cookie | La pantalla exacta, salvo que la URL la describa |

## Historial, atrás y enlaces

Una SPA que no cambia la dirección, como esta demo, deja el botón Atrás inútil para «volver al listado»: Atrás sale del sitio, porque para el navegador nunca hubo una segunda página. Por eso la demo necesita un botón propio, «Volver al listado».

Una SPA más completa empuja vistas al historial del navegador (rutas de cliente) para que Atrás funcione y para que `/lineas/L1` se pueda enviar por correo. Eso ya es una decisión de diseño, no una propiedad automática. Hasta que no está hecha, la herramienta es cómoda para quien está dentro y opaca para quien llega de fuera.

> [!NOTE]
> En una entrega, «es una SPA» no responde a «¿puedo mandar el enlace del detalle?». Hay que abrir el detalle y mirar la barra de direcciones. Si no cambia, el enlace no existe. Si cambia, hay que probarlo en una ventana de incógnito: a veces la ruta existe pero, sin el programa ya cargado y sin sesión, cae en la portada.
