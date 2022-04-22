/** @format */

import styled from "styled-components";
import MeatTeam from "../../images/meetteam.png";

const Wrapper = styled.div`
  background: url(${MeatTeam});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 40px 0px;
  @media (max-width: 1120px) {
    padding: 100px 0px;
  }
  .teamSingleItem {
    .meetTeamTitle {
      padding: 10px 40px;
      font-size: 35px;
      background: rgb(17, 124, 217);
      background: linear-gradient(
        90deg,
        rgba(17, 124, 217, 1) 0%,
        rgba(54, 69, 79, 1) 0%,
        rgba(153, 163, 50, 1) 100%,
        rgba(153, 163, 50, 1) 100%,
        rgba(0, 120, 158, 1) 100%,
        rgba(0, 154, 194, 1) 100%
      );
      display: inline-block;
      border-radius: 8px;
      margin-bottom: 30px;
      @media (max-width: 575px) {
        font-size: 24px;
      }
    }
  }
  .teamCardItem {
    display: grid;
    grid-template-columns: 4fr 8fr;
    gap: 20px;
    margin-bottom: 20px;
    @media (max-width: 972px) {
      grid-template-columns: 1fr;
    }
  }
  .teamCardItem p {
    font-family: "Raleway", sans-serif;
    font-size: 19px;
  }
  .teamLeftCard {
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #000000b8;
    padding: 20px;
    border-radius: 10px;
    font-size: 29px;
    text-align: center;
    h3 {
      font-family: "Raleway", sans-serif;
      @media (max-width: 972px) {
        font-size: 25px;
      }
    }
  }
  .rightCard {
    background: rgb(17, 124, 217);
    background: linear-gradient(
      90deg,
      rgba(17, 124, 217, 1) 0%,
      rgba(118, 34, 5, 0.700717787114846) 0%,
      rgba(148, 119, 67, 1) 100%,
      rgba(153, 163, 50, 1) 100%,
      rgba(0, 120, 158, 1) 100%,
      rgba(0, 154, 194, 1) 100%
    );
    padding: 10px 20px;
    border-radius: 10px;
  }
  .rightCardTop {
    display: flex;
    align-items: center;
  }
  .teamTopImg {
    img {
    }
  }
  .teamTopTitle {
    display: flex;
    margin-left: 20px;
    align-items: center;
    flex-wrap: wrap;
    h4 {
      font-family: Hagin-Font-Medium;
      font-size: 25px;
      font-weight: 300;
    }
    span {
      margin-left: 20px;
      font-family: "Raleway", sans-serif;
    }
  }
  .teamCardItem2 {
    grid-template-columns: 8fr 4fr;
    @media (max-width: 972px) {
      grid-template-columns: 1fr;
    }
  }
  .socilaICon {
    margin-top: 20px;
  }
  .SocialButton {
    background-color: transparent;
    margin-right: 20px;
    border: 0;
    img {
      width: 35px;
    }
  }
  @media (max-width: 972px) {
    .rightCardReverse {
      order: 2;
    }
  }
`;

export default Wrapper;
