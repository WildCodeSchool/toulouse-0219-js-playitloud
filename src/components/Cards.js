import React from 'react';
import { NavLink } from 'react-router-dom';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    }
    this.manageButton = this.manageButton.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  manageButton = () => {
    this.props.favoriteAlbums(this.props.id);
    if (this.state.buttonValue) {
      this.setState({ buttonValue: false })
    } else {
      this.setState({ buttonValue: true })
    }
  }

  handleButton = () => this.state.buttonValue ? 'pouet' : 'prout';

  render() {
    return (
      <NavLink to={`/details-album/${this.props.id}`} >
        <div>
          <figure className="album">
            <img src={this.props.image} alt="pictures" />
            <figcaption id={this.props.id} onClick={() => { this.props.click(this.props.id); localStorage.setItem('lastLink', `/details-album/${this.props.id}`) }} >
              <h3>{this.props.name}</h3>
              <h5>{this.props.artist}</h5>
            </figcaption>
          </figure>
          <br />
          <br />
          <button onClick={() => this.manageButton()} > {this.handleButton()} </button>
        </div>
      </NavLink >
    )
  }

}


export default Cards;