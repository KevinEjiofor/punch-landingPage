import React from "react";
import style from "./index.module.css";
import logoDesign from "../../../assets/SVGImage/logDesign.svg";
import logoDesign1 from "../../../assets/SVGImage/logo2.svg";
import IconWithText from "../../reuseable/LandingPage/IconAndText/index"; // Ensure the import path is correct
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import Button from "../../reuseable/LandingPage/Button/index"
import image from "../../../assets/frame.png"



export default function SecondHero() {
  return (
    <div className={style.mainDiv}>
       
      <div className={style.headerText}>
        <h1>
          Your one-stop marketplace for
          <br />
          finding the talent your business
        </h1>
        <h1 className={style.need}>needs.</h1>
      </div>

      <div className={style.allIcons}>
        <div className={style.icons}>
          <IconWithText
            textHeader="Find Dev and IT professionals to scale your business."
            image1={icon1}
            text1="989 Skills"
            image2={icon2}
            text2="45 Sub-Categories"
            image3={icon3}
            text3="1011 Profiles"
          />

          <IconWithText
            textHeader="Explore Creative individuals with a keen eye for detail.  "
            image1={icon1}
            text1="989 Skills"
            image2={icon2}
            text2="45 Sub-Categories"
            image3={icon3}
            text3="1011 Profiles"
          />
        </div>
        <div className={style.logos}>
          <img src={logoDesign} alt="Logo Design" />
          <img src={logoDesign1} alt="Logo Design 1" />

          
        </div>

        
      </div>
      <div className={style.lastDiv}>

         <Button
         image={image}
         text="Explore More"
         />
       


        <p>30 more <span>to exploret</span></p>

        </div>
      <div />
    </div>
  );
}
