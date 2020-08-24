# magneto-mutants api

## Instrucciones para correr localmente
Para poder correr esta aplicacion de forma local es necesario tener instalado [Node](https://nodejs.org/en/download/) (version 12.18.3 o superior).
Seguir los siguientes pasos:
1. Clonar el codigo usando git o hacer download desde github.
1. Desde la terminal de tu computadora posicionate en el directorio del repo que bajaste.
1. Agregar en la carpeta `server` el json `magneto-mutants-firebase-key.json` con las credenciales provistas via email.
1. Correr el comando ```npm install``` para bajar las dependencias de los modulos.
1. Para correr los tests usar ```npm run test```.
1. Para correr el server usar el comando ```npm start``` o ```node .\server\app.js```.


## Como testear la api localmente
Una vez que este corriendo el server se puede probar la api usando `postman` o cualquier otra herramienta similar. En la carpeta `test/postman` se pueden encontrar los requests usados para testear la app de punta a punta.

## Estructura del proyecto
El codigo de la api en su totalidad se encuentra en la carpeta `server`.
Dentro de esta carpeta vamos a encontrar las siguientes carpetas:

* __controllers__: contiene los modulos que se encargan de manejar los requests y pasarlos a los servicios correspondientes. 
* __infrastructure__: contiene los modulos encargados del acceso a la capa de datos.
* __routes__: Enrutadores de la api. Son middlewares que mapean una ruta con el codigo que debe ejecutarse para la misma.
* __services__: Modulos con logica de negocio. Aca se encontraran servicios de validacion, stats, etc.
* __utils__: Contiene modulos utilitarios con logica especifica no relacionada a negocio. Se pueden encontrar utilitarios para manejo de matrices, strings, etc.

Ademas de las carpetas mencionadas tambien vamos a encontrar los siguientes archivos:

* __app.js__: Archivo de entrada del servidor. Es el archivo que levanta el server y setea el enrutamiento de la api.
* __config.json__: Archivo de configuracion que contiene parametros configurables que puedan ser utilizados en la api.
* __container.js__: Un clase de ayuda para inicializar cada uno de los modulos y sus dependencias.
* __magneto-mutants-firebase-key.json__: Archivo con la configuracion de las _keys_ para acceder al repositorio de datos.

## Como fue resuelto el ejercicio
La validacion de la cadena de adn se realiza mediante la funcion `isMutant`. Esta funcion puede encontrarse en `mutant.validation.service.js`. 
Internamente realiza las verificaciones correspondientes a nivel horizontal, vertical y diagonal (ambos sentidos) por separado. A su vez tiene una funcion de validacion de input.

El servico de validacion es inyectado en el servicio `mutant.service.js` que es el que lo termina llamando internamente y ademas realiza el guardado en el repositorio de datos (el cual tambien es inyectado en el servicio).

Por ultimo tenemos el servicio `stats.service.js` que es el que se encarga de obtener los datos del repositorio de datos y calcular las estadisticas.