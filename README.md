<h1>react-ui-thermometer </h1>

[![Build Status](https://travis-ci.org/interaminense/react-ui-thermometer.svg?branch=master)](https://travis-ci.org/interaminense/react-ui-thermometer)

React UI Thermometer 

This is component has created with create-react-app

<img src="https://raw.githubusercontent.com/interaminense/react-ui-thermometer/master/src/util/print-react-ui-thermometer.jpg" alt="thermometer example image" />

<h3>Demo</h3>

<a href="http://www.interaminense.com/react-ui-thermometer/">Demo React UI Thermometer

<h3>Usage</h3>

```javascript
<Thermometer theme={'light'} value={80} max={200} format={'$'} steps={3} size={'small'} height={180} />
```

<h3>Documentation</h3>

<table>
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

<h3>Development</h3>

<ul>
  <li><code>npm install</code></li>
  <li><code>npm start</code></li>
</ul>

<h3>Licence</h3>

MIT
