/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Carousel from './components/Carousel';
import SideBar from './components/SideBar';
import FooterPage from './components/FooterPage';
import './App.css';
import Search from './components/Search';
import FavoriteAlbums from './components/FavoriteAlbums';
import Cards from './components/Cards';
// import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      cardId: '',
      profile: '',
      favoriteAlbumsList: [],
      token: '',
      carouselItems: [],
      addToFavourite: '',
      checkFavourite: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.APIfilter = this.APIfilter.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.checkFavourite = this.checkFavourite.bind(this);
  }

  componentDidMount() {
    this.getSearch();
    this.addToFavourite();
  }

  onChange(event) {
    this.setState({ value: event.target.value }, this.getSearch);
  }

  getSearch() {
    let search = this.state.value;
    if (this.state.value === '') {
      fetch(`https://api.spotify.com/v1/search?q=chocolat&&type=album&limit=50`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            carouselItems: data.albums.items
          });
        });
    } else {
      fetch(`https://api.spotify.com/v1/search?q=${search}&&type=album,track&limit=50`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            carouselItems: data.albums.items
          });
        });
    }
  }
  APIfilter = () => {
    return this.state.carouselItems
      .filter(singleAlbum => singleAlbum.name
        .toLowerCase()
        .includes(this.state.value.toLowerCase()))
      .map(album => (

        <div>
          <Cards
            image={album.images[1].url}
            name={album.name}
            artist={album.artists.name}
            id={album.id}
            click={this.handleClick}
            favoriteAlbums={this.handleButton}
            text={this.props.buttonText} />
        </div>
      ))
  }

  handleClick(id) {
    this.setState({ cardId: id });
  }

  handleButton(id) {
    if (this.state.favoriteAlbumsList.includes(id)) {
      return;
    } else {
      let arr = this.state.favoriteAlbumsList;
      arr.push(id + ',')
      this.setState({ favoriteAlbumsList: arr });
    }
  }

  addToFavourite() {
    fetch(`https://api.spotify.com/v1/me/albums?ids=${this.state.favoriteAlbumsList}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            addToFavourite: data
          });
        });
  }

  checkFavourite() {
    fetch(`https://api.spotify.com/v1/me/albums`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          checkFavourite: data
        });
      });
  }


  deco() {
    localStorage.removeItem('token');
    window.location.replace('http://localhost:3000/')
  }

  render() {
    if (localStorage.getItem('token') !== null) {
      return (
        <div>
          <SideBar />
          <div className="main">
            <Search
              value={this.state.value}
              change={this.onChange}
            />
            <Carousel
              api={this.APIfilter()}
              keyword={this.state.value}
            />
            <FavoriteAlbums
              albumList={this.state.favoriteAlbumsList}
            />
            <button
              onClick={this.deco} > Déconnexion!</button>
            <FooterPage />
          </div>
        </div >
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
          <a style={{ color: 'red' }} href="https://accounts.spotify.com/authorize?client_id=136da030d9704f5e9314b475d1a79537&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email%20user-read-birthdate&response_type=token&state=123" > Connectez - vous</a >
        )
      }
    }
  }
}

export default App;
