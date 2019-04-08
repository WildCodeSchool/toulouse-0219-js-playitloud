import React, { Component } from "react";
import Slider from "react-slick";
// import Cards from './Cards';
// import FavoriteAlbums from "./FavoriteAlbums";



export default class Caroussel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      autoplay: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      vertical: false,
      centerPadding: '20px',
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

          {this.props.api}

        </Slider>
      </div>
    );
  }
}