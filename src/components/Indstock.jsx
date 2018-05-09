import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import { Route } from 'react-router-dom';
import { Bar } from 'britecharts-react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indStock: {}
    };
  }

  componentDidMount(props) {
    let stocks = this.props.data;
    let match = this.props.match;
    let entries = Object.entries(stocks);
    // console.log(entries);
    entries.map(key => {
      if (match.params.id === key[0]) {
        // let slice = key[1].chart.slice(-7);
        let array = [];
        let newKey = key[1].chart.slice(-7);
        for (let i = 0; i < newKey.length; i++) {
          let vol = newKey[i].volume;
          let date = newKey[i].label;
          let volData = {
            [date]: vol
          };
          array.push(volData);
          let obj = Object.assign({}, ...array);
          this.setState({ indStock: obj });
        }
      }
    });
  }

  render() {
    let stocks = this.props.data;
    let match = this.props.match;
    let graphData = this.state.indStock;
    // console.log('graphData', graphData);
    console.log(stocks);

    return (
      <div>
        {Object.entries(stocks).map((key, index) => {
          if (match.params.id === key[0]) {
            return (
              <div>
                <h1>{match.params.id}</h1>
                <h1>{key[1].quote.close}</h1>
              </div>
            );
          }
        })}
        <LineChart data={graphData} />
        <p>Chart only displays business days</p>
        {/* {this.state.indStock ? <LineChart data={graphData} /> : null} */}
      </div>
    );
  }
}

export default Stocks;
