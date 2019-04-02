import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          name="Sbaboot"
          lastName="Flamant"
        />
      </div>
    );
  }
}

export default App;
