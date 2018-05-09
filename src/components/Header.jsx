import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import logo from '../assets/lightning.png';

class Header extends Component {
  render() {
    return (
      // <section className="hero">
      //   <div className="hero-body">
      //     <div className="container">
      //       <h1 className="title">Nethanel Kohen</h1>
      //       <h2 className="subtitle">Agency Within - Developer Test</h2>
      //     </div>
      //   </div>
      // </section>
      // <section class="hero is-medium is-primary is-bold">
      //   <div class="hero-body">
      //     <div class="container">
      //       <h1 class="title">Nethanel Kohen</h1>
      //       <h2 class="subtitle">stockBuzz</h2>
      //     </div>
      //   </div>
      // </section>
      <section class="hero is-primary is-small">
        <div class="hero-body">
          <div class="container has-text-centered">
            <img src={logo} alt="Logo" />
            <h1 class="title">STOCKBUZZ</h1>
            <img src={logo} alt="Logo" />

            {/* <h2 class="subtitle">
              <img src={logo} alt="Logo" />
            </h2> */}
          </div>
        </div>

        {/* <div class="hero-foot">
          <nav class="tabs">
            <div class="container">
              <ul>
                <li class="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div> */}
      </section>
    );
  }
}

export default Header;
