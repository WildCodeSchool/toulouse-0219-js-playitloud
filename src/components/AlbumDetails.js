import React from 'react';

export default class AlbumDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      albumsInfos: "",
    }
    this.apiCallById = this.apiCallById.bind(this);
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
        <h3>Nom de l'album : {this.state.albumsInfos.name}</h3>
        <h5>Côte de popularité : {this.state.albumsInfos.popularity}%</h5>
      </div >
    );
  };
}