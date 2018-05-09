import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import { Link, Route } from 'react-router-dom';

class Stocks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stocks = this.props.data;
    let match = this.props.match;
    console.log(this.props);
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">Your Stocks:</h1>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                {Object.entries(stocks).map((key, index) => {
                  return (
                    <div className="tile is-parent" key={index}>
                      <Link
                        to={`/indepth/${key[1].quote.symbol}`}
                        className="tile is-child notification is-info box"
                      >
                        <p className="subtitle">{key[1].quote.companyName}:</p>
                        <p className="subtitle">{key[1].quote.symbol}</p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* <Route
          path={`/indepth/:id`}
          render={({ match }) => {
            console.log(match);
            return (
              <div>
                <h3>/hello</h3>
              </div>
            );
          }}
        /> */}
      </div>
    );
  }
}

export default Stocks;
