import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return (

      < div className="container h-50" >

        {/* SearchBar */}
        <div className="d-flex justify-content-right h-50">
          <div className="searchbar">
            <input className="search_input" type="text" name="" placeholder="Search..." />
            <a href="#" className="search_icon"> <i className="fas fa-search"> </i> </a>
          </div>

          {/* Dropdown Menu */}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genre
          </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Rock</a>
              <a className="dropdown-item" href="#">Rap</a>
              <a className="dropdown-item" href="#">etc etc</a>
            </div>
          </div>

        </div>
      </div >
    );
  }
}
export default SearchBar;
