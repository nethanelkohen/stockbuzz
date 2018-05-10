import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import { Link } from 'react-router-dom';

class Stocks extends Component {
  render() {
    let stocks = this.props.data;
    console.log(stocks);
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">Your Stocks:</h1>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                {Object.entries(stocks).map((key, index) => {
                  return (
                    <div
                      className="tile is-parent has-text-centered"
                      key={index}
                    >
                      <Link
                        to={`/indepth/${key[1].quote.symbol}`}
                        className="tile is-child notification is-info box"
                      >
                        <p className="subtitle">{key[1].quote.companyName}:</p>
                        <p className="subtitle">{key[1].quote.symbol}</p>
                        <p className="subtitle">
                          Opening Price: ${key[1].chart[22].open.toFixed(0)}
                        </p>
                        <p className="subtitle">
                          Closing Price: ${key[1].chart[22].close.toFixed(0)}
                        </p>
                      </Link>
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

export default Stocks;
