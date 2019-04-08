/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Carousel from './components/Carousel';
import SideBar from './components/SideBar';
import FooterPage from './components/FooterPage';
import './App.css';
import Search from './components/Search';
import DisplayProfile from './components/DisplayProfile';
import FavoriteAlbums from './components/FavoriteAlbums';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      cardId: '',
      profile: '',
      favoriteAlbumsList: [],
      token: '',
      isAuthenticate: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  getUserProfil() {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          profile: data,
        });
      });
  }

  handleClick(id) {
    this.setState({ cardId: id });
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
  deco() {
    localStorage.removeItem('token');
    window.location.replace('http://localhost:3000/')
  }

  render() {
    if (localStorage.getItem('token') !== null) {
      if (this.state.profile === '') {
        this.getUserProfil();
      }
      return (
        <div>
          <SideBar />
          <div className="main">
            <Search value={this.state.value} change={this.onChange} />
            <Carousel keyword={this.state.value} cardsOnClick={this.handleClick} button={this.handleButton} />
            <FavoriteAlbums albumList={this.state.favoriteAlbumsList} />
            {this.state.profile && <DisplayProfile profile={this.state.profile} />}
            <button onClick={this.deco} > Déconnexion!</button>
            <FooterPage />
          </div>
        </div>
      );
    } else {
      let urlParams = window.location.hash.split('&');
      urlParams = urlParams.map(element => element.split('='));
      if (urlParams[0][1] !== undefined) {
        localStorage.setItem('token', urlParams[0][1]);
        window.location.replace('http://localhost:3000/')
      }
      else {
        return (
          <a style={{ color: 'red' }} href="https://accounts.spotify.com/authorize?client_id=136da030d9704f5e9314b475d1a79537&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email&response_type=token&state=123" > Connectez - vous</a >
        )
      }
    }
  }
}

export default App;
