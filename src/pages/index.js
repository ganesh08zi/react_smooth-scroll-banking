import React, { useState } from "react";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";
import InfoSection from "../components/Infosection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/Infosection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/services";
import Sidebar from "../components/sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
