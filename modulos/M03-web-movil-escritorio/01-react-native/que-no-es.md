# Qué no es

[← Página anterior](que-es.md) · [Siguiente página →](cuando-pedirlo.md)

## No es la web en el móvil

Que la portada se lea bien al estrechar la ventana es **responsive**. Sigue siendo la web. No hace falta tienda, ni permisos, ni una segunda base de código. Si el requisito es «que el viajero consulte el estado en el teléfono», la respuesta es la URL pública, la misma de Next.js, bien maquetada. React Native sería obligar a instalar una app para leer un aviso.

Tampoco es una vista web empaquetada. Eso se parece más a Ionic, que va después. Confundirlos lleva a pedir «sensación nativa» y recibir un navegador incrustado, o al revés: pedir reutilizar el HTML y recibir un proyecto que no lo usa.

## No es automático

| Se dice | Qué falta |
|---------|-----------|
| «Con React ya tenemos el móvil» | React pinta en el navegador. El móvil instalado es otro proyecto |
| «Una sola base para web y apps» | Hay que nombrar qué se comparte. Las pantallas nativas no son las páginas |
| «Saldrá más barato que dos apps nativas» | A menudo sí frente a hacer iOS y Android por separado, desde cero. No frente a no hacer app |
| «Tendrá la cámara» | Hace falta el módulo, el permiso, el texto legal y un comportamiento cuando el usuario lo niega |
| «Funcionará sin cobertura» | Hace falta una cola y una regla de conflicto. La herramienta no la trae puesta |

## No sustituye al panel de sala

El personal de sala está en un puesto con pantalla grande y red estable. Meterle una app de teléfono como herramienta principal empeora el turno: menos información a la vez, más gesto. La app de campo y el panel pueden hablar con la misma API. No son la misma pantalla ni el mismo dispositivo.

## Coste que se olvida

Cuentas de desarrollador, revisión de la tienda, versiones mínimas de sistema, teléfonos de prueba, y alguien que publique cuando hay un fallo grave. Una web se corrige al publicar el servidor. Una app se corrige cuando el teléfono instala la versión nueva, y mientras tanto conviven versiones. Ese desfase es parte del producto, no un detalle de informática.
