import React from 'react';
import { CardColumns } from 'reactstrap';
import CardByPlaylist from './CardByPlaylist';
import { removeFromFavoritePlaylist } from '../services/FavoriteServices';

export default class FavoritePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkFavoriteData: [],
      removeFromFavoritePlaylist: [],
    };
    this.checkFavoritePlaylist = this.checkFavoritePlaylist.bind(this);
    this.displayFavorite = this.displayFavorite.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.checkFavoritePlaylist();
  }

  checkFavoritePlaylist() {
    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          checkFavoriteData: data.items,
        });
      });
  }

  handleClick(id) {
    removeFromFavoritePlaylist(id)
      .then(data => {
        this.setState({
          removeFromFavoritePlaylist: data.items
        });
        this.checkFavoritePlaylist();
      });
  }

  displayFavorite() {
    const { checkFavoriteData } = this.state;
    return checkFavoriteData
      .map(playlist => (
        <div className="main">
          <CardByPlaylist
            image={playlist.images[0] && playlist.images[0].url}
            name={playlist.name}
            id={playlist.id}
            remove={this.handleClick}
            showButton
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
