# Node y NPM

[← Página anterior](angular-y-vue.md) · [Siguiente página →](como-leerlo-en-una-propuesta.md)

## Node no es la aplicación que ve el usuario

**Node.js** es un programa que ejecuta JavaScript fuera del navegador. En este curso hace tres trabajos distintos, y conviene no mezclarlos:

1. **Arrancar las demos** en la máquina donde se prepara la clase. El servidor de la página tradicional es un script Node. La SPA la sirve Vite, que corre sobre Node. Next.js también.
2. **Construir** el paquete que luego se publica. Aunque el usuario final solo abra un navegador, alguien ha ejecutado Node para producir esos ficheros.
3. **A veces, ser el servidor de verdad** del producto. No es obligatorio. El backend puede ser otro lenguaje. Que el front sea React no obliga a que el servidor sea Node. Que las demos usen Node solo dice que el entorno de trabajo es JavaScript de punta a punta, porque así se ve el mecanismo sin un segundo stack.

El alumno de este curso no tiene que programar Node. Tiene que reconocer la frase «hace falta Node instalado» como una condición del entorno, igual que hace falta un navegador para ver la pantalla. Sin Node, en esta máquina, las demos no arrancan. Con Node, el usuario del panel en producción puede no saber que existe: él solo abre una URL, y Node —si es que el servidor lo usa— está en un sitio que no ve.

## NPM es la lista de piezas

**NPM** descarga librerías y anota de cuáles depende el proyecto. El fichero `package.json` es esa lista: React, Vite, Next.js, y las versiones. `npm install` lee la lista y trae las piezas a `node_modules`. Esa carpeta no se inventa a mano y no se suele guardar en el repositorio: se regenera.

Si `package.json` y el de lock (`package-lock.json`) no coinciden con lo instalado, dos máquinas pueden estar «con el mismo proyecto» y no estar en la misma versión. Por eso el contenedor de este curso instala al crearse, en lugar de fiarse de lo que cada portátil tuviera suelto.

| Pieza | Para qué se le nombra |
|-------|------------------------|
| Node | Ejecutar herramientas y, a veces, el servidor |
| NPM | Instalar lo que el proyecto declara |
| `package.json` | La declaración: qué hace falta y qué comandos hay (`dev`, `build`, `start`) |
| `node_modules` | El resultado de instalar. Pesado, local, regenerable |

## Qué se rompe si faltan

- No está Node, o es una versión vieja: Vite o Next.js no arrancan. El síntoma es un error de consola, no una pantalla a medias.
- No se ha instalado: el código está en el repositorio y aun así «no funciona». Falta el paso de instalación, que el contenedor hace solo.
- Se ha copiado `node_modules` de otro sistema operativo: puede haber binarios que no coinciden. Se borra y se instala de nuevo. No se depura a ojo.

> [!NOTE]
> En una entrega, «el front está en el repo» no significa «se abre». Hay que poder repetir instalación y arranque en una máquina limpia. Si solo arranca en el portátil de quien lo desarrolló, el entorno no está declarado. En este curso esa declaración es el dev container y los scripts `npm run demo:…`.
