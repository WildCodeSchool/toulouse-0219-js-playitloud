import React, { Component } from "react";
import Slider from "react-slick";
import data from './data';
import Cards from './Cards';



export default class Caroussel extends Component {

  render() {
    let settings = {
      dots: true,
      infinite: false,
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
          {data
           .filter(singleAlbum => singleAlbum.name
              .toLowerCase()
              .includes(this.props.keyword.toLowerCase()))
            .map(element => (
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