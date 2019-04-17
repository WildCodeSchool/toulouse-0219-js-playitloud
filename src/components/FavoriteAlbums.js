import React from 'react';
import { CardColumns } from 'reactstrap';
import Cards from './CardsForFavorites';
import { removeFromFavorite, getFavorite } from '../services/FavoriteServices';

export default class FavoriteCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkFavoriteData: []
    }
    this.checkFavorite = this.checkFavorite.bind(this);
    this.displayFavorite = this.displayFavorite.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.checkFavorite();
  }

  checkFavorite() {
    getFavorite().then(data => {
      this.setState({
        checkFavoriteData: data.items.map(element => (
          element.album
        ))
      });
    });
  }

  handleClick(id) {
    removeFromFavorite(id)
    .then(data => {
      this.setState({
        removeFromFavorite: data
      });
      this.checkFavorite();
    });
  }

  displayFavorite() {
    const { checkFavoriteData } = this.state;
    return checkFavoriteData
      .map(album => (
        <div>
          <Cards
            image={album.images[1].url}
            name={album.name}
            artist={album.artists[0].name}
            id={album.id}
            remove={this.handleClick}
          />
        </div>
      ));
  }

  render() {
    return (
      <CardColumns>
        <div>
          { this.displayFavorite() }
        </div>
      </CardColumns>
    );
  }
}
