import React,{Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Landing from './Landing'

class Navbar extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')

    }

    render(){
        const loginRegLink =(
            <ul className = "navbar-nav">
                <li className="nav-item" >
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link to="/registro" className="nav-link">
                        Registro
                    </Link>
                </li>
            </ul>
        )
        const userLink =(
            <ul className = "navbar-nav">
            <li className="nav-item" >
                <Link to="/profile" className="nav-link">
                    Usuario
                </Link>
            </li>
            <li className="nav-item" >
                <a href="" onClick = {this.logOut.bind(this)}  className="nav-link">
                    Cerrar sesion
                </a>
            </li>
        </ul>
            )
            return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" >
                        <span className="navbar-togler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Inicio
                                </Link>
                            </li>
                        </ul>
                        {localStorage.usertoken ? userLink:loginRegLink}
                    </div>
                </nav>
            )
    
    }
}

export default withRouter(Navbar)