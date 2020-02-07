const express = require("express")
const usuarios = express.Router()
const cors = require("cors")
 const jwt = require("jsonwebtoken")
 const bcryptjs = require("bcryptjs")
 const Usuario = require("../modelos/usuario")

usuarios.use(cors())

 process.env.SECRET_KEY = 'secret'

 usuarios.post('/registrar',(req,res)=>{
     const hoy = new Date()
     
     const UsuarioData = {
         
         primer_nombre : req.body.primer_nombre,
         segundo_nombre: req.body.segundo_nombre,
         email:req.body.email,
         contraseña: req.body.contraseña,
         creado:hoy
     }
     console.log(UsuarioData)
     Usuario.findOne({
         usuario : req.body.usuario
     })
     .then(usuario =>{
         if(!usuario){
             bcryptjs.hash(req.body.contraseña,10,(err,hash)=>{
                 UsuarioData.contraseña = hash
                 Usuario.create(UsuarioData)
                 .then(usuario =>{
                     res.json({status: usuario.email + 'registrado!'})
                 })
                 .catch(err=>{
                     res.send('error:' +err)
                 })
             })
         }else{
             res.json({error: 'el usuario ya existe'})
         }
     })
     .catch(err => {
         res.send('error' + err)
     })
 })
usuarios.post('/login',(req,res,next)=>{
    Usuario.findOne({
    usuario:req.body.usuario

    })
    .then(usuario =>{
        if(usuario){
            if(bcryptjs.compareSync(req.body.contraseña,usuario.contraseña)){
                const payload = {
                    _id: usuario._id,
                    primer_nombre : usuario.primer_nombre,
                    segundo_nombre:usuario.segundo_nombre,
                    email: usuario.email
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY,{
                   expiresIn: 1440 
                })
                res.send(token)
            }else{
                res.json({error:"verificar contraseña"})
            }
        }else{
            res.json({error:"usuario no existe"})
        }
    })
    .catch(err =>{
        res.send('error '+err)
    })
})

    usuarios.get('/profile',(req,res)=>{

        var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
        Usuario.findOne({
            _id: decoded._id
        })
        .then(usuario=>{
            if(usuario){
                res.json(usuario)
            }else{
                res.send("usuario no existe");
            }
        })
        .catch(err =>{
            res.send('error '+err)
        })
    })

 module.exports= usuarios