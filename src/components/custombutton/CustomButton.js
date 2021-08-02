import React from 'react';
import './custom-button.scss';
function CustomButton({children, isGoogleSignIn, color, ...otherProps}){
    return(
        <button className={`${isGoogleSignIn?"google-theme":''} ${color?color:''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;