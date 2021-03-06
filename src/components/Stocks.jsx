import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '../App.css';

class Stocks extends Component {
  state = {
    inputField: ''
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  submitHandler = evt => {
    evt.preventDefault();
    this.props.handlerFromParent(this.state.inputField);
    this.setState({
      inputField: ''
    });
  };

  handleChange = event => {
    this.setState({
      inputField: event.target.value
    });
  };

  render() {
    let { stocks } = this.props;
    return (
      <div>
        <div className="input-top">
          <form onSubmit={this.submitHandler}>
            <input
              className="input is-rounded"
              type="text"
              value={this.state.inputField}
              onChange={this.handleChange}
              placeholder="Enter a stock e.g. AAPL"
            />
          </form>
        </div>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">Daily Roundup:</h1>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                <div className="tile is-parent ">
                  {Object.entries(stocks).map((key, index) => {
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
                          <p className="subtitle">
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
          </div>
        </section>
      </div>
    );
  }
}

export default Stocks;
