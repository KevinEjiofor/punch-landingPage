import React from 'react';
import style from './index.module.css';

export default function Button({ image, text , onClick }) {
    return (
        <div className={style.buttonDiv} onClick={onClick}>
            <button>
                <img src={image} alt="" />
            </button>
            <p>{text}</p>
        </div>
    );
}