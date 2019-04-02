import React, { Component } from 'react'
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


class SearchBar extends Component {
  render() {
    return (

      <nav className="navbar fixed-top navbar-light bg-dark max-width">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="https://image.flaticon.com/icons/svg/26/26762.svg" alt="logo" />
        </a>
        {/* SearchBar */}
        <div className="align-self-center">
          <div className="searchbar">
            <input className="search_input" type="text" name="" placeholder="Search..." />
            <a href="#" className="search_icon"> <i className="fas fa-search"> </i> </a>
          </div>
        </div>
        {/* Dropdown Menu */}


        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Genre
  </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Rap</a>
            <a className="dropdown-item" href="#">Rock</a>
            <a className="dropdown-item" href="#">Pop</a>
            <a className="dropdown-item" href="#">Metal</a>
            <a className="dropdown-item" href="#">Animaux</a>
            <a className="dropdown-item" href="#">+18</a>
            <a className="dropdown-item" href="#">classique</a>
            <a className="dropdown-item" href="#">ASMR</a>
          </div>
        </div>
      </nav>
    );
  }
}
export default SearchBar;
