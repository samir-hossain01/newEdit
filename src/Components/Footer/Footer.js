/** @format */

import React from "react";

import Wrapper from "./Footer.styled";
import Logo from "../../images/mainLogo.png";
// import icons
import { Icon } from "@iconify/react";

function Footer() {
  // scroll with offset

  return (
    <Wrapper>
      <div className='footerLogo'>
        <img src={Logo} alt='' />
      </div>
      <div className='social-icons'>
        <button>
          <Icon icon='akar-icons:twitter-fill' />
        </button>
        <button>
          <Icon icon='akar-icons:discord-fill' />
        </button>
      </div>
    </Wrapper>
  );
}

export default Footer;
