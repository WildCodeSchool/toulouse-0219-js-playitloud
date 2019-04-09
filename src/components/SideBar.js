/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import Avatar from 'react-avatar';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import ProfilePage from './ProfilePage';
// import App from '../App'


class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar className="sidebar" light expand="md">
            <div className="pictureName">
              <Avatar className="profilpicture" name="Réminou Tilmant" size="75" color="rgb(229,9,20)" round />
              <NavbarBrand style={{ color: 'rgb(229,9,20)' }} className="playItLoud" href="/accueil">Play It Loud</NavbarBrand>
            </div>
            <NavbarToggler className="togglerButton" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="linksidebar" navbar>
                <NavItem>
                  <NavLink className="asidebar" exact to="/">Accueil</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="asidebar" exact to="/profile">Profil</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="asidebar" exact to="/favoris">Favoris</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="asidebar" exact to="/playlists">Playlists</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="asidebar" exact to="/albums">Albums</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/profile" component={ProfilePage} />
            {/* <Route exact path="/" component={App} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default SideBar;
