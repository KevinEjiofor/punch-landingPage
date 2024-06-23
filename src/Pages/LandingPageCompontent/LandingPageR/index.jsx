import NavBar from "../NavBar/index";
import UnderNavBar from "../underNavBar";
import SecondHero from '../SecondHero'
import ThirdHero from "../ThirdHero";
import FourthHero from "../FourthHero";
// import FifthHero from "../FifthHero";
import Footer from "../Footer";
import FootUnder from "../FooterUnder";

export const LandingPage = () => {
  return (
    <>
      <NavBar />
      <UnderNavBar />
      <SecondHero />
      <ThirdHero />
      <FourthHero/>
      {/* <FifthHero /> */}
      <Footer />
      <FootUnder/>
    </>
  );
};
