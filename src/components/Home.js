/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Carousel from './Carousel';
import Cards from './Cards';
import NewsAlbums from "./NewsAlbums";
import { addToFavorite, removeFromFavorite, getFavorite } from '../services/FavoriteServices';
import MusicByCategories from './MusicByCategories';
import CardByPlaylist from './CardByPlaylist';
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
      carouselNews: [],
      addToFavourite: '',
      checkFavourite: '',
      categories: []
    };
    this.handleButtonTrue = this.handleButtonTrue.bind(this);
    this.handleButtonFalse = this.handleButtonFalse.bind(this);
    this.APIfilter = this.APIfilter.bind(this);
    this.NewestApiFilter = this.NewestApiFilter.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.getMusciByCategories = this.getMusciByCategories.bind(this)
    this.getSearchNews = this.getSearchNews.bind(this);
    this.checkFavorite = this.checkFavorite.bind(this);
  }

  componentDidMount() {
    this.getSearch();
    this.getSearchNews();
    this.checkFavorite();
    this.getMusciByCategories()
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
      fetch(`https://api.spotify.com/v1/search?q=skippy&type=artist,album,track&limit=50`, {
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
    } else {
      fetch(`https://api.spotify.com/v1/search?q=${search}&type=artist,album,track&limit=50`, {
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
  getSearchNews() {
    let searchNews = this.props.search;
    if (searchNews === '') {
      fetch(`https://api.spotify.com/v1/browse/new-releases`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            carouselNews: data.albums.items
          });
        });
    } else {

      fetch(`https://api.spotify.com/v1/browse/new-releases/?q=${searchNews}&type=album,track&limit=50`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            carouselNews: data.albums.items
          });
        });
    }
  }
  getMusciByCategories() {
    fetch(`https://api.spotify.com/v1/browse/categories?country=FR&locale=fr_fr&offset=0&limit=50`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.categories.items
        });
      });
  }

  CategoryDisplay() {
    const { categories } = this.state;
    return categories.map(category => (
      <div>
        <CardByPlaylist
          image={category.icons[0].url}
          name={category.name}
          id={category.id}
          click={this.handleClick}
          isCategory
        />
      </div>
    ));
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
            artist={album.artists[0].name}
            id={album.id}
            favoriteAlbums={this.handleButtonFalse}
            removeFavorite={this.handleButtonTrue}
            text={buttonText}
            isFavorite={checkFavoriteData.includes(album.id)}
          />
        </div>
      ));
  }

  NewestApiFilter = () => {
    const { checkFavoriteData, carouselNews } = this.state;
    const { search, buttonText } = this.props;
    return carouselNews
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
            favoriteAlbums={this.handleButtonFalse}
            removeFavorite={this.handleButtonTrue}
            text={buttonText}
            isFavorite={checkFavoriteData.includes(album.id)}
          />
        </div>
      ))
  }


  handleButtonFalse(id) {
    addToFavorite(id)
      .then(data => {
        this.setState({
          addTofavorite: data
        });
        this.checkFavorite();
      });
  }

  handleButtonTrue(id) {
    removeFromFavorite(id)
      .then(data => {
        this.setState({
          removeFromFavorite: data
        });
        this.checkFavorite();
      });
  }

  checkFavorite() {
    getFavorite().then(data => {
      this.setState({
        checkFavoriteData: data.items.map(element => (
          element.album.id
        ))
      }, () => console.log(this.state.checkFavoriteData.join()));
    });
  }

  render() {
    return (
      <div className="main">
        <p className="titleCAT">Pour vous</p>
        <Carousel
          api={this.APIfilter()}
          keyword={this.state.value}
        />
        <p className="titleCAT">Nouveautés</p>
        <NewsAlbums
          Newest={this.NewestApiFilter()}
          keyword={this.state.value}
        />
        <p className="titleCAT">Catégories du moment</p>
        <MusicByCategories
          categories={this.CategoryDisplay()}
        />

      </div>
    );
  }
}

export default Home;
