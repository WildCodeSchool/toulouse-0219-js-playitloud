import React from 'react';
import info from './albums.json';

const Cards = props => (
  <figure className="snip1584">
    <img src={props.image} />
    <figcaption>
      <h3>{props.name}</h3>
      <h5>{props.artist}</h5>
    </figcaption><a href="#"></a>
  </figure>
)

const data = info.albums.items.map(item => {
  const name = item.name;
  const id = item.id;
  const image = item.images[1].url;
  const artist = item.artists[0].name;
  return { name: name, id: id, image: image, artist: artist }
})

const Album = () => (
  <div>
    {
      data.map(element => (
        <div>
        <Cards image={element.image} name={element.name} artist={element.artist} />
        </div>
      ))
    }
  </div>
)


export default Album;