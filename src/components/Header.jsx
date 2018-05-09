import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import logo from '../assets/lightning.png';

class Header extends Component {
  render() {
    return (
      <section className="hero is-dark is-small is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src={logo} alt="Logo" />
            <h1 className="title has-text-white ">stockbuzz</h1>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
