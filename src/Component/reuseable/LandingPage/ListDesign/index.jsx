import React from 'react'
import style from './index.module.css'

export default function ListDesign({text, text1, text2, text3, text4, image, ...props}) {
  return (
    <div className={style.mainDiv}>
      {text && <p>{text}</p>}
      {text1 && <p>{text1}</p>}
      {image && <img src={image} alt="line" />}
      {text2 && <p>{text2}</p>}
      {text3 && <p>{text3}</p>}
      {text4 && <p>{text4}</p>}
      {Object.keys(props).map((key) => (
        props[key] && <p key={key}>{props[key]}</p>
      ))}
    </div>
  )
}
