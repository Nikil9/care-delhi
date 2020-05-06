import React, { Component } from 'react';
import { render } from 'react-dom';
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
        <div class="dashboard"> 
        Hello
        </div>
        <div class="Map">
          {this.state.simpleMap?<SimpleMap/>:''}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
