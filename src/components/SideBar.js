/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as NavRouter } from 'react-router-dom';
// import { REPL_MODE_STRICT } from 'repl';
import splitName from '../functions/splitName';


class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      profile: ''
    };
  }
  componentDidMount() {
    this.getUserProfil()
  }

  getUserProfil() {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          profile: data,
        });
      });
  }
  toggle() {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="sidebar" dark>
          <NavbarToggler className="togglerButton" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="pictureName">
              {this.state.profile &&
                <img
                  style={{ borderRadius: "100%", maxWidth: "15vh" }}
                  className="profilePicture"
                  src={this.state.profile.images[0].url}
                  alt={this.state.profile.display_name}
                />}
            </div>
            <h6 style={{ color: "white", paddingTop: "3vh" }}>
              Bonjour {this.state.profile && splitName(this.state.profile.display_name)}
            </h6>
            <NavbarBrand style={{ color: 'rgb(229,9,20)' }} tag={NavRouter} className="playItLoud" to="/">Play it Loud</NavbarBrand>
            <Nav className="linksidebar" navbar>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" to="/" onClick={() => { localStorage.setItem('lastLink', '/') }}>Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" to="/profile" onClick={() => { localStorage.setItem('lastLink', '/profile') }}>Ton profil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" to="/favoris" onClick={() => { localStorage.setItem('lastLink', '/favoris') }}>Favoris</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" to="/playlists" onClick={() => { localStorage.setItem('lastLink', '/playlists') }}>Playlists</NavLink>
              </NavItem>
              <NavItem>
                <button className='decoButton' onClick={this.props.deco} >Déconnexion</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}


export default SideBar;
