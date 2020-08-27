import React, { Component } from 'react';
import './register.css';

import Api from '../../services/api';

class Register extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name: '',
            gender: 'F',
            bDate: '', 
        };

    }

    componentDidMount() {
        if (typeof this.props.user !== "undefined") {
            this.setState(this.props.user);
        }
    }

    _field(e) {
        this.setState({
           [e.target.name]: e.target.value 
        });
    }

    _register() {

        Api.register(this.state).then(data => {
            // Todo
        }).catch(error => {
            // Todo
        });

    }

    _edit() {
        Api.update(this.state).then(data => {
            console.log(data);
        }).catch(error => { 
            console.log(error);
        });
    }

    render() {
        return(<div className="register-form">
            <input type="text" placeholder="Nombre" name="name" value={this.state.name} onChange={(e) => {
                this._field(e);
            }} />
            <select name="gender" value={this.state.gender} onChange={(e) => {
                this._field(e);
            }}>
                <option value="F">
                    Femenino
                </option>
                <option value="M">
                    Masculino
                </option>
            </select>
            <input type="date" value={this.state.bDate} placeholder="Fecha de nacimiento" name="bDate" onChange={(e) => {
                this._field(e);
            }}/>
            <button onClick={() => {
                if (typeof this.props.edit !== "undefined" && this.props.edit) {
                    this._edit();
                } else {
                    this._register();
                }
                
            }}>
                {typeof this.props.edit !== "undefined" && this.props.edit ? 'Editar' : 'Registrar'}
            </button>
        </div>);
    }

}


export default Register;