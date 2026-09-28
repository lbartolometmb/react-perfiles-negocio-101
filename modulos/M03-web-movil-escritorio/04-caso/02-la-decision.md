# La decisión

[← Página anterior](01-las-cuatro-piezas.md) · [Siguiente página →](03-preguntas.md)

## Asignación

| Pieza | Enfoque | Por qué este | Por qué no el otro |
|-------|---------|--------------|--------------------|
| Estado público | Next.js | El aviso tiene que estar en el HTML y en una URL | Una SPA lo deja fuera del fuente. Una app de tienda obliga a instalar para leer |
| Panel de sala | React en el cliente | Turno largo, estado en memoria, sin SEO | Electron obliga a instalar un puesto que ya tiene navegador. Next.js puede alojar la ruta, y no es el problema que hay que resolver |
| Ronda | React Native | Teléfono, foto, cola sin red | La web se queda corta en cobertura y en cámara continua. Ionic solo si se acepta ese techo y el equipo no puede sostener otra superficie |
| Puesto de estación | Electron, o navegador en quiosco | Vista fija, máquina cerrada | React Native no es de escritorio. Una URL suelta se cierra si nadie bloquea el puesto |

La decisión no es «usamos React para todo». Es: React y Next.js en la web; otra superficie solo donde el navegador no llega; un equipo capaz de mantener esa superficie.

## El quiosco como alternativa explícita

En el puesto de estación, Electron no gana por defecto. Gana si hace falta hardware del PC o un motor fijado. Si solo hace falta «que no se salga de la página», el quiosco del navegador es menos producto que mantener. El caso queda bien cerrado cuando esa bifurcación está escrita, no cuando se ha elegido el nombre más grande.

## Qué sería una mala decisión única

Elegir Ionic para las cuatro, porque «así es híbrido». El público instalaría para leer. La sala trabajaría en un envoltorio móvil. El puesto de estación no está resuelto. Elegir Electron para las cuatro deja fuera al viajero. Elegir la SPA para las cuatro deja el aviso fuera del HTML y no da cámara ni quiosco.

Una base tecnológica común, en este caso, es como mucho el contrato de la incidencia y el oficio de componentes. No es un ejecutable único.
