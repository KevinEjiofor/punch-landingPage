import NavBar from "../NavBar/index";
import UnderNavBar from "../underNavBar";
import Line from "../Line";
import SecondHero from '../SecondHero'
import ThirdHero from "../ThirdHero";
import FourthHero from "../FourthHero";
// import FifthHero from "../FifthHero";
import SixthHero from "../SixthHero";
import Footer from "../Footer";
import FootUnder from "../FooterUnder";
import Slide from "../SlideFooter";


export const LandingPage = () => {
  return (
    <>
      <NavBar />
      <UnderNavBar />
      <Line />
      <SecondHero />
      <ThirdHero />
      <FourthHero/>
      {/* <FifthHero /> */}
      <Slide />
      
      <SixthHero />
      <Footer />
      <FootUnder/>
    </>
  );
};
