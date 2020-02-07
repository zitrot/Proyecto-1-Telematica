import React , {Component} from 'react'
import {login} from './FuncionesUsuario'

class Login extends Component {

    constructor(){
        super()
        this.state ={
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
            email: this.state.email,
            contraseña: this.state.contraseña
        }

        login(usuario).then(res =>{
            if(!res.error){
                this.props.history.push('/profile')
            }else{
                alert(res.error)
            }
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-6 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h1 md-3 font-weight-normal">Iniciar sesion</h1>
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
export default Login