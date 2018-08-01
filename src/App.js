import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Stocks from './components/Stocks';
import IndStock from './components/Indstock';
import './App.css';
import 'bulma/css/bulma.css';
import Spinner from 'react-spinkit';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      choice: '',
      loading: true
    };
  }

  componentDidMount() {
    let { choice } = this.state;
    fetch(
      `https://api.iextrading.com/1.0/stock/market/batch?symbols=baba,googl,amzn,ebay,nvda,${choice}&types=quote,chart&range=1m`
    )
      .then(response => response.json())
      .then(res => {
        this.setState({ stocks: res, loading: false });
      });

    window.scrollTo({
      top: 280,
      behavior: 'smooth'
    });
  }

  updateInputValue(evt) {
    this.setState({
      choice: evt.target.value
    });
  }

  handleSubmit = () => {
    let { choice } = this.state;

    fetch(
      `https://api.iextrading.com/1.0/stock/market/batch?symbols=baba,googl,amzn,ebay,nvda,${choice}&types=quote,chart&range=1m`
    )
      .then(response => response.json())
      .then(res => {
        this.setState({ stocks: res, loading: false, choice: '' });
      });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  };

  render() {
    const { stocks, loading, choice } = this.state;
    return (
      <div>
        <Header />
        {loading ? (
          <Spinner className="spinner" name="ball-spin-fade-loader" />
        ) : null}
        <input
          value={this.state.choice}
          class="input is-rounded"
          type="text"
          placeholder="Enter a stock e.g. AAPL"
          onChange={evt => this.updateInputValue(evt)}
          onKeyPress={this.handleKeyPress}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Stocks {...props} stocks={stocks} />}
          />
          <Route
            exact
            path="/indepth/:id"
            render={props => <IndStock {...props} stocks={stocks} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
