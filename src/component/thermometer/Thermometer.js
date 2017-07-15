import React, { Component } from 'react';
import './style/Thermometer.css';

class Thermometer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      max: this.props.max || 100, //default 100
      steps: this.props.steps || 4, //default 4
      format: this.props.format || '',
      size: () => {
        if (this.props.size !== 'small' && this.props.size !== 'normal' && this.props.size !== 'large') {
          return 'normal';
        }
        return this.props.size;
      },
      height: this.props.height || 200, //default 100
      value: this.props.value || 0, //default 0
      valstr: () => this.state.format + this.state.value,
      percent: () => this.state.value / this.state.max * 100,
      intervals: []
    }

    for (let step = 0; step <= this.state.steps; step++) {
      let val = ((this.state.max / this.state.steps) * step).toFixed(2);
      let percent = (val / this.state.max) * 100;
      let interval = { percent: percent, label: this.state.format + val };
      this.state.intervals.push(interval);
    }
  }

  render() {

    const stepIntervals = this.state.intervals.map((step, i) => {
      return (
        <li key={i} style={{ bottom: `calc(${step.percent}% - 1px)` }}>
          {step.label}
        </li>
      );
    });

    return (
      <div style={{ height: `${this.state.height}px` }} className={`thermometer thermometer--${this.state.size()}`}>
        <div className="thermometer__draw-a"></div>
        <div className="thermometer__draw-b"></div>
        <div className="thermometer__meter">
          <ul className="thermometer__statistics">{stepIntervals}</ul>
          <div style={{ height: `${this.state.percent()}%` }} className="thermometer__mercury">
            <div className="thermometer__percent-current">{this.state.valstr()}</div>
            <div className="thermometer__mask">
              <div className="thermometer__bg-color" style={{ height: `calc(${this.state.height}px - 57px)` }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Thermometer;