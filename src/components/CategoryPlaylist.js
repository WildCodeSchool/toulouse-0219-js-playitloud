import React from 'react';
import chekingTokenTimeStamp from '../functions/chekingTokenTimeStamp';
import { NavLink } from 'react-router-dom';
import { Button, CardColumns } from 'reactstrap';
import { addToFavoritePlaylist, removeFromFavoritePlaylist } from '../services/FavoriteServices';


export default class CategoryPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '', 
      categoryInfo: "",
      buttonValue: false,
      removeFromFavoritePlaylist: [],
      addToFavoritePlaylist: [],
      checkFavoriteData: []
    }
    this.playlistByCategory = this.playlistByCategory.bind(this);
    this.manageButton = this.manageButton.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
  }
  manageButton(playlistID) {
    if (this.state.checkFavoriteData.includes(playlistID)) {
      this.setState({ buttonValue: true })
      this.handleButtonTrue(playlistID)
    } else {
      this.setState({ buttonValue: false })
      this.handleButtonFalse(playlistID);
    }
  }

  getButtonText = (playlistID) => this.state.checkFavoriteData.includes(playlistID) ? 'Enlever des playlists' : 'Ajouter aux playlists';

  handleButtonFalse(id) {
    addToFavoritePlaylist(id)
      .then(data => {
        this.setState({
          addToFavoritePlaylist: data
        });
        this.checkFavoritePlaylist();
      });
  }

  handleButtonTrue(id) {
    removeFromFavoritePlaylist(id)
      .then(data => {
        this.setState({
          removeFromFavoritePlaylist: data
        });
        this.checkFavoritePlaylist();
      });
  }

  checkFavoritePlaylist() {
    fetch(`https://api.spotify.com/v1/me/playlists`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          checkFavoriteData: data.items.map(singlePlaylist => singlePlaylist.id),
        });
      });
  }
  componentDidMount() {
    this.playlistByCategory();
    this.checkFavoritePlaylist();
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
        this.setState({
          categoryInfo: data
        });
      });

  }

  render() {
    return (
      <div className="main" style={{ color: 'white' }}>
      <CardColumns>
        {
          this.state.categoryInfo && this.state.categoryInfo.playlists.items.map((singlePlaylist, i) =>
            <div>
              <NavLink to={`/playlist-details/${singlePlaylist.id}`} >
                <figure className="album">
                  <img src={singlePlaylist.images[0].url} alt={singlePlaylist.name} />
                  <figcaption id={singlePlaylist.id}>
                    <h3 key={i}>{singlePlaylist.name}</h3>
                  </figcaption>
                </figure>
              </NavLink >
              <Button color='danger' className='favButtons' onClick={() => this.manageButton(singlePlaylist.id)} > {this.getButtonText(singlePlaylist.id)} </Button>
            </div>)
        }
        </CardColumns>
      </div>
    );
  }
}
