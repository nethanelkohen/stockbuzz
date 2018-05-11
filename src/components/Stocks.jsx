import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '../App.css';

class Stocks extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let data = this.props.data;
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">Daily Roundup:</h1>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                {Object.entries(data).map((key, index) => {
                  let length = key[1].chart.slice(-1);
                  return (
                    <div
                      className="tile is-parent has-text-centered"
                      key={index}
                    >
                      <Link
                        to={`/indepth/${key[1].quote.symbol}`}
                        className="tile is-child notification is-dark is-bold box"
                      >
                        <p className="subtitle ">
                          <strong>{key[1].quote.symbol}</strong>
                        </p>
                        <p className="subtitle">
                          <strong>
                            Opening Price: ${length[0].open.toFixed(2)}
                          </strong>
                        </p>
                        <p className="subtitle">
                          <strong>
                            Closing Price: ${length[0].close.toFixed(2)}
                          </strong>
                        </p>
                        <p className="subtitle">
                          <strong>
                            Percentage Change:
                            <br />
                            {length[0].changePercent.toFixed(2)}%
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
