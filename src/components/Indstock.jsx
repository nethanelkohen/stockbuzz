import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import ReactChartkick, {
  BarChart,
  AreaChart,
  LineChart
} from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changePercent: {},
      volumeData: {},
      highData: {},
      closeData: {}
    };
  }

  componentDidMount() {
    let stocks = this.props.data;
    let match = this.props.match;
    let entries = Object.entries(stocks);
    entries.map(key => {
      console.log(key);
      if (match.params.id === key[0]) {
        let newKey = key[1].chart;

        this.renderPercent(newKey);
        this.renderVolume(newKey);
        this.renderClose(newKey);
        this.renderHigh(newKey);
      }
      return key;
    });
  }

  renderHigh = newKey => {
    let highArray = [];
    for (let i = 0; i < newKey.length; i++) {
      const high = newKey[i].high;
      const date = newKey[i].label;
      const low = newKey[i].low;
      const highData = {
        [date]: high
      };
      const lowData = {
        [date]: low
      };
      highArray.push(highData, lowData);
      let highObj = Object.assign({}, ...highArray);
      this.setState({
        highData: highObj
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
    const sevenDay = newKey.slice(-7);
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

    return (
      <div>
        {Object.entries(stocks).map((key, index) => {
          if (match.params.id === key[0]) {
            return (
              <div key={index}>
                <h1>{key[1].quote.companyName}</h1>
                <h1>Closing Price: {key[1].quote.close}</h1>
              </div>
            );
          }
          return null;
        })}
        <h1>Closing price over the last month</h1>
        <LineChart
          data={closeData}
          messages={{ empty: 'No data' }}
          prefix="$"
          thousands=","
        />
        <h1>Percent change over the last week</h1>
        <BarChart
          data={percentData}
          colors={['#b00', '#666']}
          // legend={true}
          suffix="%"
          messages={{ empty: 'No data' }}
        />
        <h1>high Low over the week</h1>
        <LineChart
          data={highData}
          messages={{ empty: 'No data' }}
          prefix="$"
          thousands=","
        />
        <h1>Volume per business day over the last month</h1>
        <AreaChart
          prefix="$"
          thousands=","
          data={graphData}
          messages={{ empty: 'No data' }}
        />
        <p>Chart only displays business days</p>
      </div>
    );
  }
}

export default Stocks;
