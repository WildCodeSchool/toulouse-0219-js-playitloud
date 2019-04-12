import React from 'react';
import convertDate from '../functions/convertDate';

export default class AlbumDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      albumsInfos: '',
      tracks: []
    }
    this.apiCallById = this.apiCallById.bind(this);
  }
  convertTime = (MS) => {
    const minute = (MS / 60000).toFixed(0);
    const second = ((MS % 60000) / 1000).toFixed(0);
    return `${minute}min  ${second}s`;
  }

  componentDidMount() {
    this.apiCallById();
  }

  apiCallById() {
    fetch(`https://api.spotify.com/v1/albums/${this.props.match.params.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          albumsInfos: data

        });
      });

  }

  render() {
    return (
      <div className="main" style={{ color: 'white' }}>
        {this.state.albumsInfos && <img src={this.state.albumsInfos.images[1].url} alt="pictures" />}
        < h3 > {this.state.albumsInfos.name}</h3 >
        {this.state.albumsInfos && <p>{this.state.albumsInfos.artists[0].name}</p>}
        < p > Label : {this.state.albumsInfos.label}</p >
        {this.state.albumsInfos && <p>Date de sortie : {convertDate(this.state.albumsInfos.release_date)}</p>}
        <p>{this.state.albumsInfos.total_tracks} titre(s)</p>
        <p>Popularité : {this.state.albumsInfos.popularity}%</p>
        {
          this.state.albumsInfos && this.state.albumsInfos.tracks.items.map((singleTrack, i) =>
            <div>
              <p key={i}>{singleTrack.track_number}. {singleTrack.name} {this.convertTime(singleTrack.duration_ms)}</p>
            </div>)
        }
      </div >
    );
  };
}
