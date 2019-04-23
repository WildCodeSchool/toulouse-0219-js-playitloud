import React from 'react';
import { NavLink } from 'react-router-dom';
import FavoritePlaylist from './FavoritePlaylist';

class CardByPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    }
    this.manageButton = this.manageButton.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
  }
  manageButton = () => {
    if (this.props.isFavorite) {
      this.setState({ buttonValue: true })
      this.props.removeFavorite(this.props.id)
    } else {
      this.setState({ buttonValue: false })
      this.props.FavoriteAlbums(this.props.id);
    }
  }

  getButtonText = () => this.props.isFavorite ? 'Remove from favorites' : 'Add to favorites';

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
      </div>

    )
  }

}


export default CardByPlaylist;