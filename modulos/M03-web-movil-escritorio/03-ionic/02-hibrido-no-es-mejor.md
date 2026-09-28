# Híbrido no es mejor

[← Página anterior](01-que-es.md) · [Siguiente página →](03-cuando-cabe.md)

## Qué significa la palabra

En este módulo, híbrido significa **interfaz web dentro de un envoltorio**. No significa «un poco de cada cosa y por tanto lo mejor de las tres». React Native no es híbrido en ese sentido: dibuja controles de la plataforma. Electron tampoco: es escritorio, aunque por dentro lleve un motor web. Juntar los tres nombres en un párrafo es la señal para pedir otro párrafo que diga dónde corre cada pantalla.

## En qué se queda corto

- La sensación es de web: scroll, gestos, tipografía y transiciones dependen de lo que el HTML haga, no de lo que el sistema hace en sus apps.
- La cámara y el GPS pasan por un puente. Funcionan. El pulido fino (rendimiento de la vista previa, modos del hardware, integración con la hoja de compartir del sistema) suele ir por detrás de una app que usa los controles nativos.
- El offline de verdad, con cola y conflictos, hay que construirlo igual. El envoltorio no lo resuelve.
- Si el producto principal es la app y el hardware importa, se está aceptando un techo. Conviene decir el techo en el encargo, no descubrirlo en la prueba con el teléfono.

## En qué se miente la comparativa comercial

| Frase | Lectura |
|-------|---------|
| «Híbrido: lo mejor de web y de nativo» | Es web instalable. Lo nativo es el puente, no la interfaz |
| «Un código, tres plataformas, sin matices» | El matiz es la calidad en cada una y el coste del envoltorio |
| «Sustituye a React Native y a la web» | No sustituye a la web pública de avisos, que no debe obligar a instalar. No sustituye a una app de campo exigente si el equipo ya ha topado con el puente |

> [!NOTE]
> Elegir Ionic puede ser la decisión correcta. Lo incorrecto es elegirla porque la palabra híbrido suena a compromiso gratuito. El compromiso existe: se gana reutilización y se cede suelo nativo.
