import React, { Component } from 'react';
import DisplayProfile from './DisplayProfile';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ''
    };
  }

  componentDidMount() {
    this.getUserProfil();
  }

  getUserProfil() {
    fetch('https://api.spotify.com/v1/me', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          profile: data,
        });
      });
  }

  render() {
    return (

      <div className="Profile">

        {this.state.profile && <DisplayProfile profile={this.state.profile} />}
      </div>
    );
  }
}
export default ProfilePage;
