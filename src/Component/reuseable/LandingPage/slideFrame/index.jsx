import React from 'react';
import style from './index.module.css';
import Button from "../Button";
import imageButton from "../../../../assets/buttonSlide.png";

export default function ShowRoom({ headerText, items, image, onNextSlide }) {
  return (
    <div className={style.mainDiv}>
      <div className={style.listDiv}>
        <div className={style.h1Div}>
          <h1>{headerText}</h1>
        </div>
        {items.map((item, index) => (
          <div className={style.list} key={index}>
            <img src={item.image} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
        <Button
          image={imageButton}
          text={"Learn More"}
          onClick={onNextSlide}
        />
      </div>
      <img src={image} alt="" className={style.footerImage} />
    </div>
  );
}
