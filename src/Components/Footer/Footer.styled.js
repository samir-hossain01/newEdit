/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  background: rgb(17, 124, 217);
  background: linear-gradient(
    90deg,
    rgba(17, 124, 217, 1) 0%,
    rgba(54, 69, 79, 0.88) 0%,
    rgba(153, 163, 50, 0.83) 100%,
    rgba(153, 163, 50, 1) 100%,
    rgba(0, 120, 158, 1) 100%,
    rgba(0, 154, 194, 1) 100%
  );
  padding: 30px 0px;
  .footerLogo {
    text-align: center;
    img {
    }
  }
  .social-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    button {
      font-size: 33px;
      width: 80px;
      padding: 5px 0;

      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      background-color: transparent;
      color: #ffffff;

      cursor: pointer;
      transition: 0.3s ease;
      margin-top: 30px;

      :not(:last-child) {
        margin-right: 0px;
        margin-top: 30px;
      }

      :hover {
      }
    }
  }
`;

export default Wrapper;
