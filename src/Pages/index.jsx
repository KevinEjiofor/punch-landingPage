import React from "react";
import NavBar from "./LandingPageCompontent/NavBar";
import UnderNavBar from "./LandingPageCompontent/underNavBar";
import SecondHero from './LandingPageCompontent/SecondHero'
import ThirdHero from "../Component/LandingPage/ThirdHero";
import FourthHero from "../Component/LandingPage/FourthHero";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <UnderNavBar/>
      <SecondHero/>
      <ThirdHero/>
      <FourthHero/>

    </>
  );
}
