import React from 'react';
import { NavLink } from 'react-router-dom';

export default class FavoriteCards extends React.Component {

  render() {
    return (

      <div>
        <NavLink to={`/details-album/${this.props.id}`} >
          <figure className="album">
            <img src={this.props.image} alt="pictures" />
            <figcaption id={this.props.id} onClick={() => { localStorage.setItem('lastLink', `/details-album/${this.props.id}`) }} >
              <h3>{this.props.name}</h3>
              <h5>{this.props.artist}</h5>
            </figcaption>
          </figure>
        </NavLink>
        <br />
        <br />
        <button onClick={() => this.props.remove(this.props.id)} > Remove from Favorite </button>
      </div>

    )
  }

}
