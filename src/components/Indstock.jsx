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
    return (
      <div>
        {Object.entries(stocks).map((key, index) => {
          if (match.params.id == key[0]) {
            console.log(key);
            return (
              <div>
                <h1>{match.params.id}</h1>
                <h1>{key[1].quote.close}</h1>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Stocks;
