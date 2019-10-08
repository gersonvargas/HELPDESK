// Dependencies
import React, { Component } from 'react';
import Sidebar from "../Global/Sidebar";
import register_img from "../Global/images/register.png";
//import '../Global/css/Register/register.css';
//import '../Global/css/Global/content.css';

class Forms extends Component {
    componentWillMount() {
        document.title = 'FORM'
    }
    render() {
        return (

            <div id="wrapper">
                <Sidebar />

                <div id="content-wrapper">

                    <div className="container-fluid">

                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">
                                <a href="/forms">FORMULARIOS INFORMÁTICA</a>
                            </li>
                        </ol>

                        <div className="row">
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-primary o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i class="fas fa-fw fa-tv"></i>
                                        </div>
                                        <div className="mr-5"> PERMISOS SIGMB</div>

                                    </div>
                                    <a className="card-footer text-white clearfix small z-1" href="#">
                                        <span className="float-left">Ir al formulario</span>
                                        <span className="float-right">
                                            <i className="fas fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-warning o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i class="fas fa-fw fa-database"></i>
                                        </div>
                                        <div className="mr-5">BASE DE DATOS</div>
                                    </div>
                                    <a className="card-footer text-white clearfix small z-1" href="#">
                                        <span className="float-left">Ir al formulario</span>
                                        <span className="float-right">
                                            <i className="fas fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-success o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i class="fab fa-fw fa-windows"></i>

                                        </div>
                                        <div className="mr-5">Sistema Operativo</div>
                                    </div>
                                    <a className="card-footer text-white clearfix small z-1" href="#">
                                        <span className="float-left">Ir al formulario</span>
                                        <span className="float-right">
                                            <i className="fas fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-danger o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i class="fas fa-fw fa-envelope-open-text"></i>
                                        </div>
                                        <div className="mr-5">Correo Electrónico</div>
                                    </div>
                                    <a className="card-footer text-white clearfix small z-1" href="#">
                                        <span className="float-left">Ir al fomulario</span>
                                        <span className="float-right">
                                            <i className="fas fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                         
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Forms;
