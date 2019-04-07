/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Carousel from "./components/Carousel";
import SideBar from './components/SideBar';
import FooterPage from './components/FooterPage';
import './App.css';
import Search from './components/Search';
import DisplayProfile from './components/DisplayProfile';
import FavoriteAlbums from './components/FavoriteAlbums';

const profileTest = {
  display_name: 'prénom nom',
  email: "monmail@mail.fr",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      cardId: '',
      username: profileTest
      favoriteAlbumsList: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(id) {
    this.setState({ cardId: id });
  }

  getUserProfil() {
    fetch("https://api.spotify.com/v1/me")
      .then(response => response.json())
      .then(data => {
        this.setState({
          username: data[0],
        });
      });
  }

  handleButton(name) {
    if (this.state.favoriteAlbumsList.includes(name)) {
      return;
    } else {
      let arr = this.state.favoriteAlbumsList;
      arr.push(name)
      this.setState({ favoriteAlbumsList: arr });
    }
  }


  render() {
    return (
      <div>
        <SideBar />

        <div className="main">
          <Search value={this.state.value} change={this.onChange} />
          <Carousel keyword={this.state.value} cardsOnClick={this.handleClick} button={this.handleButton} />
          <FavoriteAlbums albumList={this.state.favoriteAlbumsList} />
          <DisplayProfile display_name={this.state.username.display_name} email={this.state.username.email} />
          <FooterPage />
        </div>
      </div>
    );
  }
}


export default App;