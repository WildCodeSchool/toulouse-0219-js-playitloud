/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

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
                  <a href="/" className="search_icon">
                    <i className="fas fa-search" />
                  </a>
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
