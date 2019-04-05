/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SideBar from './components/SideBar';
import FooterPage from './components/FooterPage';
import Search from './Components/Search';
import './App.css';
import albumList from "./spotify-albums";

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

      <div className="App">

        <Search
          value={this.state.value}
          change={this.onChange}
        />

       


        <SideBar />
       <ul>
          {albumList.albums.items
            .filter(singleAlbum => singleAlbum.name
              .toLowerCase()
              .includes(this.state.value.toLowerCase()))
            .map(singleAlbum => (
              <li>
                {singleAlbum.name}
              </li>
            ))}
        </ul>
        <br />
        <br />
        <FooterPage />

      </div>
    );
  }
}


export default App;
