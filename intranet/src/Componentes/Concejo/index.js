// Dependencies
import React, { Component } from 'react';
import register_img from "../Global/images/organigrama.jpg";
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
                                <a href="/organizacion">ORGANIGRAMA</a>
                            </li>
                        </ol>
                        <div className="row">
                            <img className="img img-responsive img-fluid" src={register_img} alt="Register" />

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Organizacion;
