import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>
                Built by
                <a href="https://github.com/nethanelkohen"> Nethanel Kohen </a>
                for Agency Within
              </strong>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
