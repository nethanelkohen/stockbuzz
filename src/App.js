import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stockName: []
    };
  }

  componentDidMount() {
    fetch(
      'https://api.iextrading.com/1.0/stock/market/batch?symbols=baba,amzn,nvda,googl,ebay&types=quote,chart&range=1m'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ stockName: data });
        // console.log(this.state);
      });
  }

  render() {
    let stock = this.state.stockName;
    console.log(stock);

    return (
      <div>
        <Header />
        <div>
          {Object.entries(stock).map((key, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>
                    {key[1].quote.companyName}: {key[1].quote.symbol}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
