import React from 'react';
import chekingTokenTimeStamp from '../functions/chekingTokenTimeStamp';


export default class PlaylistDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      PlayListInfos: '',
      tracks: []
    }
    this.apiCallById = this.apiCallById.bind(this);
  }


  componentDidMount() {
    this.apiCallById();
  }

  apiCallById() {
    chekingTokenTimeStamp(localStorage.getItem('tokenTimeStamp'))
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
          PlayListInfos: data

        });
      });

  }

  render() {
    return (
      <div className="main" style={{ color: 'white' }}>
        <h3> {this.state.PlayListInfos.name}</h3 >
        {
          this.state.PlayListInfos && this.state.PlayListInfos.tracks.items.map((singleTrack, i) =>
            <div>
              <p key={i}>{singleTrack.track_number}. {singleTrack.name} {this.convertTime(singleTrack.duration_ms)}</p>
            </div>)
        }
      </div >
    );
  };
}
