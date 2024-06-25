import React from "react";
import style from "./index.module.css";
import line from "../../../../assets/Vector 410.png";

export default function Line({ text, text1, text2, img, img1, bg, pd, pdR  }) {
  return (
    <div className={style.mainDiv}>
      <img src={line} alt="line" className={style.lineV} />
      <div className={style.textU}>
        <div className={style.textU} style={{ background: bg }}>
          {text && <p>{text}</p>}
          {img && <img src={img} alt="custom" />}
        </div>
        {text1 && <p>{text1}</p>}
        {img1 && <img src={img1} alt="custom1" />}
        {text2 && (
          <div style={{ paddingLeft:  pd, paddingRight: pdR }} className={style.ptag}>
            <p>{text2}</p>
          </div>
        )}
      </div>
      <img src={line} alt="line" className={style.lineV} />
    </div>
  );
}
