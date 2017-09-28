import React, { Component } from 'react';
import './App.css';
// import { CircleTimer } from './components';
import CircleTimer from './components/CircleTimer/CircleTimer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="timerContainer">
          <CircleTimer size={600} thickness={8} />
        </div>  
      </div>
    );
  }
}

export default App;
