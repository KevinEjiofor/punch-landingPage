import React, { useState, useEffect } from 'react';
import style from './index.module.css';
import ShowRoom from '../../reuseable/LandingPage/slideFrame';
import dotImage from '../../../assets/Rectangle 3281.png';
import image from '../../../assets/Group 626340.png';
import imageDot from "../../../assets/RectangleyELLOW.png";
import slideImage from "../../../assets/SVGImage/slideImage.svg";
import slideImage2 from "../../../assets/SVGImage/slideImage2.svg";
import dotImage2 from "../../../assets/Rectangle3j.png";

const items = [
  { image: dotImage, text: 'We pick the best for you to select.' },
  { image: dotImage, text: 'Thousands of vetted candidates in dozens of categories.' },
  { image: dotImage, text: 'Review past ratings.' }
];

const items2 = [
  { image: imageDot, text: 'Easy and transparent one-to-one chat with candidates.' },
  { image: imageDot, text: 'Simple and convenient payment methods' },
  { image: imageDot, text: 'Risk-free resource swapping for the best fit.' }
];

const items3 = [
  { image: dotImage2, text: 'Easy and transparent one-to-one chat with candidates.' },
  { image: dotImage2, text: 'Simple and convenient payment methods' },
  { image: dotImage2, text: 'Risk-free resource swapping for the best fit.' }
];

export default function SlideComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { headerText: "Onboard without the risk.", items: items, image: image },
    { headerText: "An open book.", items: items2, image: slideImage },
    { headerText: "Stay in the loop.", items: items3, image: slideImage2 }
  ];

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={style.mainDiv}>
      <div className={style.text}>
        <h1>Why choose <br />Zwilt?</h1>
        <p>
          We take complex hiring <br/> processes - and simplify them. <br /> Connecting you to the world’s <br /> highly qualified talent pool.
        </p>
      </div>
      <div className={style.showRoom}>
        <ShowRoom
          headerText={slides[currentSlide].headerText}
          items={slides[currentSlide].items}
          image={slides[currentSlide].image}
          onNextSlide={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
        />
      </div>
    </div>
  );
}
