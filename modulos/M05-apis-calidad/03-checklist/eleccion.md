# Elección tecnológica

[← Página anterior](interfaz-acceso-pruebas.md) · [Siguiente página →](../04-caso/lectura-del-conjunto.md)

## La fila que cierra el checklist

| Uso | Encaja | No encaja |
|-----|--------|-----------|
| Aviso público | HTML de servidor o estático, URL propia | SPA como única web de avisos. App de tienda para un vistazo |
| Panel de sala | Cliente con estado, desenlaces de red, navegador del puesto | Electron solo para no recordar la URL. Next.js como requisito del filtro |
| Campo | App con cámara y cola, si el uso lo exige | Web responsive vendida como ronda offline |
| Puesto fijo | Quiosco o Electron, con dueño de la máquina | Una URL que cualquiera cierra |

La superficie tiene que coincidir con el uso. Si no coincide, el resto del checklist puede estar perfecto y el producto sigue mal encargado: una SPA accesible, rápida y bien probada sigue sin ser el aviso que el buscador tiene que leer.

## Cómo no usar la fila

No se usa para reabrir el módulo de superficies desde cero en cada revisión. Se usa como comprobación final: la entrega que tengo delante, ¿es la superficie que se eligió para este uso? Si el encargo era la ficha pública y la entrega es solo la SPA del puerto 5173, se devuelve aunque `TarjetaLinea` esté bien partida. Si el encargo era el panel y la entrega es la portada estática, también.

## Relación con las otras filas

Arquitectura, rendimiento, interfaz y acceso se leen **dentro** de la superficie correcta. Una app de campo no se suspende por no tener SEO. Una portada no se suspende por no tener cola offline. Elegir primero evita aplicar el checklist de un producto al otro. El caso siguiente hace esa lectura sobre el conjunto de las demos, ya con todas las filas disponibles.
