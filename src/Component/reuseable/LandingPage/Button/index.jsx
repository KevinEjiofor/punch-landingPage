import React from 'react';
import style from './index.module.css';

export default function Button({ image, text }) {
    return (
        <div className={style.buttonDiv}>
            <button>
                <img src={image} alt="" />
            </button>
            <p>{text}</p>
        </div>
    );
}
