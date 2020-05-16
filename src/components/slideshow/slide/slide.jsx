import React from 'react';

import './slide.style.scss';


const Slide = ({imgSrc, imgText, tag, className}) => {

    return(
        <div className={`slide ${className}`}>
            <div className="slide-img-cap">
                <img src={imgSrc} alt={imgText}/>
                <div className="img-cap">{tag}</div>
            </div>
            <div className="text">{imgText}</div>
        </div>
    )
};

export default Slide;