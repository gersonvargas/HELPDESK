// Dependencies
import React, { Component } from 'react';
import register_img from "../Global/images/registro.jpg";
import Sidebar from "../Global/Sidebar";

class Organizacion extends Component {
    componentWillMount() {
        document.title = 'Organigrama'
    }
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">
                                <a href="/alcaldia">MIEMBROS</a>
                            </li>
                        </ol>
                        <div className="row">
                            <div class="card-group">
                                <div class="card">
                                    <img class="card-img-top" src={register_img} alt="Card image" />
                                    <div class="card-body">
                                        <h4 class="card-title">John Doe</h4>
                                        <p class="card-text">Some example text.</p>
                                        <a href="#" class="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                                <div class="card bg-warning">
                                    <div class="card-body text-center">
                                        <p class="card-text">Some text inside the second card</p>
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

export default Organizacion;
