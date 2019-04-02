import React from 'react';
import Avatar from 'react-avatar';



const Navbar = props => (
  <div
    id="sidebar-wrapper"
    style={{
      color: "white",
      padding: "2rem 0"
    }}>
    <Avatar name={props.name} size="50" round={true} color="grey" />

    <ul id="sidebar_menu" className="sidebar-nav">
      <li className="sidebar-brand"><a id="menu-toggle">Welcome {props.name}
        <span id="main_icon" className="glyphicon glyphicon-align-justify"></span></a></li>
    </ul>
    <ul className="sidebar-nav" id="sidebar">
      <li>
        <a>Accueil<span className="sub_icon glyphicon glyphicon-link"></span></a>
      </li>
      <ul className="sidebar-nav" id="sidebar">
        <li>
          <a>Favoris<span className="sub_icon glyphicon glyphicon-link"></span></a>
        </li>
        <li>
          <a>Playlist<span className="sub_icon glyphicon glyphicon-link"></span></a>
        </li>
      </ul>
      <li>
        <a>Albums<span className="sub_icon glyphicon glyphicon-link"></span></a>
      </li>
    </ul>
  </div>
)
export default Navbar;