/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "search",
    };
    this.onChange = this.onChange.bind(this);

  }

  onChange(event) {

    this.setState({ value: event.target.value });
  }


  render() {
    return (

      <div className="App">
        <Search
          value={this.state.value}
          change={this.onChange}
        />
      </div>
    );
  }
}

export default App;
