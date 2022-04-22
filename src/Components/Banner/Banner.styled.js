/** @format */

import styled from "styled-components";
import SliderBg from "../../images/bannerBg.png";

const Wrapper = styled.div`
  background: url(${SliderBg});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 100vh;
  .banner_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-56%, -43%);
      -ms-transform: translate(-56%, -43%);
      transform: translate(-57%, -44%);
      width: 450px;
      @media (max-width: 1120px) {
        position: absolute;

        transform: translate(-42%, -44%);
        width: 350px;
      }
      @media (max-width:900px) {
        transform: translate(-59%,-44%);
    width: 270px;
        
      }
    }
    .screenButtonGroup {
      z-index: 1;
      @media (max-width: 1120px) {
        position: relative;
        left: 50px;
      }
      @media (max-width:900px) {
        position: relative;
    left: -4px;
}
        
      }
    }
  }
  .button {
    margin-bottom: 20px;
    background: rgb(17, 124, 217);
    background-image: linear-gradient(
      90deg,
      rgba(17, 124, 217, 1) 0%,
      rgba(54, 69, 79, 1) 0%,
      rgba(153, 163, 50, 1) 100%,
      rgba(153, 163, 50, 1) 100%,
      rgba(0, 120, 158, 1) 100%,
      rgba(0, 154, 194, 1) 100%
    );
    font-family: Hagin-Font-Medium;
    width: 100%;
    padding: 10px 30px;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    color: white;
    width: 200px;
    border: 1px solid rgb(17, 124, 217);
    font-size: 20px;
    transition: 0.5s ease-in-out;
    :hover {
      background: transparent;
    }
    @media (max-width: 1028px) {
      width: 150px;
      font-size: 17px;
      margin-bottom: 6px;
    }
    :hover {
      border: 1px solid rgb(17, 124, 217);
      color: white;
    }
  }
`;

export default Wrapper;
