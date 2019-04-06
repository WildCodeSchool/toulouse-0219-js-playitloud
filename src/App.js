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
      cardId: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(id) {
    this.setState({ cardId: id });
  }

  render() {
    return (
      <div>
        <SideBar />

        <div className="main">
          <Search value={this.state.value} change={this.onChange} />
          <Carousel keyword={this.state.value} cardsOnClick={this.handleClick} />
          <FooterPage />
        </div>
        </div>
    );
  }
}


export default App;