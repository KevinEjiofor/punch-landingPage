import React, { useState } from 'react';
import style from "./index.module.css";
import closeButton from "../../../../assets/Frame 626623.png";
import openButton from "../../../../assets/Frame 626627.png";

export default function DropDown({ header, text }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={style.mainDiv}>
             <div className={style.dropDownContainer}>
            <div className={style.dropDownHeader} onClick={toggleDropDown}>
                <img
                    src={isOpen ? openButton : closeButton}
                    alt={isOpen ? "Close button" : "Open button"}
                    className={style.buttonIcon}
                />
                <h1>{header}</h1>
            </div>
           
                {isOpen && (
                    <div className={style.text}>
                        <p className={style.dropDownText}>{text}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
