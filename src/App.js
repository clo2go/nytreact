import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This will be my NYT React App</h2>
        </div>
        <p className="App-intro">
          I will work on this over break
        </p>
      </div>
    );
  }
}

export default App;
