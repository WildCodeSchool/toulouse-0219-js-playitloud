import React from 'react';
import { NavLink } from 'react-router-dom';

export default class FavoriteCards extends React.Component {

  render() {
    return (

      <div className="ALBUM">
        <NavLink to={`/details-album/${this.props.id}`} >
          <figure className="album">
            <img src={this.props.image} alt="pictures" />
            <figcaption id={this.props.id} onClick={() => { localStorage.setItem('lastLink', `/details-album/${this.props.id}`) }} >
            </figcaption>
          </figure>
        </NavLink>
        <button onClick={() => this.props.remove(this.props.id)} className="buttonFav">Enlever des favoris</button>
      </div>

    )
  }

}
