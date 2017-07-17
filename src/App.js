import React, { Component } from 'react';
import Thermometer from './component/thermometer/Thermometer';
import Code from './component/Code/Code';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="height-20vh bgcolor-gray flex flex--column flex--center">
          <h2 className="no-gap">
            <span role="img" aria-label="Thermometer">🌡️</span>️ React UI Thermometer
          </h2>
          <div>
            <a href="#documentation">see documentation</a>
          </div>
          <div>
            <Code
              tagName={'Thermometer'}
              prop={[
                { name: 'theme', val: 'light' },
                { name: 'value', val: 80 },
                { name: 'max', val: 200 },
                { name: 'format', val: '$' },
                { name: 'steps', val: 3 },
                { name: 'size', val: 'small' },
                { name: 'height', val: 180 },
              ]}
            />
          </div>
        </div>
        <div className="height-40vh flex flex--row flex--center has-scroll">
          <Thermometer theme={'light'} value={80} max={100} format={'$'} steps={3} size={'small'} height={180} />
          <Thermometer theme={'light'} value={15} max={200} format={'$'} steps={3} size={'normal'} height={180} />
          <Thermometer theme={'light'} value={150} max={300} format={'$'} steps={3} size={'large'} height={180} />
        </div>
        <div className="height-40vh bgcolor-gray-2 flex flex--row flex--center has-scroll">
          <Thermometer theme={'dark'} value={75} max={100} format={'$'} steps={3} size={'small'} height={180} />
          <Thermometer theme={'dark'} value={45} max={200} format={'$'} steps={3} size={'normal'} height={180} />
          <Thermometer theme={'dark'} value={210} max={300} format={'$'} steps={3} size={'large'} height={180} />
        </div>
        <div id="documentation">
          <div className="height-10vh bgcolor-gray flex flex--column flex--center">
            <h2><span role="img" aria-label="Thermometer">🌡️</span>️ React UI Thermometer - Documentation</h2>
          </div>
          <div className="height-60vh flex flex--center flex--column has-scroll">
            <table className="table bottom-gap">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>theme</td>
                  <td>string</td>
                  <td>'light'</td>
                  <td>Choose the 'light' or 'dark' theme to suit your interface</td>
                </tr>
                <tr>
                  <td>max</td>
                  <td>string</td>
                  <td>100</td>
                  <td>Maximum value that the thermometer must reach</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>number</td>
                  <td>0</td>
                  <td>Current value of the thermometer</td>
                </tr>
                <tr>
                  <td>format</td>
                  <td>string</td>
                  <td>'$'</td>
                  <td>Choose the format of the thermometer data, example: $, R $, €</td>
                </tr>
                <tr>
                  <td>steps</td>
                  <td>number</td>
                  <td>4</td>
                  <td>Number of steps that will be displayed on the thermometer</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>string</td>
                  <td>'normal'</td>
                  <td>Choose the size of your thermometer: small, normal or large</td>
                </tr>
                <tr>
                  <td>height</td>
                  <td>number</td>
                  <td>200</td>
                  <td>Sets the height of the thermometer in pixels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="height-10vh flex flex--center bgcolor-gray-2 color-white">
          <Code tagName={'Thermometer'} /> is released under the MIT license.&nbsp;
          <strong> Powered by  <a rel="noopener noreferrer" href="http://interaminense.com/" target="_blank">@interaminense</a></strong>
        </div>
      </div>
    );
  }
}

export default App;
