import React from 'react';
import { NavLink } from 'react-router-dom';
import FavoritePlaylist from './FavoritePlaylist';

class CardByPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    }
  }

  render() {
    return (

      <div><NavLink to={`/playlist/${this.props.id}`} >
        <figure className="album">
          <img src={this.props.image} alt="pictures" />
          <figcaption id={this.props.id} >
            <h3>{this.props.name}</h3>
            <h5>{this.props.artist}</h5>
          </figcaption>
        </figure>
      </NavLink >
        {this.props.showButton && <button onClick={() => this.props.remove(this.props.id)} >Enlever des playlists</button>}

      </div>

    )
  }

}

CardByPlaylist.defaultProps = {
  image: 'https://image.noelshack.com/fichiers/2019/17/3/1556092563-playlistdefaultpicture.png'
}
export default CardByPlaylist;