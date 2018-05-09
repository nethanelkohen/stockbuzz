import React, { Component } from 'react';
import Header from './components/Header';
import Stocks from './components/Stocks';
import './App.css';
import 'bulma/css/bulma.css';
import Spinner from 'react-spinkit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stockName: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(
      'https://api.iextrading.com/1.0/stock/market/batch?symbols=baba,googl,amzn,ebay,nvda&types=quote,chart&range=1m'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ stockName: data, loading: false });
        // console.log(this.state);
      });
  }

  render() {
    const stock = this.state.stockName;
    const loading = this.state.loading;
    return (
      <div>
        <Header />
        {loading ? (
          <Spinner className="spinner" name="ball-spin-fade-loader" />
        ) : (
          <Stocks data={stock} />
        )}
      </div>
    );
  }
}

export default App;
