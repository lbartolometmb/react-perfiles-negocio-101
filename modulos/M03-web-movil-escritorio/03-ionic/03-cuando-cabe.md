# Cuándo cabe

[← Página anterior](02-hibrido-no-es-mejor.md) · [Siguiente página →](../04-caso/01-las-cuatro-piezas.md)

## Cabe

- El producto debe existir como URL y también como icono, y la pantalla es esencialmente la misma.
- El equipo es de web y no hay capacidad real de mantener otra interfaz nativa.
- El hardware que se usa es el habitual (una foto, una localización) y se acepta la calidad del puente.
- No se promete «indistinguible de una app del sistema».

## No cabe

- La web pública de avisos, como única razón. Esa web no necesita icono.
- La ronda de inspección si el requisito fuerte es offline y cámara continua, y nadie ha aceptado el techo.
- El puesto fijo de estación. Ionic es móvil (y web). El escritorio cerrado es Electron o el quiosco.
- Como forma de no decidir. «Híbrido» no cierra las cuatro piezas del caso siguiente.

## Cómo compararlo en una frase

| Necesidad | Primera opción que encaja |
|-----------|---------------------------|
| Leer en cualquier navegador | Web (Next.js si el HTML tiene que llegar lleno) |
| Se ve bien al estrechar | Sigue siendo web |
| Icono, tienda, hardware, campo exigente | React Native |
| Misma web, también como icono, hardware modesto | Ionic |
| Programa en un PC de puesto, ventana fija | Electron, o navegador en quiosco |

La tabla no es una ley. Es el orden de preguntas para que el nombre llegue después del uso. El caso que sigue la aplica a cuatro piezas que una propuesta perezosa llamaría «el proyecto React».
