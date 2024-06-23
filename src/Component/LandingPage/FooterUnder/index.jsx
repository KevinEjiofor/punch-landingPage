import React from "react";
import style from "./index.module.css";
import Button from "../../reuseable/LandingPage/Button/index";
import term from "../../../assets/Terms and Conditions.png";
import PrivacyPolicy from "../../../assets/Privacy Policy.png"



export default function FootUnderComponent() {
  return (
 
      <div className={style.mainDiv}>
        <div className={style.first}>
          <p>All rights reserved by Zwilt</p>
        </div>
        <div className={style.second}>
          <Button
          image={PrivacyPolicy}
          />
          <Button
          image={term}
          />
         
        </div>

    </div>
  );
}
