# Proyecto-1-Telematica

Esta Aplicación fue desarrollada con el propósito de registrar datos de GPS de uno o varios usuarios y que puedan ser visualizados una vez se haya iniciado sesion en la aplicación,
el ingreso de los datos se hace por medio de la herrmienta POSTMAN.

Requisitos funcionales
===========
+ Se cuenta con un modelo básico de operaciones CRUD a la hora de registrar y almacenar nuevos usuarios, y nuevos datos de GPS.
+ El usuario debe loguearse a la aplicación para visualizar los datos.
+ Todos los datos relacionados a los usuarios y sus GPS deberán visualizarse una vez el usuario inicie sesión. 
+ El usuario que se registre por primera vez podrá autenticarse luego al iniciar sesión.

Requisitos no funcionales
============
+ Se podrán visualizar los datos de usuarios y GPS en forma de tabla
+ Se verificará si el email ingresado cumple con un estandar.
+ La respuesta a la petición de los datos que serán luego visualizados podrán


Configuracíon inicial
======================
Si se desea clonar este proyecto se debe previamente instalar en el ordenador
NodeJS y MongoDb y con respecto a reactJS los modulos necesarios 
ya hacen parte de este proyecto. Cada sistema operativo tiene sus propios requisitos. 
Puede consultar las páginas oficiales para encontrar información sobre
Cómo instalar esas herramientas.


Módulos de NodeJS
=================
Hay muchos módulos de Node utilizados para que la aplicación se ejecute.
Si desea (y necesita) instalarlos en caso de que requieran actualización o modificación

BackEnd:
```
npm i express jsonwebtoken bcryptjs cors axios body-parser morgan mongoose passport passport-local \
 bcryptjs nodemon --save
 ```
FrontEnd:
```
npm i jwt-decode react react-dom react-router-dom react-scripts
```
Despliegue y ejecución
=================

Para ejecutar la aplicación se deben utilizar los siguientes comandos en dos terminales diferentes, una para ejecutar el BackEnd y otra para el frontEnd

+ Para el backend:
 
 ```
 Ir al directorio del proyecto
$ cd proyecto-1-Telematica
$ cd backend
$npm run dev
```
+ Para ejecutar el frontEnd:
```
 Ir al directorio del proyecto
$ cd proyecto-1-Telematica
$ cd frontend
$npm start
```
Registro de usuarios
================

![Test Image 7](https://github.com/zitrot/Proyecto-1-Telematica/blob/master/Imagenes/registro.png)

Inicio de sesion
==============

![Test Image 7](https://github.com/zitrot/Proyecto-1-Telematica/blob/master/Imagenes/iniciosesion.png)

registro de datos
===========

![Test Image 7](https://github.com/zitrot/Proyecto-1-Telematica/blob/master/Imagenes/postman.png)


Agradecimientos
===============

[Fazt tutorial](https://www.youtube.com/watch?v=DqpL5UtJHus) 

