import React from 'react';
import chekingTokenTimeStamp from '../functions/chekingTokenTimeStamp';
import convertTime from '../functions/convertTime';


export default class PlaylistTracks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      playlistInfos: '',
      tracks: []
    }
    this.apiCallTracks = this.apiCallTracks.bind(this);
  }

  componentDidMount() {
    this.apiCallTracks();
  }

  apiCallTracks() {
    chekingTokenTimeStamp(localStorage.getItem('tokenTimeStamp'));
    fetch(`https://api.spotify.com/v1/playlists/${this.props.match.params.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          playlistInfos: data
        });
      });

  }

  render() {
    return (
      <div className="main" style={{ color: 'white' }}>
        {this.state.playlistInfos && <img src={this.state.playlistInfos.images[0].url} alt={this.state.playlistInfos.name} />}
        <h3> {this.state.playlistInfos.name}</h3 >
        {this.state.playlistInfos && <p>{this.state.playlistInfos.description}</p>}
        {
          this.state.playlistInfos && this.state.playlistInfos.tracks.items.map((singleTrack, i) =>
            <div>
              {this.state.playlistInfos &&
                <p key={i}>{i + 1}
                  . {singleTrack.track.artists
                    .map((singleArtist) => singleArtist.name).join(' & ')}
                  {" - "}{singleTrack.track.name}{" - "}{convertTime(singleTrack.track.duration_ms)}
                </p>
              }
            </div>
          )
        }
      </div>
    );
  };
}
