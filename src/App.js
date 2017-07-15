import React, { Component } from 'react';
import Thermometer from './component/thermometer/Thermometer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flex flex--inline flex--center">
        <div className="separate">
          <Thermometer value={54.3} max={100} format={'R$'} steps={6} size={'small'} height={300} />
        </div>
        <div className="separate">
          <Thermometer value={54.3} max={100} format={'R$'} steps={6} size={'normal222'} height={300} />
        </div>
        <div className="separate">
          <Thermometer value={54.3} max={100} format={'R$'} steps={6} size={'large'} height={300} />
        </div>
      </div>
    );
  }
}

export default App;
