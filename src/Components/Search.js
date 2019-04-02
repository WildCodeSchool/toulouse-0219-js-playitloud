import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>

        <Navbar color="dark" light expand="md" fixed-top>
          <NavbarBrand href="/">Musiflix</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* SearchBar */}
              <NavItem>
                <div className="recherche">
                  <div className="searchbar">
                    <input className="search_input" type="text" name="" placeholder="Search..." />
                    <a href="#" className="search_icon"> <i className="fas fa-search"> </i> </a>
                  </div>
                </div>
              </NavItem>
              {/* Dropdown Menu */}
              <NavItem>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Genre
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Rap</a>
                    <a className="dropdown-item" href="#">Rock</a>
                    <a className="dropdown-item" href="#">Pop</a>
                    <a className="dropdown-item" href="#">ASMR</a>
                    <a className="dropdown-item" href="#">Animaux</a>
                    <a className="dropdown-item" href="#">+18</a>
                    <a className="dropdown-item" href="#">Bébéluv</a>
                    <a className="dropdown-item" href="#">ASMR</a>
                  </div>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}