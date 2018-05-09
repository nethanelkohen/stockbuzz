import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
      });
  }

  render() {
    const stock = this.state.stockName;
    return (
      <div>
        {this.state.loading ? (
          <Spinner className="spinner" name="ball-spin-fade-loader" />
        ) : (
          <div>
            <Header />
            <Stocks data={stock} />
            <Footer />
          </div>
        )}

        {/* {this.state.loading ? (
          <Spinner className="spinner" name="ball-spin-fade-loader" />
        ) : (
          <Stocks data={stock} />
        )}
        <Footer /> */}
      </div>
    );
  }
}

export default App;
