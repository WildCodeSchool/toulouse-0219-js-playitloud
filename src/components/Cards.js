import React from 'react';
import { NavLink } from 'react-router-dom';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    }
    this.manageButton = this.manageButton.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
  }

  manageButton() {
    if (this.props.isFavorite) {
      this.setState({ buttonValue: true })
      this.props.removeFavorite(this.props.id)
    } else {
      this.setState({ buttonValue: false })
      this.props.favoriteAlbums(this.props.id);
    }
  }

  getButtonText = () => this.props.isFavorite ? 'Enlever des favoris' : 'Ajouter aux favoris';
  render() {
    return (

      <div className="Cartes">
        <NavLink to={`/details-album/${this.props.id}`} >

          <figure className="album">
            <img src={this.props.image} alt="pictures" className="pic" />
            <figcaption className="photoAlbum" id={this.props.id} onClick={() => { localStorage.setItem('lastLink', `/details-album/${this.props.id}`) }} >
              <h3>{this.props.name}</h3>
              <h5>{this.props.artist}</h5>
            </figcaption>
          </figure>
        </NavLink >
        <br />
        <br />
        <button onClick={() => this.manageButton()}> {this.getButtonText()} </button>
      </div>

    )
  }

}


export default Cards;