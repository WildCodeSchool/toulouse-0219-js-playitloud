/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import FooterPage from './components/FooterPage';
import Search from './components/Search';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import AlbumDetails from './components/AlbumDetails';
import CategoryPlaylist from './components/CategoryPlaylist';
import PlaylistTracks from './components/PlaylistTracks';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      token: '',

    };
    this.onChange = this.onChange.bind(this);

  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  deco() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenTimeStamp');
    localStorage.removeItem('lastLink')
    window.location.replace('http://localhost:3000/');
  }

  render() {
    if (localStorage.getItem('token') !== null) {
      return (
        <div>
          <SideBar deco={this.deco} />
          <div className="main">
            <Search
              value={this.state.value}
              change={this.onChange}
            />
            <Switch>
              <Route exact path="/" render={props => <Home {...props} search={this.state.value} />} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/details-album/:id" component={AlbumDetails} />
              <Route path="/playlist/:category/:id" component={PlaylistTracks} />
              <Route path="/playlist/:category" component={CategoryPlaylist} />
            </Switch>
            <FooterPage />
          </div>
        </div >
      );
    } else {
      let urlParams = window.location.hash.split('&');
      urlParams = urlParams.map(element => element.split('='));
      if (urlParams[0][1] !== undefined) {
        localStorage.setItem('token', urlParams[0][1]);
        localStorage.setItem('tokenTimeStamp', Date.now())
        if (localStorage.getItem('lastLink') !== null) {
          window.location.replace('http://localhost:3000' + localStorage.getItem('lastLink'))
        } else {
          window.location.replace('http://localhost:3000/')
        }
      }
      else {
        return (
          <a style={{ color: 'red' }} href="https://accounts.spotify.com/authorize?client_id=136da030d9704f5e9314b475d1a79537&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email%20user-read-birthdate%20user-library-modify%20user-library-read&response_type=token&state=123" > Connectez - vous</a >
        )
      }
    }
  }
}

export default App;
