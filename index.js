import React, { Component } from 'react';
import { render } from 'react-dom';
import { Pie } from 'react-chartjs-2';
import * as chartjs from "chart.js";
import { PieChart } from 'react-minimal-pie-chart';
import SimpleMap from './SimpleMap';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      simpleMap: true,
    };
  }


  render() {

    function handleMap() {
      this.setState({
        home:false,
        news:false,
        simpleMap:true,
        resources:false,
         join: false,
      })
      
    }
    return (
      <div>
      <div class="top"><h2>Delhi Hospital Services</h2> </div>
     
        <div class="p2">
        {this.state.simpleMap?<SimpleMap/>:''}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
