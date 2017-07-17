import React, { Component } from 'react';
import './style/Thermometer.css';

class Thermometer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: () => this.props.theme === 'light' || this.props.theme === 'dark' ? this.props.theme : 'light',
      value: this.props.value || 0, //default 0
      max: this.props.max || 100, //default 100
      steps: this.props.steps || 4, //default 4
      format: this.props.format || '',
      size: () => this.props.size === 'small' || this.props.size === 'normal' || this.props.size === 'large' ? this.props.size : 'normal',
      height: this.props.height || 200, //default 200
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
    const theme = `thermometer--theme-${this.state.theme()}`;
    const size = `thermometer--${this.state.size()}`;
    const height = { height: `${this.state.height}px` };
    const heightPercent = { height: `${this.state.percent()}%` };
    const heightBgColor = { height: `calc(${this.state.height}px - 57px)` };
    const valstr = this.state.valstr();
    const stepIntervals = this.state.intervals.map((step, i) => {
      return (
        <li key={i} style={{ bottom: `calc(${step.percent}% - 1px)` }}>
          {step.label}
        </li>
      );
    });

    return (
      <div style={height} className={`thermometer ${size} ${theme}`}>
        <div className="thermometer__draw-a"></div>
        <div className="thermometer__draw-b"></div>
        <div className="thermometer__meter">
          <ul className="thermometer__statistics">{stepIntervals}</ul>
          <div style={heightPercent} className="thermometer__mercury">
            <div className="thermometer__percent-current">{valstr}</div>
            <div className="thermometer__mask">
              <div className="thermometer__bg-color" style={heightBgColor}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Thermometer;