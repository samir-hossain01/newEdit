import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Welcome from "./Components/Welcome/Welcome";
import Roadmaptwo from "./Components/Roadmaptwo/Roadmaptwo";
import Roadmap from "./Components/Roadmap/Roadmap";
import Meetteam from "./Components/MeetTeam/MeetTeam";
import Faq from "./Components/Faq/Faq";
import Contact from "./Pages/Contact";

export default function Approutes() {
  const [width, setWidth] = useState(false);
  let location = useLocation();
  // custom hook for load roadmap with screen size
  useEffect(() => {
    function checkScreenSize() {
      if (window.innerWidth < 992) {
        setWidth(true);
      } else {
        setWidth(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.addEventListener("resize", checkScreenSize);
    };
  }, [width]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Banner />} />
        <Route path="about" element={<Welcome />} />
        <Route path="roadmap" element={width ? <Roadmaptwo /> : <Roadmap />} />
        <Route path="meetteam" element={<Meetteam />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
