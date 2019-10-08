import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgFooter from "./images/footer.jpg";

class Footer extends Component {

    static propTypes = {
       // title: PropTypes.string.isRequired
    };
    render() {
        const { title, items } = this.props;
        return (
            <ul className="sidebar navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Municipalidad de Belén</span>
                    </a>

                </li>
               
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Organización</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="pagesDropdown">

                    <div className="dropdown-divider"></div>
                        <h6 className="dropdown-header">Principal:</h6>
                        <a className="dropdown-item " href="/concejo">Concejo</a>
                        <a className="dropdown-item " href="/alcaldia">Alcaldía</a>
                        <h6 className="dropdown-header">Áreas:</h6>
                        <a className="dropdown-item " href="#">Financiera</a>
                        <a className="dropdown-item " href="#">Operativa</a>
                        <a className="dropdown-item " href="#">Serv. Públicos</a>
                        <a className="dropdown-item" href="#">Des. Social</a>
                        <div className="dropdown-divider"></div>
                        <h6 className="dropdown-header">Otros</h6>
                        <a className="dropdown-item" href="/organizacion">Organigrama</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/forms">
                        <i className="fas fa-fw fa-file"></i>
                        <span>Formularios</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/forms">
                        <i className="fas fa-fw fa-folder-open"></i>
                        <span>Manuales</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/forms">
                        <i className="fas fa-fw fa-file-pdf"></i>
                        <span>Procedimientos</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-comment-alt"></i>
                        <span>Acerca de...</span></a>
                </li>
                
            </ul>
        );
    }
}

export default Footer;
