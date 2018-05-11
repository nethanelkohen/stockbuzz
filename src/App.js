import React, { Component } from 'react';
import Header from './components/Header';
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
        <Header />
        <Switch>
          {this.state.loading ? (
            <Spinner className="spinner" name="ball-spin-fade-loader" />
          ) : (
            <Route
              exact
              path="/"
              render={props => <Stocks {...props} data={stock} />}
            />
          )}
          <Route
            exact
            path="/indepth/:id"
            render={props => <IndStock {...props} data={stock} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
