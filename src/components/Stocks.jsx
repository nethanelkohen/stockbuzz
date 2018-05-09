import React, { Component } from 'react';
import 'bulma/css/bulma.css';

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
            <h1 className="title">Your Hand Picked Stocks:</h1>
            {Object.entries(stocks).map((key, index) => {
              return (
                <ul key={index}>
                  <li>
                    <h2 className="subtitle">
                      {key[1].quote.companyName}: {key[1].quote.symbol}
                    </h2>
                  </li>
                </ul>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
