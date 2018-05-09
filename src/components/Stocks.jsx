import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stocks = this.props.data;
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">
              Your Hand Picked Stocks:
            </h1>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                {Object.entries(stocks).map((key, index) => {
                  return (
                    <div className="tile is-parent">
                      <a className="tile is-child notification is-info box">
                        <p className="subtitle">{key[1].quote.companyName}:</p>
                        <p className="subtitle">{key[1].quote.symbol}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
