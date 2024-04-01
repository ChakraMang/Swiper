import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageArray } from "../../data";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "60px", // Adjusted padding for larger screens
          slidesToShow: 4, // Show 4 slides on larger screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px", // Adjusted padding for medium screens
          slidesToShow: 3, // Show 3 slides on medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px", // Adjusted padding for smaller medium screens
          slidesToShow: 2, // Show 2 slides on smaller medium screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px", // Adjusted padding for smaller screens
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {imageArray.map((e, i) => (
        <div className="image">
          <img src={e} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
