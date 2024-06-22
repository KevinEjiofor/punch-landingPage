import React from 'react';
import style from "./index.module.css";
import imageComponent from "../../../assets/component.png";
import imageLine2 from "../../../assets/Vector 342.png";

export default function ThirdHeroComponent() {
  return (
    <div className={style.mainDiv}>
      <img src={imageComponent} alt="" className={style.line} />
      <img src={imageLine2} alt="" className={style.line} />
    </div>
  );
}
