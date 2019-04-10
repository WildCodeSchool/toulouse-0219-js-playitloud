import React from 'react';

export default class FavoriteAlbums extends React.Component {
  render() {
    return(
      <ul>
        <li>
          {this.props.albumList}
        </li>
      </ul>
    );
  }
}