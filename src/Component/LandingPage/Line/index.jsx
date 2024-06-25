import React from 'react';
import line from "../../../assets/SVGImage/line.svg";
import style from "./index.module.css";

export default function LineComponent() {
  return (
    <div className={style.topLine}>
      <img src={line} alt="line" />
    </div>
  );
}
