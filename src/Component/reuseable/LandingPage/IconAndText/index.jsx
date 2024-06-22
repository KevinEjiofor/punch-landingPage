import React from 'react'
import style from './index.module.css'

export default function textAndImage({ textHeader, image1,text1, image2, text2, image3,text3}) {
  return (
    <div className={style.mainDiv}>
        <div className={style.h1Div}>
            <h1>
                {textHeader}
            </h1>
        </div>
       
        <div className={style.secondDiv}>
            <img src={image1} alt="" />
            <p>{text1}</p>

            <img src={image2} alt="" />
            <p>{text2}</p>
        </div>
        <div className={style.lastIcon}>
            <img src={image3} alt="" />
            <p>{text3}</p>
        </div>
        
    </div>
  )
}
