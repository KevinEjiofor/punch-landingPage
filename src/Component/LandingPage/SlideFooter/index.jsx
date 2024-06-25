import React from 'react';
import style from './index.module.css';
import ShowRoom from "../../reuseable/LandingPage/slideFrame";
import dotImage from "../../../assets/Rectangle 3281.png";
// import image from "../../../assets/Group 626340.png"

const items = [
    { image: dotImage, text: 'We pick the best for you to select.' },
    // { image: dotImage, text: 'Thousands of vetted candidates in dozens of categories.' },
    // { image: dotImage, text: 'Risk-free resource swapping for the best fit.' }
];

export default function SlideComponent() {
    return (
        <div className={style.mainDiv}>
            {/* <div className={style.text}>
                <h1>Why choose Zwilt?</h1>
                <p>
                    We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
                </p>
            </div> */}
            <div className={style.showRoom}>
                <ShowRoom
                    headerText={"Onboard without the risk."}
                    items={items}
                    // image={image}
                />
            </div>
        </div>
    );
}
