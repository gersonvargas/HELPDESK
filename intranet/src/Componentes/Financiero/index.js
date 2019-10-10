// Dependencies
import React, { Component } from 'react';
import Sidebar from "../Global/Sidebar";
import Card from '../Compartidos/Card';

import avatar from "../Global/iconos/img_avatar.png";
import woman from "../Global/iconos/woman.png";
import gobierno_central from "../Global/iconos/central-park.png";

class Financiero extends Component {
    componentWillMount() {
        document.title = 'Financiero'
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
                                <li class="breadcrumb-item active" aria-current="page">Financiero</li>
                            </ol>
                        </nav>
                        <div className="row">

                            <div className="card-group">
                                <div className="card col-xl-3 col-sm-3 mb-3 border-0">
                                    <img className="card-img-top" src={gobierno_central} alt="Card image" />
                                </div>
                                <div className="card col-xl-9 col-sm-9 mb-9 border-0">
                                    <div className="card-body">
                                        <h4 className="card-title">Área Administrativa Financiera:</h4>
                                        <p className="card-text">
                                            Está integrada por los procesos Financieros y Administrativos.
                                            Debe señalarse que inmerso al Área se encuentra una actividad general de coordinación a
                                            desarrollar por el Director Administrativo Financiero, cuya finalidad es garantizar su eficaz,
                                             eficiente y ordenado funcionamiento, mediante la elaboración de productos.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Miembros Área Administrativa Financiera</h4>
                        <div className="row">

                            <div class="card-group border-0 col-xl-12 col-sm-12 mb-12">
                                <Card nombre="Jorge Gonzalez G." avatar={avatar} puesto="Director" />
                                <Card nombre="Ivannia Zumbado L." avatar={woman} puesto="Coordinadora" />
                                <Card nombre="Florencia Murillo G." avatar={woman} puesto="Coordinadora" />
                                <Card nombre="Hazell Sanabria S." avatar={woman} puesto="Coordinadora" />
                                <Card nombre="Andrea Arce B." avatar={woman} puesto="Coordinadora" />
                            </div>

                        </div>
                        <div className="row">

                            <div class="card-group border-0 col-xl-12 col-sm-12 mb-12">
                                <Card nombre="Gonzalo Zumbado Z." avatar={avatar} puesto="Coordinador" />
                                <Card nombre="Ronald Zumbado Z." avatar={avatar} puesto="Coordinador" />
                                <Card nombre="Sandra Calderón F" avatar={woman} puesto="Coordinadora" />
                                <Card nombre="Marcos Porras Q." avatar={avatar} puesto="Coordinador" />
                                <Card nombre="Gerardo Villalobos A" avatar={avatar} puesto="Gestión Tributaria" />
                            </div>

                        </div>
                        <div className="row">
                            <div class="card-group border-0 col-xl-12 col-sm-12 mb-12">
                                <Card nombre="Dennis Román Mora." avatar={avatar} puesto="Bienes y Serv" />
                                <Card nombre="Gerardo Vargas Z." avatar={avatar} puesto="Bienes y Serv" />
                                <Card nombre="Hazell Rodríguez V." avatar={woman} puesto="Bienes y Serv" />
                                <Card nombre="Julieta Zumbado R." avatar={woman} puesto="Bienes y Serv" />
                                <Card nombre="Daniel Vargas R" avatar={avatar} puesto="Bienes y Serv" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Financiero;
