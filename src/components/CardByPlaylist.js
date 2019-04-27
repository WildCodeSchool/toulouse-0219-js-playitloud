import React from 'react';
import { NavLink } from 'react-router-dom';

class CardByPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    }
  }

  render() {
    const detailsOrCategory = this.props.isCategory ? 'categories' : 'details';
    return (
      <div>
        <NavLink to={`/playlist-${detailsOrCategory}/${this.props.id}`} >
        <figure className="album">
          <img className="imgcard" src={this.props.image} alt="pictures" />
          <figcaption id={this.props.id} >
            <h3>{this.props.name}</h3>
            <h5>{this.props.artist}</h5>
          </figcaption>
        </figure>
      </NavLink >

        {this.props.showButton && <button className="buttonPlaylist" onClick={() => this.props.remove(this.props.id)} >Enlever des playlists</button>}
      </div>

    )
  }

}

CardByPlaylist.defaultProps = {
  image: 'https://image.noelshack.com/fichiers/2019/17/3/1556092563-playlistdefaultpicture.png'
}
export default CardByPlaylist;