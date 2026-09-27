# Cómo leerlo en una propuesta

[← Página anterior](node-y-npm.md) · [Siguiente página →](../../../demos/tradicional/guia/01-antes-de-abrir.md)

## Separar las frases

Una propuesta de interfaz suele comprimir en un párrafo cosas que este módulo ha separado. Al leerla, se desmonta en preguntas. Si una pregunta no tiene respuesta, no está decidido el producto: está decidido el vocabulario.

| Frase típica | Qué hay que aclarar | Dónde se ha visto en este módulo |
|--------------|---------------------|----------------------------------|
| «Será una web» | ¿Documento que se lee o herramienta de turno? | Página tradicional frente a SPA |
| «Será una SPA» | ¿Un solo documento vivo? ¿Las vistas tienen URL? ¿Qué pasa al recargar? | Qué permanece en memoria |
| «La haremos en React» | ¿Solo la interfaz? ¿El equipo ya está en React? ¿Hay HTML previo para lo público? | Qué es y qué no es React |
| «Mejor que Angular» | ¿Hay un sistema Angular que se abandona? ¿Quién mantiene lo nuevo dentro de tres años? | Alternativas |
| «Hace falta Node» | ¿Node en el puesto de quien desarrolla, en el servidor, o en los dos? | Entorno |
| «Componentes reutilizables» | ¿Un cambio de un estado de servicio se hace en un sitio? | La idea de React |

## Un ejemplo aplicado a la red

«Portal del servicio en React, moderno, con el estado de las líneas.»

Desmontado:

- Si el portal es público y el estado tiene que leerse al llegar y encontrarse en un buscador, «React» a secas no cierra el encargo. Falta decir si el HTML sale del servidor.
- Si además el personal de sala opera incidencias todo el turno, eso es otra superficie, aunque comparta marca. Puede ser una SPA. No es el mismo contrato que el aviso público.
- «Moderno» no elige entre documento y aplicación. Se tacha y se sustituye por el uso.
- El estado de las líneas, si es el de verdad, no vive en un `datos.js` como en la demo. Vive en un sistema. La propuesta tiene que nombrar de dónde se lee.

## Qué no pedir todavía

Todavía no hace falta discutir Next.js, React Native ni la forma de la API. Si en este punto ya está claro qué es documento, qué es sesión de trabajo y qué ecosistema de interfaz hay en la casa, el resto del curso tiene dónde apoyarse. Si no está claro, las herramientas de los módulos siguientes se van a elegir para adornar una frase, no para cubrir un uso.

La demostración que sigue pone las dos primeras piezas —documento y SPA— una al lado de la otra, con la misma red de transporte, para que la diferencia no se confunda con un cambio de funcionalidad.
