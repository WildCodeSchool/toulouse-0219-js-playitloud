import React, { Component } from "react";
import Slider from "react-slick";
import info from './albums.json';

const Cards = props => (
  <figure className="album">
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


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      vertical: false,
      centerPadding: '2px',
      row: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          {data.map(element => (
            <div>
              <Cards image={element.image} name={element.name} artist={element.artist} />
            </div>
          ))
          }
        </Slider>
      </div>
    );
  }
}