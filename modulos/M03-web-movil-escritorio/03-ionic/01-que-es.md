# Qué es Ionic

[← Página anterior](../02-electron/03-cuando-no.md) · [Siguiente página →](02-hibrido-no-es-mejor.md)

## Interfaz web, envoltorio móvil

Ionic construye la interfaz con tecnologías web. En el navegador es una web. Empaquetada, un contenedor —a menudo Capacitor— la instala en el teléfono y abre un puente a capacidades del dispositivo: cámara, GPS, ficheros. La interfaz sigue siendo HTML. No son los controles nativos que dibuja React Native.

Por eso se le llama híbrido: una sola interfaz web, dos sitios donde vivir (la URL y el icono). El equipo que ya hace la web reutiliza ese oficio de verdad, no solo el vocabulario. Los componentes de la demo, el CSS, la forma de pedir una API, se parecen más a lo que ya se ha visto que un proyecto React Native.

## Qué se gana

- Un solo diseño de pantalla para quien entra por el navegador y para quien tiene el icono.
- Acceso al dispositivo mejor que el de una pestaña suelta, dentro de lo que el puente permite.
- Menos divergencia entre «la web» y «la app» en el día a día del equipo, si la app no pide comportamientos muy propios del sistema.

En la red, un caso posible es una herramienta interna de consulta que debe existir como URL en el puesto y también como icono en el teléfono del personal, sin fotos exigentes ni cola offline compleja. Ahí el envoltorio evita una segunda interfaz.

## Qué no hay que oír

No hay que oír que, por ser híbrido, queda por encima de las otras dos opciones. Queda en medio. La página siguiente fija ese «en medio» para que no se use como elogio.
