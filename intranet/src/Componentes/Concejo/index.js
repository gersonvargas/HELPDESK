// Dependencies
import React, { Component } from 'react';

import Sidebar from "../Global/Sidebar";
import Card from '../Compartidos/Card';

import meeting from "../Global/iconos/meeting.png";
import avatar from "../Global/iconos/img_avatar.png";
import woman from "../Global/iconos/woman.png";

class Organizacion extends Component {
    componentWillMount() {
        document.title = 'Concejo'
    }

    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Concejo</li>
                            </ol>
                        </nav>
                        <div className="row">

                            <div className="card-group">
                                <div className="card col-xl-3 col-sm-3 m-3 border-0">
                                    <img className="card-img-top" src={meeting} alt="Card image" />
                                </div>
                                <div className="card col-xl-8 col-sm-8 mb-8 border-0">
                                    <div className="card-body">
                                    <h4 className="card-title">Concejo  municipal  de  distrito:</h4>
                                        <p className="card-text"> Órgano  con  autonomía  funcional   propia   y   con   competencias   locales   que   le   permiten   convenir   en   toda   especie   de   alianza   con   la   municipalidad   del   cantón   y   con   entes   públicos   no   territoriales,  percibir  directamente  las  tasas  y  los  precios  por  los  servicios  distritales,  así  como  tener  participación  en   las   patentes   por   las   actividades   efectuadas   en   el   distrito  y  en  los  impuestos  municipales. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Secretarias Concejo</h4>
                        <div className="row">

                            <div className="card-group border-0 col-xl-7 col-sm-7 m-4">
                               <Card nombre="Patricia Murillo D." avatar={woman} puesto="Secretaria" />
                                <Card nombre="Ana Quesada V." avatar={woman} puesto="Secretaria" />

                            </div>

                        </div>
                        <h4>Miembros Auditoría</h4>
                        <div className="row">

                            <div className="card-group border-0 col-xl-12 col-sm-12 m-12">
                                <Card nombre="Maribelle Sancho G." avatar={woman} puesto="Coordinadora" />
                                <Card nombre="Éricka Reyes G." avatar={woman} puesto="Auditora" />
                                <Card nombre="Sergio Vargas F." avatar={avatar} puesto="Auditor" />
                                <Card nombre="Juan Valerín M." avatar={avatar} puesto="Auditor" />

                            </div>

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Organizacion;
