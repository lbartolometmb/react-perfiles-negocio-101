# El puesto fijo

[← Página anterior](que-es.md) · [Siguiente página →](cuando-no.md)

## Qué se le pide a un puesto de estación

Un puesto de información al público, o una pantalla de andén operada en local, tiene requisitos que no son los de la web:

- Abrir siempre la misma vista, sin pasar por un buscador ni por un escritorio lleno de iconos.
- No dejar que quien pase cambie de página, cierre la ventana o abra otra cosa.
- A veces, hablar con un dispositivo del sitio (impresora, display, lector).
- Actualizarse cuando la organización lo decida, no cuando cada máquina tenga un navegador distinto.

Electron puede hacer de cáscara: ventana a pantalla completa, arranque con el sistema, versión fijada. Un **navegador en modo quiosco** puede hacer la parte de «siempre la misma vista» sin empaquetar un motor nuevo, si la máquina ya lo permite y no hace falta hardware especial. Las dos opciones se comparan. No se asume el ejecutable.

## Qué hay que diseñar además de la ventana

| Tema | Por qué importa en el puesto |
|------|------------------------------|
| Arranque | Si alguien reinicia el PC, la vista tiene que volver sola |
| Bloqueo | El público no navega. El personal de mantenimiento sí necesita una salida |
| Red caída | ¿La pantalla se queda en el último estado y lo dice, o en blanco? |
| Actualización | ¿Se publica como la web, al instante, o hay que instalar versión? Electron tiende a lo segundo |
| Contenido | La vista puede ser la portada de servicio. El envoltorio no inventa los datos |

La pantalla de cara al público puede enseñar el mismo estado que la web. El producto de puesto es el envoltorio y la disciplina de la máquina (quiosco, sesión, reinicio), no una tercera redacción de L1 y L2.

## Quién lo mantiene

Alguien tiene que poder reinstalar, saber qué versión corre en cada estación y recuperar un puesto que se quedó a medias. Si eso no existe como operación, un ejecutable es un parque de PCs divergentes. Una URL en quiosco se actualiza cuando se actualiza el servidor, y el riesgo se concentra en la configuración de la máquina, que también hay que operar, pero no añade un ciclo de versiones de la interfaz.
