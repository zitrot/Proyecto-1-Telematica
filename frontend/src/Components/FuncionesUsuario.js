import axios from 'axios'

export const register = nuevoUsuario =>{
    return axios
    .post("http://localhost:3001/Usuarios/registrar",{
        primer_nombre: nuevoUsuario.primer_nombre,
        segundo_nombre : nuevoUsuario.segundo_nombre,
        email:nuevoUsuario.email,
        contraseña: nuevoUsuario.contraseña
    })
    .then(res=>{
        console.log("Registrado!")
    })

}

export const login= usuario =>{
    return axios
    .post("http://localhost:3001/Usuarios/login",{
        email:usuario.email,
        contraseña:usuario.contraseña
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data)
        return res.data
    })
    .catch(err =>{
        console.log(err)
    })
}

export const getProfile = usuario => {
    return axios
      .get('/api/tareas', {
        headers: { Authorization: ` ${this.getToken()}` }
      })
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
