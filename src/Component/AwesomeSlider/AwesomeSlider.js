import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { imageArray } from "../../data";

const Slider = () => {
  return (
    <div>
      <AwesomeSlider  >
        {imageArray.map((e, i) => (
          <div className="image">
            <img src={e} alt="" />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
