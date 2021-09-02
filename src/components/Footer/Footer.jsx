import './Footer.css';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-page">
        <p>
          Desenvolvido com
          {' '}
          <span className="hurt">&#128156;</span>
          <strong> | React </strong>
          |
          <strong> HTML</strong>
          |
          <strong> CSS | </strong>
          por
          <strong className="developer"> Carlos Barros.</strong>
        </p>
      </footer>
    );
  }
}

export default Footer;
