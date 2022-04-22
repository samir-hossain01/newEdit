/** @format */

import styled from "styled-components";
// import images
import Background from "../../images/contactpagebackground.png";
const Wrapper = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  margin-top: 100px;
  form {
    max-width: 479px;
    width: 100%;
    @media (max-width: 980px) {
      max-width: 409px;
    }
    @media (max-width: 380px) {
      max-width: 290px;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 20px;
    }
    .row-2,
    .row-3,
    .row-4,
    .row-5 {
      margin-bottom: 20px;
    }
    .row-4 {
      display: flex;
      align-items: center;
      input {
        width: 20px;
        height: 20px;
        border-radius: 5px;
      }
      label {
        margin-left: 20px;
        font-size: 19px;
        font-weight: 500;
        letter-spacing: 1px;
        a {
          color: #99a332;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
    .row-5 {
      text-align: center;
      input {
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 25px;
        font-weight: 500;
        padding: 13px 45px;
        background: linear-gradient(90.26deg, #36454f 0.74%, #99a332 100%);
        border-radius: 13px;
        @media (max-width: 980px) {
          font-size: 19px;

          padding: 7px 45px;
        }
        cursor: pointer;
        :hover {
          background: linear-gradient(90.26deg, #99a332 0.74%, #36454f 100%);
        }
      }
    }
  }
`;

export default Wrapper;

export const Formcontrol = styled.div`
  input {
    width: 100%;
    background: #08afd1;
    border: 1px solid #ffffff;
    border-radius: 6px;
    color: #ffffff;
    padding: 15px 30px;
    font-size: 13px;
    font-weight: 500;
    outline: none;
    @media (max-width: 980px) {
      padding: 10px 30px;
      font-size: 13px;
    }
    ::placeholder {
      font-size: 19px;
      font-weight: 500;
      color: #ffffff;
      text-transform: uppercase;
      @media (max-width: 980px) {
        font-size: 14px;
      }
    }
  }

  textarea {
    width: 100%;
    background: #08afd1;
    border: 1px solid #ffffff;
    border-radius: 6px;
    color: #ffffff;
    padding: 25px 30px;
    font-size: 19px;
    font-weight: 500;
    outline: none;
    min-height: 150px;
    ::placeholder {
      font-size: 19px;
      font-weight: 500;
      color: #ffffff;
      text-transform: uppercase;
    }
  }
`;
