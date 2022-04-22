/** @format */

import styled from "styled-components";
import SliderBg from "../../images/about.png";

const Wrapper = styled.div`
  background: url(${SliderBg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 50px;

  align-items: center;
  @media (max-width: 992px) {
    padding: 20px;
  }
  .grid-row {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 20px;
    max-width: 1110px;
    width: 50%;
    margin: 140px auto;
    @media (max-width: 650px) {
      grid-gap: 20px;
    max-width: 1110px;
    width: 50%;
    margin: 40px auto;
    }
    .grid-column {
      display: flex;
      justify-content: center;
      align-items: center;
      .swiper {
        width: 500px;
        height: 500px;
        text-align: center;
        padding: 15px;
        background: linear-gradient(
          180deg,
          rgba(54, 69, 79, 0.69) 6.77%,
          rgba(151, 161, 50, 0.71) 100%
        );
        border-radius: 10px;
        .swiper-wrapper {
          margin-top: 70px;
          .swiper-slide {
            height: 400px;
            text-align: center;
            width: 100%;
            img {
              width: 280px;
            }
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          left: 15px;
          top: 30px;
          background: url("https://api.iconify.design/ant-design/left-outlined.svg?color=white");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 40px;
          background-color: #9aa71c87;
          cursor: pointer;
          :hover {
            background-color: #9aa71c;
          }
          ::after {
            content: "";
          }
        }
        .swiper-button-next {
          left: 80px;
          background: url("https://api.iconify.design/ant-design/right-outlined.svg?color=white");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 40px;
          background-color: #9aa71c87;
        }
      }
      .counter-container {
        text-align: center;
        button {
          cursor: pointer;
          font-size: 18px;
          font-weight: 500;
          @media (max-width: 400px) {
            font-size: 18px;
          }
        }
        .counter {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          .inputField {
            width: 100px;
            margin: 0 20px;
            font-size: 18px;
            @media (max-width: 400px) {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .swiperSingleItem {
    width: 50%;

    background: rgb(54, 69, 79);
    background: linear-gradient(
      63deg,
      rgba(54, 69, 79, 1) 0%,
      rgb(156 166 49 / 50%) 100%
    );

    text-align: center;
    padding: 80px 40px;
    text-align: center;
    @media (max-width: 700px) {
      width: 100%;
    }
    @media (max-width: 550px) {
    padding: 20px 10px;
    }
    
  }

  }

  .totalItem {
    display: flex;
    margin-top: 80px;
    @media (max-width: 700px) {
      display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
    }
  }
  @media (max-width: 780px) {
    .swiper-slide img {
      width: 120px;
    }


  }
`;

export default Wrapper;
