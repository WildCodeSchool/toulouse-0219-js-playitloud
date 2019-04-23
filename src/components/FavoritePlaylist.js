import React from 'react';
import { CardColumns } from 'reactstrap';
import Cards from './CardsForPlaylist';
import { removeFromFavorite, getFavorite } from '../services/FavoriteServices';

export default class FavoritePlaylist extends React.Component {
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
      .map(playlist => (
        <div>
          <Cards
            image={playlist.images[1].url}
            name={playlist.name}
            artist={playlist.artists[0].name}
            id={playlist.id}
            remove={this.handleClick}
          />
        </div>
      ));
  }

  render() {
    return (
      <CardColumns>
        <div>
          {this.displayFavorite()}
        </div>
      </CardColumns>
    );
  }
}
