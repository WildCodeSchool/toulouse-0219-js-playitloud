import React from 'react';
import { NavLink } from 'react-router-dom';

class CardByPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    }
    this.manageButton = this.manageButton.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  manageButton = () => {
    if (this.props.isFavorite) {
      this.setState({ buttonValue: true })
      this.props.removeFavorite(this.props.id)
    } else {
      this.setState({ buttonValue: false })
      this.props.favoriteAlbums(this.props.id);
    }
  }

  handleButton = () => this.props.isFavorite ? 'Remove from favorites' : 'Add to favorites';

  render() {
    return (

      <div><NavLink to={`/playlist/${this.props.id}`} >

        <figure className="album">
          <img src={this.props.image} alt="pictures" />
          <figcaption id={this.props.id} onClick={() => { this.props.click(this.props.id); localStorage.setItem('lastLink', `/details-album/${this.props.id}`) }} >
            <h3>{this.props.name}</h3>
            <h5>{this.props.artist}</h5>
          </figcaption>
        </figure>
      </NavLink >
        <br />
        <br />
        <button onClick={() => this.manageButton()} > {this.handleButton()} </button>
      </div>

    )
  }

}


export default CardByPlaylist;