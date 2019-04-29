/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
import React from 'react';
import convertDate from '../functions/convertDate';
import chekingTokenTimeStamp from '../functions/chekingTokenTimeStamp';
import convertTime from '../functions/convertTime';


export default class AlbumDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      albumsInfos: '',
      tracks: []
    };
    this.apiCallById = this.apiCallById.bind(this);

  }

  componentDidMount() {
    this.apiCallById();
  }

  apiCallById() {
    chekingTokenTimeStamp(localStorage.getItem('tokenTimeStamp'));
    fetch(`https://api.spotify.com/v1/albums/${this.props.match.params.id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {

        this.setState({
          albumsInfos: data

        });
      });

  }

  convertName(idName) {
    const name = idName.replace(" ", '+');
    return name;
  }

  render() {

    return (

      <div className="main" style={{ color: 'white' }}>

        {this.state.albumsInfos
          && <img src={this.state.albumsInfos.images[1].url} alt={this.state.albumsInfos.name} />}

        <h3> {this.state.albumsInfos.name}</h3>
        <br />
        {this.state.albumsInfos
          && (
            <a target="_blank" rel="noreferrer noopener" href={`https://www.ticketmaster.fr/fr/resultat?ipSearch=${this.state.albumsInfos.artists[0].name}`}>
              <button>
                Voir les concerts en France
              </button>
            </a>
          )}

        <br />
        <br />
        {this.state.albumsInfos && <p>{this.state.albumsInfos.artists[0].name}</p>}
        <p> Label : {this.state.albumsInfos.label}</p>

        {this.state.albumsInfos && (
          <p>Date de sortie :
            {convertDate(this.state.albumsInfos.release_date)}
          </p>
        )}
        <p> {this.state.albumsInfos.total_tracks} titre(s)</p>
        <p>Popularité : {this.state.albumsInfos.popularity}%</p>
        {
          this.state.albumsInfos && this.state.albumsInfos.tracks.items.map((singleTrack, i) => (
            <div>
              <p key={i}>{singleTrack.track_number}.
                {singleTrack.name}
                {convertTime(singleTrack.duration_ms)}
              </p>


            </div>
          ))
        }

      </div>

    );

  }

}
