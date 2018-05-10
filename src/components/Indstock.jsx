import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import { Route } from 'react-router-dom';
import ReactChartkick, { LineChart, PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changePercent: {},
      volumeData: {}
    };
  }

  componentDidMount(props) {
    let stocks = this.props.data;
    let match = this.props.match;
    let entries = Object.entries(stocks);
    entries.map(key => {
      if (match.params.id === key[0]) {
        let volumeArray = [];
        let percentArray = [];
        let newKey = key[1].chart.slice(-7);
        for (let i = 0; i < newKey.length; i++) {
          const percentChange = newKey[i].changePercent;
          const vol = newKey[i].volume;
          const date = newKey[i].label;
          const volData = {
            [date]: vol
          };
          const percentData = {
            [date]: percentChange
          };
          volumeArray.push(volData);
          let volumeObj = Object.assign({}, ...volumeArray);
          percentArray.push(percentData);
          let percentObj = Object.assign({}, ...percentArray);
          console.log(percentData);
          this.setState({
            volumeData: volumeObj,
            changePercent: percentObj
          });
        }
      }
    });
    this.renderData();
  }

  renderData = volData => {};

  render() {
    let stocks = this.props.data;
    let match = this.props.match;
    let graphData = this.state.volumeData;
    let percentData = this.state.changePercent;
    console.log(this.state.changePercent);

    return (
      <div>
        {Object.entries(stocks).map((key, index) => {
          if (match.params.id === key[0]) {
            return (
              <div key={index}>
                <h1>{match.params.id}</h1>
                <h1>{key[1].quote.close}</h1>
              </div>
            );
          }
        })}
        <h1>Volume per business day</h1>
        <LineChart
          prefix="$"
          thousands=","
          data={graphData}
          messages={{ empty: 'No data' }}
        />
        <BarChart data={percentData} messages={{ empty: 'No data' }} />
        <p>Chart only displays business days</p>
        {/* {this.state.volData ? <LineChart data={graphData} /> : null} */}
      </div>
    );
  }
}

export default Stocks;
