/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import SpotifyPlayer from 'react-spotify-player';


class Search extends React.Component {
  render() {

    this.nmbLength = this.props.location.pathname.length;
    this.catchID = (ID) => {
      return ID.substring((this.nmbLength - 22), this.nmbLength)
    }
    console.log(this.catchID(this.props.location.pathname))


    const size = {
      width: '100%',
      height: '70rem',
    };
    const view = 'coverart';
    const theme = 'white';

    const URLMUSIC = () => {
      if (this.props.location.pathname.includes("playlist")) {
        return `spotify:playlist:${this.catchID(this.props.location.pathname)}`
      }
      else {
        return `spotify:album:${this.catchID(this.props.location.pathname)}`

      }
    }

    return (
      <div>

        <Navbar color="dark" light expand="md" className="fixed-top" bg-white>
          <SpotifyPlayer
            uri={URLMUSIC()}
            size={size}
            view={view}
            theme={theme}
          />

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

export default withRouter(Search);
