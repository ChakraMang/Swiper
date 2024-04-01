import React, { useRef } from "react";
import { imageArray } from "../../data";
import "./style.css";

const ImageSwiper = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 100; // The amount to scroll when clicking the navigation buttons

  return (
    <div className="Swipercode">
      {/* Left navigation button */}
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
        }}
      >
        Left
      </button>
      {/* Image container */}
      <div className="images-container" ref={sliderRef}>
        {imageArray.map((image, i) => {
          return (
            <img className="image" alt="sliderImage" key={i} src={image} />
          );
        })}
      </div>
      {/* Right navigation button */}
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; // Scroll right by the specified amount
        }}
      >
        Right
      </button>
    </div>
  );
};

export default ImageSwiper;
