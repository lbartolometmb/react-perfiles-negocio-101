# Qué es Electron

[← Página anterior](../01-react-native/03-cuando-pedirlo.md) · [Siguiente página →](02-puesto-fijo.md)

## Un navegador empaquetado

Electron toma una interfaz web —HTML, CSS, JavaScript, y por tanto también una interfaz hecha con React— y la entrega como **programa de escritorio**. El usuario abre un icono. Dentro va un motor de navegador. No hace falta que la persona busque una URL ni que el puesto tenga el navegador corporativo configurado a gusto.

Muchas herramientas de empresa que «se instalan» son esto. No es un programa nativo escrito contra el sistema gráfico. Es la web, con ventana propia, más la capacidad de hablar con el ordenador: ficheros, impresoras, a veces dispositivos del puesto.

## Qué problema cubre

Cubre el puesto en el que **la URL es un estorbo**. Taquilla, punto de información que debe abrir siempre la misma vista, operador que no administra su máquina. También cubre integraciones que el navegador limita o complica: imprimir un título con una impresora concreta, leer un fichero local, mantener una ventana a pantalla completa sin barras.

El peso es real. El paquete incluye el motor. Arranca más lento y gasta más memoria que una ventana del navegador que ya estaba abierto. A cambio, la versión de ese motor la elige quien publica el programa, no el parque de navegadores de la empresa.

## Relación con lo ya visto

La portada Next.js y la SPA podrían, en teoría, meterse dentro de Electron. Seguirían siendo esas interfaces. Cambiaría el envoltorio: instalación, icono, actualización del programa. No cambiaría el contrato de datos ni aparecería solo por envolverlas la cámara del teléfono. Electron no es móvil. No es tienda de apps de teléfono. Es escritorio.

> [!NOTE]
> Igual que con React Native, aquí no se empaqueta ninguna demo. El juicio es de encaje. Si el puesto ya tiene un navegador y una URL fija, Electron es una pieza más que mantener.
