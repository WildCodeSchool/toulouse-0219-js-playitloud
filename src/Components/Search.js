import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

class search extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <div>
        <Navbar color="dark" light expand="md" className="fixed-top">
          <Nav className="ml-auto" navbar>
            {/* SearchBar */}
            <NavItem>
              <div className="recherche mx-4">
                <div className="searchbar">
                  <input className="search_input " type="text" placeholder="Search..." value={this.props.value} onChange={this.props.change} />
                  <a href="/" className="search_icon">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </NavItem>
            <NavItem>

              <h1>{this.props.value}</h1>

            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default search;
