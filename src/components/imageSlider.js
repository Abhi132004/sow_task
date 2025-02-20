// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageSlider.css';

const ImageSlider = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-title">{card.title}</div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;