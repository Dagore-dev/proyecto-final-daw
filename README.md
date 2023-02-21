# Companion of War (CoW)

David Gómez Redondo

## Introducción del proyecto

[King of war](https://www.manticgames.com/games/kings-of-war/) (KoW) es un juego de miniaturas de [Mantic Games](https://www.manticgames.com/) con ámbito competitivo. Actualmente, muchos jugadores de este juego organizan torneos utilizando papel y bolígrafo porque la mayoría de aplicaciones no están adaptadas a su particular sistema de puntuación.

Mi intención es llenar este hueco en el mercado con una aplicación similar a ["Magic: the Gathering Companion"](https://magic.wizards.com/en/products/companion-app), centrándome en la funcionalidad de organización de torneos, pero adaptada a KoW.

## Finalidad

La aplicación generada en este proyecto debe permitir organizar torneos de manera sencilla y cómoda para los jugadores de KoW. 

## Objetivos

La aplicación debe satisfacer algunos objetivos:

- Creación de torneo, generando un id único que lo identifica.
- Unirse a un torneo ingresando el id de este.
- Cualquiera de los jugadores puede ingresar el resultado de su partida. Cuando esto ocurre el resto de jugadores en esa partida ven el resultado ingresado y no pueden aportar uno nuevo.
- El creador del torneo, a modo de administrador, puede modificar parámetros del torneo después de su creación. Por ejemplo, puede editar el resultado ingresado por un jugador si este se equivocó al ingresarlo.
- El creador del torneo puede generar rondas con sus emparejamientos.
- Los emparejamientos siguen un algoritmo según la modalidad del torneo. Por ejemplo: todos contra todos o formato suizo.
- En cualquier momento, el creador del torneo y los jugadores pueden consultar la tabla de posiciones del torneo.
- La aplicación, al crearse un torneo, determina el número de rondas necesarias en función de la modalidad y el número de jugadores.

Además, cualquier funcionalidad integrada en "Magic: The gathering companion" es un objetivo deseable dentro de la aplicación.

## Medios y software a utilizar

Este proyecto no requiere hardware u otros medios materiales para su realización más allá de mi propio equipo informático y conexión a internet.

Respecto al software, en el momento en que se escribe este anteproyecto no se ha determinado cuál es el mejor stack tecnológico para realizar el proyecto. Las opciones que se barajan son el MERN stack ([MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [Node](https://nodejs.org/en/)) y [Next.js](https://nextjs.org/), también se plantea [.NET](https://dotnet.microsoft.com/es-es/) como una opción para el desarrollo en entorno servidor.

En cualquiera de los casos será necesaria la utilización de WebSockets (posiblemente utilizando alguna librería como [Socket.IO](https://socket.io/)) para que los jugadores tengan información actualizada en su aplicación sin tener que refrescarla manualmente.

Respecto al despliegue se tiene claro que los clientes web se desplegaran con [Vercel](https://vercel.com/). Respecto a los servidores las opciones que se tienen en cuenta son [Railway](https://railway.app/), [Render](https://render.com/) y [Azure](https://azure.microsoft.com/en-us).

## Planificación

La aplicación debe estar lista en el periodo de tiempo que comprende el tercer trimestre.

Durante las dos primeras semanas se realizaran algunas pruebas para decantarse definitivamente por un conjunto de tecnologías.

El servidor web con la funcionalidad básica necesaria para los objetivos planteados será lo siguiente a tratar. Se espera dedicar un mes a este desarrollo.

El cliente web será lo siguiente a desarrollar, este desarrollo se espera que consuma otro mes.

Las semanas restantes se dedican a probar y depurar la aplicación en su conjunto. Detectando y solucionando problemas, así como implementando pequeñas mejoras.
