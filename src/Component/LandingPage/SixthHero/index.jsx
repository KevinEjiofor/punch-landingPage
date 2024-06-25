import React from "react";
import style from "./index.module.css";
import Line from "../../reuseable/LandingPage/LIneAndText";
import line from "../../../assets/Vector 415.png";
import Line2 from "../../reuseable/LandingPage/LIneAndText/index2";
import buttonImage from "../../../assets/Vecto3r.png";

export default function SixthComponent() {
  return (
    <div className={style.mainDiv}>
      <div className={style.htag}>
        <h1>Frequently asked</h1>
        <h1 className={style.question}>questions</h1>
      </div>

      <div className={style.secondDiv}>
        <Line
          text={"General"}
          img={line}
          text2="I want to work part-time, is that possible"
          pd={"565px"}
          pdR={"0px"}
        />
        <Line2 text={"How long are the average projects?"} pd={"80px"} pdRight={"158px"} />
        <Line2 text={"How does the payment work?"} bg={"rgb(232, 232, 232)"} button={buttonImage} pd={"530px"} />
        <Line2 text={"How much can I earn?"} pdRight={"170px"} />
        <Line
          text={"General"}
          bg={"rgb(232, 232, 232)"}
          img={line}
          text2={"I want to work part-time, is that possible"}
          img1={line}
          pd={"365px"}
          text1={"Joining Process"}
        />
        <Line2 text={"How long are the average projects?"} pdRight={"50px"} />
        <Line2 text={"How long are the average projects?"} pdRight={"50px"} />
        <Line2 text={"How much can I earn?"} pdRight={"150px"} />
      </div>
    </div>
  );
}
