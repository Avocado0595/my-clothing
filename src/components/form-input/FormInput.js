import { lab } from 'color';
import React from 'react';
import './form-input.scss';

function FormInput({handleOnChange, label, ...otherProps}){

    return(
        <div className="group">
            <input onChange={handleOnChange} {...otherProps} className="form-input"/>
            {
                label?
                <label className={`${otherProps.value?'shrink':''} form-input-label`}>{label}</label>
                : null
            }
        </div>
    )
}

export default FormInput;