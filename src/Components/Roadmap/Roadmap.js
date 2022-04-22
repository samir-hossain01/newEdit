import React from "react";
import Wrapper from "./Roadmap.styled";
// import images
import Lock from "../../images/lock.png";
import { motion } from "framer-motion";
// locoomtive scroll

function Roadmap() {
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
          <div className="roadmap-container">
            <div className="section-title" id="roadmap">
              <h2>TACOS ROADMAP</h2>
            </div>
            <div className="roadmap">
              <div className="lock first-lock">
                <div className="border"></div>
                <img src={Lock} alt="lock" />
              </div>
              <div className="description">
                <p>All holders will receive the following IRL benefits:</p>
                <p>
                  - 20% discount at all current, and future StrEATS restaurant
                  locations
                </p>
                <p>- VIP access to new store opens</p>
                <p>- Access to after hours parties and private tastings</p>
                <p>- Ability to vote on new feature menu items</p>
              </div>
              <div className="title">
                <h3>In Store Benefit</h3>
              </div>
            </div>
            <div className="roadmap">
              <div className="lock second-lock">
                <div className="border"></div>
                <img src={Lock} alt="lock" />
              </div>
              <div className="title">
                <h3>Monthly Raffles</h3>
              </div>
              <div className="description">
                On the first day of each month, we will raffle a predetermined
                amount of winners decided by the community, these winners will
                split 1% of that month's gross revenue brought in by the StrEATS
                brand paid out in ETH/WETH. Based on 2021’s sales, that's about
                $5,000+ a month that we will be giving back to our holders,
                completely free!
              </div>
            </div>
            <div className="roadmap">
              <div className="lock">
                <div className="border"></div>
                <img src={Lock} alt="lock" />
              </div>
              <div className="description">
                Hidden within the metadata of the un-revealed Tenacious Tacos
                NFT collection there will be 7 Golden Tacos, and the StrEATS
                Mascot 1-of-1. The 7 Golden Tacos will correlate to the 7
                different tacos we serve in our restaurant, and the holders of
                these Golden Tacos will receive monthly payments in ETH/WETH,
                loosely based around the number of sales the corresponding menu
                item has for that month. Based off of 2021’s sales, the yearly
                income for the holders of the 7 Golden Tacos will be as follows:
                ~$5000 annually for the holder of the Golden Fish Taco ~$4500
                annually for the holder of the Golden Mango Shrimp Taco ~$3000
                annually for the holder of the Golden Beef Taco ~$2500 annually
                for the holder of the Golden Buffalo Chicken Taco ~$2000
                annually for the holder of the Golden Pork Taco ~$2000 annually
                for the holder of the Golden Chicken Taco ~$1500 annually for
                the holder of the Golden Feature Taco As for the StrEATS Mascot,
                it will have a 1-of-1 trait, the illusive ‘Black Card’, this
                trait entitles the holder to eat for free at all StrEATS brand
                locations, for life!
              </div>
              <div className="title title2">
                <h3>Golden Tacos</h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default Roadmap;
