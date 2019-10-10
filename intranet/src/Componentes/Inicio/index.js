// Dependencies
import React, { Component } from 'react';
import Sidebar from "../Global/Sidebar";
import axios from 'axios';
import Carrusel from './Carrousel';
//import '../Global/css/Register/register.css';
//import '../Global/css/Global/content.css';
import data from "../Global/datos.json"; 
const empleados = data.empleados;
class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }
    componentWillMount() {
        document.title = 'Inicio';
       /* axios.get('../Global/datos.json') // JSON File Path
            .then(response => {
                this.setState({

                    empleados: response.data.empleados
                });
            })
            .catch(function (error) {
                console.log(error);
            });
            */

    }
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper">

                    <div className="container-fluid">

                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">
                                <a href="/">Inicio</a>
                            </li>
                        </ol>

                        <div className="card mb-3">
                            <div className="card-header">
                                <i className="fas fa-address-book m-2"> </i>
                                Directorio Institucional
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                            <th>Nombre</th>
                                                <th>Dirección</th>
                                                <th>Unidad</th>
                                                <th>Correo</th>
                                                <th>Extensión</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Dirección</th>
                                                <th>Unidad</th>
                                                <th>Correo</th>
                                                <th>Extensión</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {
                                                empleados.map(
                                                    elemento => <tr key={elemento.id}>
                                                        <td>{elemento.nombre}</td>
                                                        <td>{elemento.direccion}</td>
                                                        <td>{elemento.unidad}</td>
                                                        <td>{elemento.email}</td>
                                                        <td>{elemento.ext}</td>
                                                    </tr>)
                                            }
                                          

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default Inicio;
