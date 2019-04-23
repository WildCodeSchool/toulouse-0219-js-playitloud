import React from 'react';
import chekingTokenTimeStamp from '../functions/chekingTokenTimeStamp';
import { NavLink } from 'react-router-dom';


export default class CategoryPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      categoryInfo: "",
      tracks: [],
      buttonValue: false,
    }
    this.playlistByCategory = this.playlistByCategory.bind(this);
    this.manageButton = this.manageButton.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
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

  getButtonText = () => this.props.isFavorite ? 'Remove from favorites' : 'Add to favorites';
  componentDidMount() {
    this.playlistByCategory();
  }

  playlistByCategory() {
    chekingTokenTimeStamp(localStorage.getItem('tokenTimeStamp'))
    fetch(`https://api.spotify.com/v1/browse/categories/${this.props.match.params.category}/playlists?country=FR&offset=0&limit=20`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())

      .then(data => {
        console.log(data)
        this.setState({
          categoryInfo: data
        });
      });

  }

  render() {
    return (
      <div className="main" style={{ color: 'white' }}>
        {
          this.state.categoryInfo && this.state.categoryInfo.playlists.items.map((singlePlaylist, i) =>
            <NavLink to={`/playlist/${this.props.match.params.category}/${singlePlaylist.id}`} >
              <figure className="album">
                <img src={singlePlaylist.images[0].url} alt={singlePlaylist.name} />
                <figcaption id={singlePlaylist.id}>
                  <h3 key={i}>{singlePlaylist.name}</h3>
                </figcaption>
              </figure>
              <button onClick={() => this.manageButton()} > {this.getButtonText()} </button>

            </NavLink >)
        }

      </div>
    );
  }
}
