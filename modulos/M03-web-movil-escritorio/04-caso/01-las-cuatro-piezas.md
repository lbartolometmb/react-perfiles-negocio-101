# Las cuatro piezas

[← Página anterior](../03-ionic/03-cuando-cabe.md) · [Siguiente página →](02-la-decision.md)

## No son un solo producto

Una red quiere, a la vez, informar al público, operar incidencias en sala, inspeccionar en campo y dejar un puesto fijo en estación. Son cuatro usos. Comparten datos de fondo (hay líneas, hay incidencias) y no comparten superficie. Tratarlos como «la app» obliga a elegir mal al menos tres.

| Pieza | Quién | Dónde está | Qué tiene que poder hacer |
|-------|-------|------------|---------------------------|
| Estado del servicio | Cualquier persona | Navegador, también el del móvil | Leerse al instante y encontrarse. Sin instalar |
| Panel de incidencias | Personal de sala | Navegador, turno largo | Filtrar, abrir detalle, ver carga, vacío y error |
| Ronda de inspección | Personal de campo | Teléfono, cobertura irregular | Foto, parte, cola si no hay red |
| Puesto de estación | Público que mira; personal que no quiere un escritorio | PC dedicado | Siempre la misma vista, a pantalla completa, difícil de sacar de ahí |

Las dos primeras se han visto, en pequeño, en las demos. La portada de Next.js es el esqueleto de la primera. La SPA, o `/flujo`, es el esqueleto de la segunda. La tercera y la cuarta no se arrancan en este curso: se deciden con el criterio de los submódulos anteriores.

## Qué comparten de verdad

Comparten el significado de «línea» y de «incidencia», y pueden compartir la API que los sirve. No comparten el HTML, ni el icono, ni el ciclo de publicación. Una incidencia que la sala da de alta tiene que poder llegar al aviso público si el negocio lo quiere, por el sistema de datos, no porque las cuatro pantallas sean el mismo proyecto de interfaz.

Si alguien propone un monorepo o «una base», la pregunta útil es: ¿un solo equipo despliega las cuatro el mismo día? Si la respuesta es sí, una corrección de la web pública arrastra riesgo a la app de campo. A veces se acepta. Hay que haberlo dicho.
