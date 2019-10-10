import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carrusel from '../Inicio/Carrousel';
import Logo from "./images/logo_mb.png";
import Login from "../Login";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        };
        this.handleShowLogin = this.handleShowLogin.bind(this);
    }
    handleShowLogin() {
       
        this.setState({ showLogin: !this.state.showLogin });
    }
    static propTypes = {
      //  title: PropTypes.string.isRequired
    };

    render() {
        const { title, items } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark static-top" id="">
                    <img src={Logo} className="img-fluid mr-3 img-logo-p" width='3%' alt="about us" id="" />
                    <a className="navbar-brand mr-1" href="/">INTRANET</a>

                    <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                        <i className="fas fa-bars"></i>
                    </button>

                    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                <span className="badge badge-danger m-0">9+</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-envelope fa-fw"></i>
                                <span className="badge badge-danger m-0">7</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user-circle fa-fw"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="/register">Registrarse</a>
                                <Login />
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal"
                                    data-target="#logoutModal">Logout</a>
                            </div>
                        </li>

                    </ul>

                </nav>

               

                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-0">


                </div>

            </div>

        );
    }
}

export default Header;
