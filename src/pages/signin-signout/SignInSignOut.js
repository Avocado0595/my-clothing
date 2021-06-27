import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up';
import './signin-signout.scss'
const SignInSignOut = function(){
    return(
        <div className="signin-signout">
            <SignIn/>
            <SignUp/>
        </div>
        
    )
}

export default SignInSignOut;