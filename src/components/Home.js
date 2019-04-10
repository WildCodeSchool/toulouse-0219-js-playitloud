/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Carousel from './Carousel';
import FavoriteAlbums from './FavoriteAlbums';
import Cards from './Cards';
// import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardId: '',
      profile: '',
      favoriteAlbumsList: [],
      carouselItems: [],
      addToFavourite: '',
      checkFavourite: ''
    };
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

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.getSearch()
    }
  }

  getSearch() {
    let search = this.props.search;
    if (search === '') {
      fetch(`https://api.spotify.com/v1/search?q=chocolat&type=album&limit=50`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
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
        .includes(this.props.search.toLowerCase()))
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
    if (this.state.favoriteAlbumsList.includes(id + ',')) {
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



  render() {
    return (
      <div>
        <div className="main">
          <Carousel
            api={this.APIfilter()}
            keyword={this.state.value}
          />
          <FavoriteAlbums
            albumList={this.state.favoriteAlbumsList}
          />
        </div>
      </div >
    );
  }
}

export default Home;
