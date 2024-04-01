import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { imageArray } from "../../data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const ImageSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation={true}
    >
      {imageArray.map((e, i) => (
        <SwiperSlide className="image">
          <img src={e} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
