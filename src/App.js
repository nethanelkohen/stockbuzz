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
      inputFromChild: '',
      loading: true
    };
  }

  componentDidMount() {
    fetch(
      `https://api.iextrading.com/1.0/stock/market/batch?symbols=baba,googl,amzn,ebay,nvda&types=quote,chart&range=1m`
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

  handleSubmit = () => {
    let { inputFromChild } = this.state;
    fetch(
      `https://api.iextrading.com/1.0/stock/market/batch?symbols=${inputFromChild},baba,googl,amzn,ebay,nvda&types=quote,chart&range=1m`
    )
      .then(response => response.json())
      .then(res => {
        this.setState({ stocks: res, loading: false });
      });
  };

  handleData = async data => {
    await this.setState({
      inputFromChild: data
    });
    await this.handleSubmit();
  };

  render() {
    const { stocks, loading } = this.state;
    return (
      <div>
        <Header />
        {loading ? (
          <Spinner className="spinner" name="ball-spin-fade-loader" />
        ) : null}
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Stocks
                {...props}
                handlerFromParent={this.handleData}
                stocks={stocks}
              />
            )}
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
