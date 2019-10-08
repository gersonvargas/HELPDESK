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
      <footer className="sticky-footer">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright © Municipalidad de Belén 2019.</span>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;