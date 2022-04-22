/** @format */

import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100px;
  z-index: 9999;
  background: ${(props) =>
    props.background
      ? "linear-gradient( 90deg, #36454f 0%, #9ca631 100% )"
      : "transparent"};
  div {
    width: 100%;
    height: 100%;
    padding: 15px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
      position: relative;
      padding: 15px 30px;
    }
    a {
      img {
        @media (max-width: 570px) {
          width: 120px;
        }
      }
    }

    .mobileMenu {
      display: none;
      @media (max-width: 768px) {
        display: block;
        width: 100px;
      }
      button {
        border: none;
        outline: none;
        font-size: 35px;
        color: #ffffff;
        cursor: pointer;
        background: transparent;
      }
    }
  }
`;
export default Wrapper;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  background: ${(props) =>
    props.backgroundtwo
      ? "linear-gradient( 90deg, #36454f 0%, #9ca631 100% )"
      : "transparent"};
  padding: 10px 15px;
  border-radius: 10px;
  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    width: 0;
    right: 0;
    top: 100%;
    height: calc(100vh - 100px);
    overflow: hidden;
    transition: 0.5s ease;
    padding: 10px 0px;
  }
  li {
    :not(:last-child) {
      a {
        margin-right: 20px;
        @media (max-width: 768px) {
          margin-right: 0;
        }
      }
    }
    a {
      display: inline-block;
      text-decoration: none;
      font-size: 22px;
      color: #ffffff;
      padding: 12px 22px;
    }
  }
`;
