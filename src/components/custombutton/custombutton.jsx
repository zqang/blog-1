import React from 'react';

import './custombutton.style.scss';


const CustomButton = ({name, ...props}) => {
    return (
        <div>
            <button className="custom-button" {...props}>{name}</button>
        </div>
    )
};

export default CustomButton;