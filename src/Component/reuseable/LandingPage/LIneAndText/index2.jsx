import React from 'react';
import style from "./index2.module.css"; 
import line from "../../../../assets/Vector 410.png"; 
import Button from "../Button/index";

export default function Line2({ text, bg, button, pd, pdRight }) {
  return (
    <div className={style.main} style={{ background: bg }}>
      <div className={style.secondDiv}>
        <p style={{ paddingLeft: pd, paddingRight: pdRight }}>{text}</p>
        {button && <Button image={button} />}
      </div>
      <img src={line} alt="line" className={style.lineV} />
    </div>
  );
}
