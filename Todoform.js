import React, {Component} from 'react';
import Todoform from './Todoform.css';

class TodoForm extends Component {
    constructor () {
      super();
      this.state = {
        nombre: '',
        apellido: '',
        email:'',
        telefono:'',
        password: '',
        repetir_password:''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
        this.setState({
        nombre: '',
        apellido: '',
        email:'',
        telefono:'',
        password: '',
        repetir_password:''
      });
    }
  
    handleInputChange(e) {
      const {value, name} = e.target;
      console.log(value, name);
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <div className="forma">
          <h1>Formulario de Registro</h1>
          <form onSubmit={this.handleSubmit} className="forma-body">
            <div className="forma-group">
              <input
                type="text"
                name="nombre"
                className="forma-control"
                value={this.state.nombre}
                onChange={this.handleInputChange}
                placeholder="Nombre"
             />
            </div>
            <div className="forma-group">
              <input
                type="text"
                name="apellido"
                className="forma-control"
                value={this.state.apellido}
                onChange={this.handleInputChange}
                placeholder="Apellido"
                />
            </div>
            <div className="forma-group">
              <input
                type="text"
                name="email"
                className="forma-control"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Email"
                />
            </div>
            <div className="forma-group">
            <input
                type="text"
                name="telefono"
                className="forma-control"
                value={this.state.telefono}
                onChange={this.handleInputChange}
                placeholder="Teléfono"
                />
            </div>
            <div className="forma-group">
            <input
                type="password"
                name="password"
                className="forma-control"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="Password"
                />
            </div>
            <div className="forma-group">
            <input
                type="password"
                name="repetir_password"
                className="forma-control"
                value={this.state.repetir_password}
                onChange={this.handleInputChange}
                placeholder="Repetir Password"
                />
            </div>
            <button type="submit" >
              Enviar información
            </button>
          </form>
        </div>
      )
    }
  
  }
  
  export default TodoForm;