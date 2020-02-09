# Proyecto-1-Telematica

Esta Aplicación fue desarrollada con el propósito de registrar datos de GPS de uno o varios usuarios y que puedan ser visualizados una vez se haya iniciado sesion en la aplicación,
el ingreso de los datos se hace por medio de la herrmienta POSTMAN.

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
npm i express jsonwebtoken bcryptjs cors axios body-parser morgan mongoose passport passport-local \
 bcryptjs nodemon --save
 
FrontEnd:
npm i jwt-decode react react-dom react-router-dom react-scripts

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

