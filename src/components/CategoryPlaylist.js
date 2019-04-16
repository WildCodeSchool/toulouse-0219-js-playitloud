import React from 'react';
import chekingTokenTimeStamp from '../functions/chekingTokenTimeStamp';

export default class CategoryPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      categoryInfo: "",
      tracks: []
    }
    this.playlistByCategory = this.playlistByCategory.bind(this);
  }

  componentDidMount() {
    this.playlistByCategory();
  }

  playlistByCategory() {
    chekingTokenTimeStamp(localStorage.getItem('tokenTimeStamp'))
    fetch(`https://api.spotify.com/v1/browse/categories/${this.props.match.params.id}/playlists?country=FR&offset=0&limit=20`, {
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
            <div>
              <figure className="album">
                <img src={singlePlaylist.images[0].url} alt={singlePlaylist.name} />
                <figcaption id={this.props.id}
                // onClick={() => { this.props.click(this.props.id); localStorage.setItem('lastLink', `/details-album/${this.props.id}`) }} 
                >
                  <h3 key={i}>{singlePlaylist.name}</h3>
                </figcaption>
              </figure>
            </div>)
        }
      </div >
    );
  }
}