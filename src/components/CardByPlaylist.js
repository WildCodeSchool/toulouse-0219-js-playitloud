/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

class CardByPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      buttonValue: false,
    };
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const detailsOrCategory = this.props.isCategory ? 'categories' : 'details';
    return (
      <div className="cardsDePlaylist">
        <NavLink to={`/playlist-${detailsOrCategory}/${this.props.id}`}>
          <figure className="album">
            <img className="imgcard" src={this.props.image} alt="pictures" />
            <figcaption id={this.props.id}>
              <h3>{this.props.name}</h3>
              <h5>{this.props.artist}</h5>
            </figcaption>
          </figure>
        </NavLink>
        {this.props.showButton && <Button className="favButtons" color='danger' onClick={() => this.props.remove(this.props.id)}>Enlever des playlists</Button>}
      </div>

    );
  }
}

CardByPlaylist.defaultProps = {
  image: 'https://image.noelshack.com/fichiers/2019/17/3/1556092563-playlistdefaultpicture.png'
};
export default CardByPlaylist;
