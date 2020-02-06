const mongoose = require('mongoose')
const schema = mongoose.Schema
const UsuarioSchema = schema({
    primer_nombre: {type:String},
    segundo_nombre:{type:String},
    email:{type:String, required: true},
    contraseña:{type: String, required: true},
    fecha:{type: Date, deault: Date.now}
})

module.exports = usuario = mongoose.model('Usuarios',UsuarioSchema)