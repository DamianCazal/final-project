# Descripcion general del proyecto

El proposito de este proyecto es mostra todos los conocimientos adquiridos a lo largo de todo el curso de Node.js
Este Proyecto es fullstack backend, cuenta con envios y consultas a la base de datos,autentificacion, etc...

## Progresion del Proyecto
Este proyecto se inicio el dia 21/10/2022

## Tecnologias usadas
- [NMP](https://www.npmjs.com/) para gestionar todas las dependencias del proyecto
- [Node.js](https://nodejs.org/es/) para ejecutar JavaScript en el lado del servidor
- [Tailwind](https://tailwindcss.com/) para lograr estilizar nuestro proyecto
- [Handlebars](https://handlebarsjs.com/) para usar plantillas y se vean en el lado del cliente

Para este proyecto se decidio usa el gestor de paquetes npm.

## Como instalar el proyecto en tu ordenador
El proyecto se encuentra en GitHub en este [Repositorio](https://github.com/DamianCazal/final-project)
Antes de clonar el proyecto desde GitHub en nuestro ordenador lo que se tiene que tener en cuenta es que este automaticamente nos creara una carpeta donde se encontrara el proyecto clonado.

Una vez ubicado donde queremos que este nuestro proyecto clonado usando nuestra consola/terminal de preferencia ejecutaremos el comando:

```
git clone https://github.com/DamianCazal/final-project
```
Este comando nos creara una carpeta con el nombre final-project, para entrar a dicha carpeta donde desde la consola ejecutaremos el siguiente comando
```
cd final-project
```
Una vez dentro de la carpeta para hacer funcionar el proyecto necesitaremos instalar todas las dependencias que necesita el proyecto para eso ejecutaremos el comando:
```
npm install
```
este comando leera el archivo package.json e instalara todas las dependencias que usa el programa para su correcto funcionamiento

## Comandos disponibles

Dentro de la misma terminal, puede ejecutar:

```
npm start
```

Este comando ejecuta la aplicacion en el modo de desarrollo.\
Abra [http://localhost:8000](http://localhost:8000) para verlo en su navegador.

Aclaracion este proceso puede tardar algunos minutos dependiendo de la velocidad de internet y del los componente de la pc que se posea.

La pagina se volvera a cargar cuando realice cambios.\
Tambien puede ver los errores en la consola.

## ¿Que contiene y que hace cada pagina?

### Inicio
Esta es la pagina principal en donde se esta renderizando las vistas del navbar, main principal y el footer, lo que es relevante de esta pagina es que tiene una consulta a la base de datos mostrando todos los post, y dentro del navbar tiene varios link, la cual dentro de ello tiene 2 que son para iniciar sesion y registrarse.
### Mis post
Esta pagina lo que tiene de relevante es que solo nos mostrara los post del usuario que tiene iniciada la sesion, tambien tiene un CRUD hecho con mongo y handlebars, tambien para crear y editar un post se pueden subir imagenes
### Sobre Mi
Pagina no creada
### Contacto
Pagina no creada
## ¿Que librerias se usaron para este proyecto?
    "@faker-js/faker": "^7.6.0" se usa para llenar la base de datos de datos falsos
    "axios": "^1.1.3" ayuda al momento de hacer peticiones http
    "bcrypt": "^5.1.0" ayuda a encriptar las contraseñas de los usuarios al momento de almacenarlas en la base de datos
    "connect-flash": "^0.1.1" permite crear variable de session que esta disponibles en varias ventanas de nuestro proyecto
    "connect-mongo": "^4.6.0" ayuda a conectar nuestra app a la base de datos de mongoDB
    "dotenv": "^16.0.3" crea un archivo para almacenar nuestra variables sensibles en una variable de entorno
    "express": "^4.18.2" nos permite crear mas facil un servidor y tambien manejar nuestros endpoint
    "express-handlebars": "^6.0.6" es la libreria de plantillas o templates
    "express-session": "^1.17.3" nos ayuda con la parte de autentificacion
    "method-override": "^3.0.0" nos ayuda a mandar peticiones PUT y DELETE en un formulario
    "mongoose": "^6.7.0" es el drive que nos facilita manejarnos con la base de datos
    "mongoose-paginate-v2": "^1.7.1" nos ayuda a realizar una paginacion
    "multer": "^1.4.5-lts.1"nos ayuda a la hora de subir archivos binarios en nuestros fomularios
    "passport": "^0.6.0" nos ayuda con el tema de armado de la autentificacion
    "passport-local": "^1.0.0" nos ayuda con el tema de armado de la autentificacion
    "slugify": "^1.6.5" nos ayuda a decorar al url para que sea mejor leida para el usuario
