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
  NavLink,
} from 'reactstrap';


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
      <Navbar className="sidebar" light expand="md">
        <div className="pictureName">
          <Avatar className="profilpicture" name="Réminou Tilmant" size="75" color="red" round />
          <NavbarBrand className="playItLoud" href="/">Play It Loud</NavbarBrand>
        </div>
        <NavbarToggler className="togglerButton" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="linksidebar" navbar>
            <NavItem>
              <NavLink href="/components/">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Favoris</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Playlist</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Albums</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}


export default SideBar;
