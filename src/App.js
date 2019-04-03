/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SideBar from './components/SideBar';
import FooterPage from './components/FooterPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <br />
        <br />
        <FooterPage />
      </div>
    );
  }
}


export default App;
