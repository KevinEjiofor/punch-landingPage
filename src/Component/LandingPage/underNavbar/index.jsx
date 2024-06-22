import React from "react";
import style from "./index.module.css";
import inputIcon from "../../../assets/Vector.png";
import ListDesign from "../../reuseable/LandingPage/ListDesign/index";
import lineDesign from "../../../assets/Union.png";


export default function UnderNavBarComponent() {
  return (
    <div className={style.mainDiv}>
      <div className={style.inputDiv}>
        <input id="search" placeholder="Looking for design  |" type="text" />
        <button>
          <img src={inputIcon} alt="search icon" />
        </button>
      </div>

      <div className={style.secondMainDiv}>
        <div className={style.buttonDiv}>
          <button className={style.button1}>IT & Development</button>
          <button className={style.button2}>Design and Creative</button>
        </div>
        <div className={style.listDesign}>
          <ListDesign
            text="Python Developer"
            text1="Shopify Developer"
            text2={<span style={{ color: "rgb(32, 34, 41)" }}>MERN Stack Developer</span>}
            text3="Full Stack Developer"
          />

          <ListDesign
            text="Data Scientist"
            text1="Front End Developer"
            text2="Shopify Developer"
            text3="Python Developer"
          />

          <ListDesign
            text="Shopify Developer"
            text1="Python Developer"
            text2="Full Stack Developer"
            text3={<span style={{ color: "rgb(32, 34, 41)" }}>Explore More</span>}
          
          />
        </div>
       
      </div>
      <div className={style.lineImage}>
      <img src={lineDesign} alt="" />
      </div>
     

     
    </div>
  );
}
