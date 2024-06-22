import React from 'react';
import style from './index.module.css';
import logoDesign from '../../../assets/SVGImage/logDesign.svg';
import logoDesign1 from '../../../assets/SVGImage/logo2.svg';

export default function SecondHero() {
  return (
    <div className={style.mainDiv}>
      <div className={style.headerText}>
      
          <h1>Your one-stop marketplace for<br />finding the talent your business</h1>
          <h1 className={style.need}> needs.</h1>
       
      </div>
      <div>

      </div>
      <div>
        <img src={logoDesign} alt="" />
        <img src={logoDesign1} alt="" />
      </div>


    </div>
  );
}
