/** @format */

import React, { useState } from "react";
import Wrapper from "./Welcome.styled";
import { motion } from "framer-motion";
// Import Swiper React components
// import images
// import AboutSlider from "../../images/aboutSlider.png";
import AboutSlider2 from "../../images/aboutSlider2.png";
// import AboutSlider3 from "../../images/aboutSlider3.png";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

function Welcome() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // counter function
  const [counter, setCounter] = useState(1);
  function decrementCounter() {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  }

  const varients = {
    hidden: {
      width: 0,
      transition: { duration: 0.5 },
    },
    animate: {
      width: "100%",
      transition: { duration: 0.5 },
    },
    exit: {
      x: window.innerWidth,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="animate"
      exit="exit"
      variants={varients}
    >
      <Wrapper>
        <div className="totalItem">
          <div className="swiperSingleItem">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={AboutSlider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutSlider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutSlider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutSlider2} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={2}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={AboutSlider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutSlider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutSlider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AboutSlider2} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="grid-row" id="about">
            <div className="grid-column">
              <div className="counter-container">
                <button className="btn welcomeBtn">Mint Now</button>
                <div className="counter">
                  <button className="btn" onClick={decrementCounter}>
                    <Icon icon="akar-icons:minus" />
                  </button>
                  <div className="btn inputField">{counter}</div>
                  <button
                    className="btn"
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                  >
                    <Icon icon="ant-design:plus-outlined" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default Welcome;

/* <div className="row">
                <img src={AboutSlider} alt="slide" />
              </div>
              <div className="row-2">
                <img src={AboutSlider2} alt="slide" />
                <img src={AboutSlider3} alt="slide" />
              </div> */
