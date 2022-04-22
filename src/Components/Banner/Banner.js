import React from "react";
import Wrapper from "./Banner.styled";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Backgroundimg from "../../images/screen.png";

function Banner() {
  const Navigate = useNavigate();
  function handleClick() {
    Navigate("/contact");
  }
  const varients = {
    hidden: {
      width: 0,
      transition: { duration: 0.5 },
    },
    animate: {
      width: "100%",
      transition: { duration: 0.5 },
    },
    exit: {
      x: window.innerWidth,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="animate"
      exit="exit"
      variants={varients}
    >
      <Wrapper>
        <div className="container">
          <div className="banner_wrapper">
            <div className="screenButtonGroup">
              <div className="buttnoMint">
                <button className="button">Mint Now</button>
              </div>
              <div className="buttonRed">
                <button onClick={handleClick} className="button">
                  REDEM
                </button>
              </div>
            </div>
            <img src={Backgroundimg} alt="background" />
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default Banner;
