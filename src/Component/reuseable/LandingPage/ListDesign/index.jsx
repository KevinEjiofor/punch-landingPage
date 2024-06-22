import React from 'react'
import style from './index.module.css'

export default function listDesign({text, text1, text2,text3, customClass}) {
  return (
    <div className={style.mainDiv}>
      <p>
        {text}
      </p>
      <p>
        {text1}
      </p>
      <p>
        {text2}
      </p>
      <p className={customClass}>
     {text3}
      </p>
     
    </div>
  )
}
