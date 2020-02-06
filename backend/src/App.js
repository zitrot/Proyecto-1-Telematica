import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Navbar from './Componentes/Navbar'
import Landing from './Componentes/Landing'
import Login from './Componentes/Login'
import Register from './Componentes/Registro'
import Profile from './Componentes/Profile'

class App extends Component {
    render(){
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing}/>
                    <div className="container">
                        <Route exact path="/registro" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/profile" component={Profile}/>
                        
                    </div>
                </div>
                </Router>
        );
    }
}

   
    export default App;