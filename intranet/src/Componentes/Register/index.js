// Dependencies
import React, { Component } from 'react';
import register_img from "../Global/images/register.png";
import Sidebar from "../Global/Sidebar";

class Register extends Component {
    componentWillMount() {
        document.title = 'Registrarse'
    }
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                <div className="card  bg- o-hidden h-100">
                                    <div className="card-body">
                                        <img className="img img-responsive img-fluid" src={register_img} alt="Register" />
                                        <form className="register-form" action="" method="">
                                        <fieldset className="scheduler-border">
                                            <legend className="scheduler-border text-center">Registro</legend>
                                            <div className="row m-2">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <input className="form-control" type="text" placeholder="Nombre de usuario" required />
                                                </div>
                                            </div>
                                            
                                            <div className="row m-2">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <input className="form-control" type="email" placeholder="Email" required />
                                                </div>
                                            </div>

                                            <div className="row m-2">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <select className="form-control" id="province" name="province" required>
                                                        <option value="">Departamento</option>
                                                        <option value="1">Alcaldía</option>
                                                        <option value="2">Concejo</option>
                                                        <option value="3">Financiero</option>
                                                        <option value="4">Serv. Públicos</option>
                                                        <option value="5">Tec. Operativa</option>
                                                        <option value="6">Des. Social</option>
                                                        <option value="7">Otro...</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row m-2">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <input className="form-control" type="password" placeholder="Clave" required />
                                                </div>
                                            </div>

                                            <div className="row m-2">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <input className="form-control" type="password" placeholder="Confirmar clave" required />
                                                </div>
                                            </div>                            


                                            <div className="row m-3">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                                                    <button className="btn btn-success float-right" type="button" name="finalize">Registrar</button>
                                                    <button className="btn btn-danger float-right mr-3" type="button" name="cancel">Cancelar</button>
                                                    
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                    </div>
                                </div>
                            </div>
                          

                        </div>

                    </div>
                </div>

            </div>


        );
    }
}

export default Register;
