import React from 'react';
import albumList from "../spotify-albums";
import Search from './Search';
import Carousel from './Carousel';

class AlbumList extends React.Component {

  render() {
    
    return (
      <div className="App">
      <ul>
        {albumList.albums.items
          .filter(singleAlbum => singleAlbum.name
            .toLowerCase()
            .includes(this.props.keyword.toLowerCase()))
          .map(singleAlbum => (
            <li>
              {singleAlbum.name}
            </li>
          ))}
      </ul>
      </div>
    );
  }
}

export default AlbumList;