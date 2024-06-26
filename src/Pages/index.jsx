import React from "react";
import NavBar from "./LandingPageCompontent/NavBar";
import UnderNavBar from "./LandingPageCompontent/underNavBar";
import Line from "./LandingPageCompontent/Line";
import SecondHero from "./LandingPageCompontent/SecondHero";
import ThirdHero from "./LandingPageCompontent/ThirdHero";
import FourthHero from "./LandingPageCompontent/FourthHero";
import FifthHero from "./LandingPageCompontent/FifthHero";
import SixthHero from "./LandingPageCompontent/SixthHero";
import Slide from "./LandingPageCompontent/SlideFooter";

import Footer from "./LandingPageCompontent/Footer";
// import FootUnder from "./LandingPageCompontent/FooterUnder";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <UnderNavBar />
       <Line  /> 
      <SecondHero />
      <ThirdHero />
      <FourthHero /> 
      <FifthHero />

     <Slide/>
     <SixthHero/>
      <Footer/>
      {/* <FootUnder/>  */}
    </> 
  );
}
