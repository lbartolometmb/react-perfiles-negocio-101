# Qué no es

[← Página anterior](la-idea.md) · [Siguiente página →](casos-y-limites.md)

## React no es el sistema

React pinta interfaz. No guarda las incidencias, no calcula la frecuencia real de una línea, no autentica al personal y no es la app de la tienda. Esas responsabilidades viven en otros sistemas. Cuando una propuesta dice «lo hacemos en React» y el alcance incluye datos, permisos, móvil e informes, React es solo la capa visible. El resto hay que nombrarlo o aparecerá como trabajo no previsto.

| React no es… | Quién lo es, en un producto real |
|--------------|----------------------------------|
| Una base de datos | El sistema que ya tiene el estado del servicio, o uno nuevo si de verdad hace falta |
| Un lenguaje nuevo | JavaScript (y, a menudo, un superconjunto como TypeScript). Quien lee código lee JavaScript |
| Un servidor | Node puede ser el servidor, u otro backend. React no atiende la red por el hecho de usarse |
| Una garantía de rendimiento | Una SPA pesada hecha con React es lenta. La biblioteca no absuelve el tamaño |
| SEO | Por defecto pinta en el navegador. Hace falta Next.js u otra estrategia de HTML previo |
| Una app móvil | Hace falta React Native u otra superficie. El módulo 3 lo separa |
| Un estándar de empresa | Es una elección de ecosistema. Angular o Vue pueden ser la elección ya hecha en la casa |

## React no es «la web moderna»

Hay webs públicas excelentes que son documentos. Hay paneles hechos con React que son inmantenibles. La modernidad no está en el nombre del paquete. Está en si el contrato (documento o aplicación) coincide con el uso, y en si el equipo puede mantenerlo dentro de dos años.

Tampoco es sinónimo de SPA. Next.js usa React para páginas que llegan ya hechas desde el servidor. Decir «React» y asumir «SPA vacía hasta que cargue el JavaScript» es saltarse un módulo entero de este curso.

## Qué significa verlo en un currículum o en una oferta

«Experiencia en React» dice que la persona ha construido interfaces con este modelo de componentes y datos. No dice que sepa de explotación del servicio, ni de accesibilidad, ni de cómo se despliega en la red de la empresa. En una contratación o en un proveedor, React es una condición de encaje con el código existente, no un sinónimo de «sabe hacer el producto».

> [!NOTE]
> Si el código actual es Angular, cambiar a React es un proyecto de reescritura y de formación, no un cambio de ajuste. La pantalla puede parecer la misma. El equipo, las librerías, las pruebas y el modo de desplegar no lo son.
