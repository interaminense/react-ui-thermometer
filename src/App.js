import React, { Component } from 'react';
import Thermometer from './component/thermometer/Thermometer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="height-50vh flex flex--inline flex--center">
          <Thermometer theme={'light'} value={80} max={100} format={'$'} steps={4} size={'small'} height={250} />
          <Thermometer theme={'light'} value={15} max={200} format={'$'} steps={4} size={'normal'} height={250} />
          <Thermometer theme={'light'} value={150} max={300} format={'$'} steps={4} size={'large'} height={250} />
        </div>
        <div className="height-50vh has-contrast flex flex--inline flex--center">
          <Thermometer theme={'dark'} value={75} max={100} format={'$'} steps={4} size={'small'} height={250} />
          <Thermometer theme={'dark'} value={45} max={200} format={'$'} steps={4} size={'normal'} height={250} />
          <Thermometer theme={'dark'} value={210} max={300} format={'$'} steps={4} size={'large'} height={250} />
        </div>
      </div>
    );
  }
}

export default App;
