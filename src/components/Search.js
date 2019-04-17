/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Search extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" className="fixed-top">
          <Nav className="ml-auto" navbar>
            {/* SearchBar */}
            <NavItem>
              <div className="recherche mx-4">
                <div className="searchbar">

                  <input
                    className="search_input"
                    type="text" placeholder="Search..."
                    value={this.props.value}
                    onChange={this.props.change}

                  />

                  <NavLink className="search_icon" exact to="/" >
                    <i className="fas fa-search" />
                  </NavLink>
                </div>
              </div>
            </NavItem>

          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Search;
