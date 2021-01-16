import React, { Component } from "react";
import Slider from "react-slick";
import CardImage from './Card';

export default class Carrousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <CardImage/>
          </div>
          <div>
            <CardImage/>
          </div>
          <div>
            <CardImage/>
          </div>
          <div>
            <CardImage/>
          </div>
          <div>
            <CardImage/>
          </div>
          <div>
            <CardImage/>
          </div>
          <div>
            <CardImage/>
          </div>
          <div>
            <CardImage/>
          </div>
        </Slider>
      </div>
    );
  }
}