/** @format */

import React from "react";
import Wrapper from "./ComponentSlider.styled";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

import Slider from "../slider/Slider";
// import required modules
import { Pagination } from "swiper";
function ComponentSlider() {
  return (
    <Wrapper>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

export default ComponentSlider;
