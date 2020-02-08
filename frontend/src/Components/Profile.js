import React,{Component} from 'react'

class profile extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            tareas: []

        };
        this.fetchTareas = this.fetchTareas.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

 

fetchTareas(e){
    const token = localStorage.usertoken
    if(!token){
        alert("Ingrese sesion para ver los registros de datos")
    }
    else{
    fetch('http://localhost:3001/api/tareas/')
    .then(res =>res.json())
    .then(data =>{
        this.setState({tareas: data});
        console.log(this.state.tareas);
    });
    
}
}
handleChange(e){
    const {name,value} = e.target;
    this.setState({
        [name]:value
    });
}
componentDidMount(){
    this.fetchTareas();
}
    render() {
        return ( 
        <div> 
        < nav className = "ligth-blue darken-3" > 
        < div className = "container" > 
        < a className = "brand-logo"href = "/" > Proyecto 1 
        </a>
        </div>
        </nav> 
        <div className="container">
            <div className ="row">
                
                <div className= "col s7">
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Registro de datos</th>
                            </tr>   
                         </thead>  
                         <tbody>
                        {this.state.tareas.map(tarea => {
                            return (
                                <tr key={tarea._id}>
                        <td>{tarea.title}</td>
                        <td>{tarea.description}</td>
                                </tr>
                            )
                        })}
                         </tbody> 
                    </table>
                </div>
            </div>
        </div>
    </div> 
        )
    }
}
    export default profile;