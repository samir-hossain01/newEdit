/** @format */

import React, { useEffect, useState } from "react";
import Wrapper, { List } from "./Topnav.styled";
import Mainlogo from "../../images/mainLogo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Topnav({ background, backgroundtwo }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  // custom hook for load roadmap with screen size
  useEffect(() => {
    function checkScreenSize() {
      let elem = document.querySelector(".navigation");
      if (window.innerWidth < 768) {
        elem.style.width = 0 + "%";
      } else {
        elem.style.width = "auto";
      }
    }
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.addEventListener("resize", checkScreenSize);
    };
  }, [mobileMenu]);

  function handleClick() {
    let elem = document.querySelector(".navigation");
    if (mobileMenu) {
      elem.style.width = 0 + "%";
    } else {
      elem.style.width = 100 + "%";
    }
    setMobileMenu(!mobileMenu);
  }

  function closeMenu() {
    let elem = document.querySelector(".navigation");
    if (window.innerWidth < 768) {
      elem.style.width = 0 + "%";
    } else {
      elem.style.width = "auto";
    }
    setMobileMenu(false);
  }

  return (
    <Wrapper background={background}>
      <div>
        <Link to='/'>
          <img src={Mainlogo} alt='logo' />
        </Link>
        <List backgroundtwo={backgroundtwo} className='navigation'>
          <li>
            <Link onClick={closeMenu} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to='/roadmap'>
              Roadmap
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to='/meetteam'>
              MeetTeam
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to='/faq'>
              Faq
            </Link>
          </li>
        </List>
        <div className='mobileMenu'>
          <button onClick={handleClick}>
            {mobileMenu ? (
              <Icon icon='akar-icons:cross' />
            ) : (
              <Icon icon='fa6-solid:bars-staggered' />
            )}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
export default Topnav;
