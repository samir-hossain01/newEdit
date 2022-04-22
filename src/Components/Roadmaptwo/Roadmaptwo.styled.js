/** @format */

import styled from "styled-components";
import Roadmapimg from "../../images/roadMap.png";

const Wrapper = styled.div`
  font-family: "Saira Condensed", sans-serif;
  letter-spacing: 1px;
  padding-bottom: 50px;
  background: url(${Roadmapimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .roadmap-container {
    margin: 0 auto;
    @media (max-width: 820px) {
      padding-top: 70px;
    }
    .roadmap {
      max-width: 600px;
      width: 100%;
      margin: auto;
      margin-bottom: 20px;
      color: #ffffff;
      > div {
        margin-bottom: 20px;
      }
      .lock {
        position: relative;
        ::after {
          content: "";
          width: calc(100% + 100px);
          height: 3px;
          background: linear-gradient(-90deg, #f8dc00 0%, #58bc01 100%);
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50px, -50%);
          @media (max-width: 640px) {
            display: none;
          }
        }
        img {
          z-index: 99;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: auto;
          background: linear-gradient(180deg, #36454f 0%, #99a332 100%);
          padding: 15px;
        }
        .border {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: auto;
          box-shadow: 0px 4px 25px #e3bb6f;
          display: flex;
          justify-content: center;
          align-items: center;
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
        position: relative;
        ::after {
          content: "";
          width: 50px;
          height: 3px;
          background: linear-gradient(-90deg, #f8dc00 0%, #58bc01 100%);
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(100%, -50%);
          @media (max-width: 640px) {
            display: none;
          }
        }
        ::before {
          content: "";
          width: 3px;
          height: 50%;
          background: linear-gradient(180deg, #f8dc00 0%, #58bc01 100%);
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .first-description {
        ::before {
          top: 50%;
          height: 77%;
          transform: translateX(50px);
          @media (max-width: 768px) {
            height: 71%;
          }
          @media (max-width: 640px) {
            display: none;
          }
        }
      }
      .second-description {
        ::after {
          left: 0;
          transform: translate(-100%, -50%);
          @media (max-width: 640px) {
            display: none;
          }
        }
        ::before {
          top: -135px;
          left: 0;
          height: 123%;
          transform: translateX(-50px);
          @media (max-width: 768px) {
            height: 107%;
          }
          @media (max-width: 640px) {
            display: none;
          }
        }
        .border {
          width: 3px;
          height: 80%;
          background: linear-gradient(180deg, #f8dc00 0%, #58bc01 100%);
          position: absolute;
          right: -50px;
          top: 50%;
          @media (max-width: 768px) {
            height: 73%;
          }
          @media (max-width: 640px) {
            display: none;
          }
        }
        .border2 {
          width: 50px;
          height: 3px;
          background: linear-gradient(-90deg, #f8dc00 0%, #58bc01 100%);
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(100%, -50%);
          @media (max-width: 640px) {
            display: none;
          }
        }
      }
      .third-description {
        ::after {
          left: 0;
          transform: translate(-100%, -50%);
          @media (max-width: 640px) {
            display: none;
          }
        }
        ::before {
          height: 78%;
          left: 0;
          top: -135px;
          transform: translateX(-50px);
          @media (max-width: 768px) {
            height: 73%;
          }
          @media (max-width: 640px) {
            display: none;
          }
        }
      }
      .title {
        text-align: center;
        h3 {
          display: inline-block;
          padding: 13px 26px;
          background: linear-gradient(90.26deg, #36454f 30.21%, #99a332 100%);
          border-radius: 5px;
          font-size: 27px;
          font-weight: 700;
          text-transform: capitalize;
        }
      }
    }
  }
`;

export default Wrapper;
