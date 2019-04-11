/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Carousel from './Carousel';
import Cards from './Cards';
// import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardId: '',
      profile: '',
      favoriteAlbumsList: [],
      checkFavoriteData: '',
      carouselItems: [],
      addTofavorite: '',
      checkfavorite: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonTrue = this.handleButtonTrue.bind(this);
    this.handleButtonFalse = this.handleButtonFalse.bind(this);
    this.APIfilter = this.APIfilter.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.addTofavorite = this.addTofavorite.bind(this);
    this.checkfavorite = this.checkfavorite.bind(this);
  }

  componentDidMount() {
    this.getSearch();
    this.checkfavorite();
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props;
    if (prevProps.search !== search) {
      this.getSearch();
    }
  }

  getSearch() {
    const { search } = this.props;
    if (search === '') {
      fetch('https://api.spotify.com/v1/search?q=chocolate&type=album&limit=50', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.albums.items)
          this.setState({
            carouselItems: data.albums.items
          });
        });
    } else {
      fetch(`https://api.spotify.com/v1/search?q=${search}&type=album,track&limit=50`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
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

  APIfilter() {
    const { carouselItems, checkFavoriteData } = this.state;
    const { search, buttonText } = this.props;
    return carouselItems
      .filter(singleAlbum => singleAlbum.name
        .toLowerCase()
        .includes(search.toLowerCase()))
      .map(album => (

        <div>
          <Cards
            image={album.images[1].url}
            name={album.name}
            artist={album.artists.name}
            id={album.id}
            click={this.handleClick}
            favoriteAlbums={this.handleButtonFalse}
            removeFavorite={this.handleButtonTrue}
            text={buttonText}
            isFavorite={checkFavoriteData.includes(album.id)}
          />
        </div>
      ));
  }

  handleButtonFalse(id) {
    this.addTofavorite(id);
  }

  handleButtonTrue(id) {
    this.removeFromFavorite(id);
  }

  addTofavorite(id) {
    fetch(`https://api.spotify.com/v1/me/albums?ids=${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'PUT'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          addTofavorite: data
        });
      });
  }

  removeFromFavorite(id) {
    fetch(`https://api.spotify.com/v1/me/albums?ids=${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          removeFromFavorite: data
        });
      });
  }

  checkfavorite() {
    fetch('https://api.spotify.com/v1/me/albums', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          checkFavoriteData: data.items.map(element => (
            element.album.id
          ))
        }, () =>  console.log(this.state.checkFavoriteData.join()));
      });

  }

  handleClick(id) {
    this.setState({ cardId: id });
  }


  render() {
 
    const { value } = this.state;
    return (
      <div>
        <div className="main">
          <Carousel
            api={this.APIfilter()}
            keyword={value}
          />
        </div>
      </div >
    );
  }
}

export default Home;
