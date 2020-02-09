import React , {Component} from 'react'
import {register} from './FuncionesUsuario'

class Register extends Component {

    constructor(){
        super()
        this.state ={
            primer_nombre:'',
            segundo_nombre:'',
            email: '',
            contraseña: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const usuario = {
            primer_nombre: this.state.primer_nombre,
            segundo_nombre: this.state.segundo_nombre,
            email: this.state.email,
            contraseña: this.state.contraseña
        }

        register(usuario).then(res =>{
            if(res){
                this.props.history.push('/login')
            }
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-6 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h1 md-3 font-weight-normal">Registro de usuario</h1>
                            <div className="form-group">
                                <label > primer nombre</label>
                                <input type="text" className="form-control" name="primer_nombre" placeholder="Ingresar primer nombre" value={this.state.primer_nombre} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label > segundo nombre</label>
                                <input type="text" className="form-control" name="segundo_nombre" placeholder="Ingresar segundo nombre" value={this.state.segundo_nombre} onChange={this.onChange}/>
                            
                            </div>
                            <div className="form-group">
                                <label > dirección email</label>
                                <input type="email" className="form-control" name="email" placeholder="Ingresar correo" value={this.state.email} onChange={this.onChange}/>
                            </div>

                            <div className="form-group">
                                <label > Contraseña</label>
                                <input type="password" className="form-control" name="contraseña" placeholder="Ingresar conraseña" value={this.state.contraseña} onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Iniciar sesion</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}
export default Register