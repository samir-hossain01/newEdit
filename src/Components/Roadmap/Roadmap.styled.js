/** @format */

import styled from "styled-components";
import Roadmapimg from "../../images/roadMap.png";
const Wrapper = styled.div`
  padding: 100px 0;
  font-family: "Saira Condensed", sans-serif;
  letter-spacing: 1px;
  background: url(${Roadmapimg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .roadmap-container {
    margin: 0 auto;
    .roadmap {
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      position: relative;
      @media (max-width: 767px) {
        display: block;
      }
      .lock {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        ::after {
          content: "";
          width: 150px;
          border: 3px solid #cd9005;
          position: absolute;
          left: -130px;
        }
        .border {
          width: 100%;
          height: 100%;
          border-radius: 50px;
          position: absolute;
          left: 0;
          background: linear-gradient(180deg, #36454f 0%, #99a332 100%);
          box-shadow: 0px 4px 25px #e3bb6f;
        }
        img {
          width: 50%;
          z-index: 99;
          width: 100%;
          height: 100%;
          border-radius: 50px;
          position: absolute;
          left: 0;
          background: linear-gradient(180deg, #36454f 0%, #99a332 100%);
          box-shadow: 0px 4px 25px #e3bb6f;
          padding: 15px;
        }
      }
      .first-lock,
      .second-lock {
        ::before {
          content: "";
          border: 3px solid #cd9005;
          height: 350px;
          position: absolute;
          top: 35px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .second-lock {
        ::before {
          height: 518px;
        }
      }
      > div {
        max-width: 408px;
        width: 100%;
        margin: 0;
        @media (max-width: 988px) {
          max-width: 232px;
        }
        @media (max-width: 767px) {
          max-width: 100%;
          margin: 70px 0px;
        }
      }
      .description {
        font-size: 19px;
        font-weight: 600;
        line-height: 1.4;
        padding: 26px 31px;
        background: linear-gradient(
          180deg,
          rgba(54, 69, 79, 1) 0%,
          rgba(153, 163, 50, 1) 100%
        );
        border-radius: 7px;
        z-index: 99;
        @media (max-width: 988px) {
          font-size: 16px;
          padding: 16px 17px;
        }
      }
      .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        h3 {
          display: inline-block;
          padding: 13px 26px;
          background: linear-gradient(90.26deg, #36454f 30.21%, #99a332 100%);
          border-radius: 5px;
          font-size: 27px;
          font-weight: 700;
          text-transform: capitalize;
          @media (max-width: 988px) {
            font-size: 20px;
          }
        }
      }
      :nth-child(3) {
        .title {
          justify-content: flex-end;
        }
        .lock {
          ::after {
            left: auto;
            right: -130px;
          }
        }
      }
    }
  }
`;

export default Wrapper;
