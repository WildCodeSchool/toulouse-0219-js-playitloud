/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Carousel from "./components/Carousel";
import SideBar from './components/SideBar';
import FooterPage from './components/FooterPage';
import './App.css';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <SideBar />

        <div className="main">
          <Search value={this.state.value} change={this.onChange} />
          <Carousel keyword={this.state.value} />
          <FooterPage />
        </div>
        </div>
    );
  }
}


export default App;
