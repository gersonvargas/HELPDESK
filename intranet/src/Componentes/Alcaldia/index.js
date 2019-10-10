// Dependencies
import React, { Component } from 'react';
import Sidebar from "../Global/Sidebar";
import Card from '../Compartidos/Card';

import avatar from "../Global/iconos/img_avatar.png";
import woman from "../Global/iconos/woman.png";
import gobierno_central from "../Global/iconos/central-park.png";

import data from "../Global/datos.json";
const empleados = data.empleados;

class Organizacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos_empleados: []

        }
        //this.handleChange = this.handleChange.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.filtrarLocalizacion = this.filtrarLocalizacion.bind(this);
        
    }
    filtrarLocalizacion(array, str_val) {
        var updatedList = array;
        updatedList = updatedList.filter(function (item) {
            return item.unidad.toLowerCase().search(
                str_val.toLowerCase()) !== -1;
        });
        return updatedList;
    }
    componentWillMount() {
        document.title = 'Alcaldía';
        var llocation = this.filtrarLocalizacion(empleados, "Alcaldia");
        this.setState({
            isfiltrado: true,
            datos_empleados: llocation
        });
    }

  
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Inicio</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Alcaldía</li>
                            </ol>
                        </nav>
                        <div className="row">

                            <div className="card-group">
                                <div className="card col-xl-3 col-sm-3 mb-3 border-0">
                                    <img className="card-img-top" src={gobierno_central} alt="Card image" />
                                </div>
                                <div className="card col-xl-9 col-sm-9 mb-9 border-0">
                                    <div className="card-body">
                                        <h4 className="card-title">Alcaldía Municipal:</h4>
                                        <p className="card-text"> Un ayuntamiento, alcaldía o municipalidad es la organización que se encarga de la administración local en un pueblo o ciudad, compuesta por un alcalde y varios concejales para la administración de los intereses de un municipio. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Miembros Alcaldía</h4>
                        <div className="row">

                            <div class="card-group border-0 col-xl-12 col-sm-12 mb-12">
                                {
                                    this.state.datos_empleados.map(
                                        elemento => 
                                        
                                          <Card key={elemento.id} nombre={elemento.nombre} avatar={elemento.sexo=="F" ? woman : avatar} puesto={elemento.puesto} />
                                        )
                                }

                            </div>

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Organizacion;
