import React from 'react';

const Cards = props => (
  <figure className="album">
    <img src={props.image} />
    <figcaption>
      <h3>{props.name}</h3>
      <h5>{props.artist}</h5>
    </figcaption><a href="#"></a>
  </figure>
)


export default Cards;