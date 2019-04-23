import React from 'react';
import { CardColumns } from 'reactstrap';
import CardByPlaylist from './CardByPlaylist';

export default class FavoritePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkFavoriteData: []
    }
    this.checkFavoritePlaylist = this.checkFavoritePlaylist.bind(this);
    this.displayFavorite = this.displayFavorite.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.checkFavoritePlaylist();
  }

  checkFavoritePlaylist() {
    fetch(`https://api.spotify.com/v1/me/playlists`, {
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

  // handleClick(id) {
  //   removeFromFavorite(id)
  //     .then(data => {
  //       this.setState({
  //         removeFromFavorite: data
  //       });
  //       this.checkFavorite();
  //     });
  // }

  displayFavorite() {
    const { checkFavoriteData } = this.state;
    console.log(checkFavoriteData);
    return checkFavoriteData
      .map(playlist => (
        <div className='main'>
          <CardByPlaylist
            image='https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg'
            name={playlist.name}
            id={playlist.id}
          // remove={this.handleClick}
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
