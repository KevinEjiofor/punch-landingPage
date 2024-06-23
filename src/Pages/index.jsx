import React from "react";
import NavBar from "./LandingPageCompontent/NavBar";
import UnderNavBar from "./LandingPageCompontent/underNavBar";
import SecondHero from "./LandingPageCompontent/SecondHero";
import ThirdHero from "./LandingPageCompontent/ThirdHero";
import FourthHero from "./LandingPageCompontent/FourthHero";
// import FifthHero from "./LandingPageCompontent/FifthHero";
import Footer from "./LandingPageCompontent/Footer";
import FootUnder from "./LandingPageCompontent/FooterUnder";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <UnderNavBar />
      <SecondHero />
      <ThirdHero />
      <FourthHero />
      {/* <FifthHero /> */}


      <Footer/>
      <FootUnder/>
    </>
  );
}
