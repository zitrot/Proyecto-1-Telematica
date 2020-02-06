const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");

const { mongoose } = require('./database');

const app = express();



//configuraciones
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
app.use(express.json()); //verificar si los datos vienen en formato json
//rutasS-se declaran las rutas que esten en otros archivos js
app.use('/api/tareas', require('./rutas/Tarea_Rutas'));
const Usuarios = require('./rutas/Usuarios')
app.use('/Usuarios',Usuarios)
//archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));
//inicializar server
app.listen(app.get('port'), () => {
    console.log('server active');
});