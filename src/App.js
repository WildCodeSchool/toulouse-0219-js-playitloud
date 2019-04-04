import React, { Component } from 'react';
import './App.css';
import Carousel from "./Carousel";
import cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
