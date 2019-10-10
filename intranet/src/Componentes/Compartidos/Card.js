import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: this.props.avatar,
            nombre: this.props.nombre,
            puesto: this.props.puesto
        }
    }
    render() {
        return (
            <div className="card m-3">
                <img className="card-img-top" src={this.state.avatar} alt="Card image" />
                <div className="card-body">

                    <p className="card-title">{this.state.nombre}</p>
                    <p className="text-muted">
                        {this.state.puesto}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;