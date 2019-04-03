import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Homer Simpson" };
    this.onChange = this.onChange.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>

        <Navbar color="dark" light expand="md" className="fixed-top">
          <NavbarBrand href="/">{this.state.value}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" navbar>
            {/* SearchBar */}
            <NavItem>
              <div className="recherche mx-4">
                <div className="searchbar">
                  <input className="search_input " type="text" placeholder="Search..." onChange={this.onChange} />
                  <a href="#" className="search_icon"> <i className="fas fa-search"> </i> </a>
                </div>
              </div>
            </NavItem>
            {/* Dropdown Menu */}
            <NavItem>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle mx-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        </Navbar>
      </div>
    );
  }
}