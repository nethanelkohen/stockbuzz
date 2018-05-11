import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import Footer from './Footer';

import { Link } from 'react-router-dom';

class Stocks extends Component {
  render() {
    let stocks = this.props.data;
    console.log(stocks);
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">Daily Roundup:</h1>
            <div className="tile is-ancestor ">
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
                        <p className="subtitle ">
                          <strong>{key[1].quote.symbol}</strong>
                        </p>
                        {/* <p className="subtitle">
                          <strong>{key[1].quote.companyName}</strong>
                        </p> */}
                        <p className="subtitle">
                          <strong>
                            Opening Price: ${key[1].chart[22].open.toFixed(0)}
                          </strong>
                        </p>
                        <p className="subtitle">
                          <strong>
                            Closing Price: ${key[1].chart[22].close.toFixed(0)}
                          </strong>
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Stocks;
