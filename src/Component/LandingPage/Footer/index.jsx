import React from "react";
import style from "./index.module.css";
import Button from "../../reuseable/LandingPage/Button";
import buttonImage from "../../../assets/Frame4.png";
import companyLogo from "../../../assets/logo.png";
import ListDesign from "../../reuseable/LandingPage/ListDesign/index";
import line from "../../../assets/lineL.png";


export default function FooterComponent() {
  return (
    <div className={style.mainDiv}>
      <div className={style.header}>
        <div className={style.container}>
          <h1>Need a job done, and done </h1>
          <h1 className={style.text}>well? Get started</h1>
          <div className={style.buttonDiv}>
            <Button image={buttonImage} />
          </div>
        </div>
      </div>

      <div className={style.mainFoot}>
        <div className={style.companyLogoDiv}>
          <img src={companyLogo} alt="" className={style.logoC} />
          <div className={style.ptagDiv}>
            <p>
              We take complex hiring processes - and <br />
              simplify them. Connecting you to the <br />
              world’s highly qualified talent pool.
            </p>
          </div>

          <div className={style.buttonDiv}>
            <p>LINKS AND REDIRECTS</p>
            <div className={style.button}>
              <button>
                <p>Hire now</p>
              </button>
              <button>
                <p>Apply now</p>
              </button>
            </div>
          </div>
        </div>

        <div className={style.leftContainer}>
          <div className={style.h1TagDiv}>  
            <h1>Connecting the right people to the right businesses.</h1>
          </div>
          <div className={style.listDesign}>
            <ListDesign
              text="PLATFORM"
              text1={
                <span style={{ color: "rgb(255, 255, 255)" }}>Find Work</span>
              }
              image={line}
              text2={
                <span style={{ color: "rgb(255, 255, 255)" }}>Find Talent</span>
              }
              text3={
                <span style={{ color: "rgb(255, 255, 255)" }}>Categories</span>
              }
              text4={
                <span style={{ color: "rgb(255, 255, 255)" }}>About Us</span>
              }

            />

            <ListDesign
              text="CATEGORIES"
              text1={
                <span style={{ color: "rgb(255, 255, 255)" }}>
                  Data Science
                </span>
              }
              text2={
                <span style={{ color: "rgb(255, 255, 255)" }}>
                  IT & Networking
                </span>
              }
              text3={
                <span style={{ color: "rgb(255, 255, 255)" }}>
                  Web & Mobile
                </span>
              }
              text4={ " "}
              

            
            />

            <ListDesign
              text="HELP"
              text1={<span style={{ color: "rgb(255, 255, 255)" }}>FAQ’s</span>}
              text2={
                <span style={{ color: "rgb(255, 255, 255)" }}>Contact Us</span>

              }
              text3={ " "}
              text4={ " "}
              
            />

            <ListDesign
              text="GET IN TOUCH @"
              text1={
                <span style={{ color: "rgb(255, 255, 255)" }}>
                  Data Science
                </span>
              }
              text2={
                <span style={{ color: "rgb(255, 255, 255)" }}>Instagram</span>
              }
              text3={
                <span style={{ color: "rgb(255, 255, 255)" }}>LinkedIn</span>
              }
              text4={
                <span style={{ color: "rgb(255, 255, 255)" }}>Twitter</span>
              }
            />
          </div>
        </div>
      </div>
     
     
    </div>
  );
}
