import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import ReactChartkick, {
  BarChart,
  AreaChart,
  LineChart,
  ColumnChart
} from 'react-chartkick';
import Chart from 'chart.js';
import Footer from './Footer';

ReactChartkick.addAdapter(Chart);

class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changePercent: {},
      volumeData: {},
      highData: {},
      closeData: {},
      lowData: {}
    };
  }

  componentDidMount() {
    let stocks = this.props.data;
    let match = this.props.match;
    let entries = Object.entries(stocks);
    entries.map(key => {
      console.log(key);
      if (match.params.id === key[0]) {
        let newKey = key[1].chart.slice(-7);
        this.renderPercent(newKey);
        this.renderVolume(newKey);
        this.renderClose(newKey);
        this.renderHigh(newKey);
        this.renderLow(newKey);
      }
      return key;
    });
  }

  renderHigh = newKey => {
    let highArray = [];
    // let lowArray = [];
    for (let i = 0; i < newKey.length; i++) {
      const high = newKey[i].high.toFixed(0);
      const date = newKey[i].label;
      // const low = newKey[i].low;
      const highData = {
        [date]: high
      };
      // const lowData = {
      //   [date]: low
      // };
      highArray.push(highData);
      // lowArray.push(lowData);
      let highObj = Object.assign({}, ...highArray);
      // // let lowObj = Object.assign({}, ...lowArray);
      // console.log(highLowObj);
      this.setState({
        highData: highObj
      });
    }
  };

  renderLow = newKey => {
    let lowArray = [];
    // let lowArray = [];
    for (let i = 0; i < newKey.length; i++) {
      const low = newKey[i].low.toFixed(2);
      const date = newKey[i].label;
      // const low = newKey[i].low;
      const lowData = {
        [date]: low
      };
      // const lowData = {
      //   [date]: low
      // };
      lowArray.push(lowData);
      // lowArray.push(lowData);
      let lowObj = Object.assign({}, ...lowArray);
      // // let lowObj = Object.assign({}, ...lowArray);
      // console.log(highLowObj);
      this.setState({
        lowData: lowObj
      });
    }
  };

  renderClose = newKey => {
    let closeArray = [];
    for (let i = 0; i < newKey.length; i++) {
      const close = newKey[i].close;
      const date = newKey[i].label;
      const closeData = {
        [date]: close
      };
      closeArray.push(closeData);
      let closeObj = Object.assign({}, ...closeArray);
      this.setState({
        closeData: closeObj
      });
    }
  };

  renderVolume = newKey => {
    let volumeArray = [];
    for (let i = 0; i < newKey.length; i++) {
      const vol = newKey[i].volume;
      const date = newKey[i].label;
      const volData = {
        [date]: vol
      };
      volumeArray.push(volData);
      let volumeObj = Object.assign({}, ...volumeArray);
      this.setState({
        volumeData: volumeObj
      });
    }
  };

  renderPercent = newKey => {
    const sevenDay = newKey;
    let percentArray = [];
    for (let i = 0; i < sevenDay.length; i++) {
      const percentChange = sevenDay[i].changePercent.toFixed(2);
      const date = sevenDay[i].label;
      const percentData = {
        [date]: percentChange
      };
      percentArray.push(percentData);
      let percentObj = Object.assign({}, ...percentArray);
      this.setState({
        changePercent: percentObj
      });
    }
  };

  render() {
    let stocks = this.props.data;
    let match = this.props.match;
    let graphData = this.state.volumeData;
    let percentData = this.state.changePercent;
    let closeData = this.state.closeData;
    let highData = this.state.highData;
    let lowData = this.state.lowData;

    return (
      <div>
        {Object.entries(stocks).map((key, index) => {
          if (match.params.id === key[0]) {
            return (
              <div key={index}>
                <section className="hero">
                  <div className="hero-body">
                    <div className="container ">
                      <h1 className="title">{key[1].quote.companyName}</h1>
                      <h2 className="subtitle">
                        Closing Price: {key[1].quote.close}
                      </h2>
                    </div>
                  </div>
                </section>
              </div>
            );
          }
          return null;
        })}
        <section class="section has-text-centered">
          <div class="container">
            <h1 class="title">Volume</h1>
            <h2 class="subtitle">
              <AreaChart
                prefix="$"
                thousands=","
                data={graphData}
                messages={{ empty: 'No data' }}
                label="Volume"
              />
            </h2>
          </div>
        </section>
        <section class="section has-text-centered">
          <div class="container">
            <h1 class="title">Closing Price </h1>
            <h2 class="subtitle">
              <ColumnChart
                data={closeData}
                messages={{ empty: 'No data' }}
                prefix="$"
                thousands=","
                label="Price"
              />
            </h2>
          </div>
        </section>
        <section class="section has-text-centered">
          <div class="container">
            <h1 class="title">Percent Change</h1>
            <h2 class="subtitle">
              <BarChart
                data={percentData}
                suffix="%"
                messages={{ empty: 'No data' }}
                label="Percent Change"
              />
            </h2>
          </div>
        </section>
        <section class="section has-text-centered">
          <div class="container">
            <h1 class="title">High Price</h1>
            <h2 class="subtitle">
              <LineChart
                data={highData}
                messages={{ empty: 'No data' }}
                prefix="$"
                label="Price"
              />
            </h2>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Stocks;
