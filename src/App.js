import React, { Component } from 'react';
import Header from './components/Header';
import Stocks from './components/Stocks';
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
      'https://api.iextrading.com/1.0/stock/market/batch?symbols=baba,googl,amzn,ebay,nvda&types=quote,chart&range=1m'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ stockName: data });
        // console.log(this.state);
      });
  }

  render() {
    let stock = this.state.stockName;
    // console.log(stock);

    return (
      <div>
        <Header />
        <Stocks data={stock} />
      </div>
    );
  }
}

export default App;
