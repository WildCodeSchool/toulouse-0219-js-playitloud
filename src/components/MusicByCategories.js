import React, { Component } from "react";
import Slider from "react-slick";

class MusicByCategories extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      autoplay: false,
      speed: 300,
      slidesToShow: 4,
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

          {this.props.categories}

        </Slider>
      </div>
    );
  }
}

export default MusicByCategories;
