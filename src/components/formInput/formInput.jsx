import React from 'react';

import './formInput.style.scss';

const FormInput = ({handleChange, label, ...props}) => {
    return(
        <div>
            <input onChange={handleChange} {...props}/>
            {label ? (
                <label className={props.value ? 'shrink' : ''}>{label}</label>
            ) : null}
        </div>
    )
};

export default FormInput;