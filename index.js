import React, { Component } from 'react';
import { render } from 'react-dom';
import { Pie,Doughnut, Line, Bar} from 'react-chartjs-2';
import { PieChart } from 'react-minimal-pie-chart';
import SimpleMap from './SimpleMap';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      simpleMap: true,
      //Total Patients Admitted', 'Total Recovered', 'Total Dead
      labels: ['Total hospitals in Delhi','Total Beds','Total Patients','Total Doctors','Total Nurses'],
       datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#ADFF2F',
          '#FFC0CB',
          '#B21F00',
          '#00A6B4',
          '#FFE4B5',  
        ],
        hoverBackgroundColor: [
        '#98FB98',
        '#FFF0F5',
        '#FFA07A',
        '#E0FFFF',
        '#FFFFE0',
        ],
        data: [172, 57194, 4898, 16176, 20000]
    }],

    barData:{
    labels: ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'],
    datasets: [
    {
      label: 'Patients',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [20, 30, 22, 43, 23, 13, 35]
    }
  ]}
    
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
      <div class="layout">
      <div class="top"><h1>Delhi Hospital Services</h1> </div>
      

      <Bar
          data={this.state.barData}
          options={{
            title:{
              display:true,
              text:'Patients Admitted in the past 1 week',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      <br/>
      <br/>

      
      <Doughnut
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Hospital Statistics',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <br/>
        <br/>
        <br/>
        {this.state.simpleMap?<SimpleMap/>:''}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
