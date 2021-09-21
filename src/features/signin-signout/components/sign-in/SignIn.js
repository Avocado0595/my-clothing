import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import '../../Login.scss';
import FormInput from '../../../../components/form-input/FormInput';
import CustomButton from '../../../../components/custombutton/CustomButton';
import {auth, singInWithGoogle} from '../../../../firebase/Firebase';
import Image from '../../../../assets/image';
function SignIn(){
    const [account, setAccount] = useState({email:'', password:''});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = account;
        try{
            await auth.signInWithEmailAndPassword(email, password);
        }
        catch(err){
            console.log('login fail: ', err.message);
            setAccount({...account, errMessage: err.message});
        }
    }
    const handleChange = (e)=>{
        const {value, name} = e.target;
        setAccount({...account, [name]:value, errMessage:undefined });
    }
        return(
            <div className="login-layout">
                <h4>Sign in with your email and password</h4>
                {account.errMessage!==undefined?(<div className="alert alert-danger">{account.errMessage}</div>):null}
                <form onSubmit={handleSubmit} className="form-input">
                    <FormInput label="Email" handleOnChange={handleChange} value={account.email} id="email" type="email" name="email" required/>
                    <FormInput label="Password" handleOnChange={handleChange} value={account.password} id="password" type="password" name="password" required/>
                    <div className="btn-group">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" isGoogleSignIn={true} onClick = {singInWithGoogle}><img alt="google" className="small-icon" src={Image.googleIcon}/>  <span className="google-small-device">Sign in with Google</span></CustomButton>
                    </div>
                </form>
                <br/>
                <h5>You don't have any account? <Link className="default-link" to="/sign-up">Click here</Link> to sign up!</h5>
            </div>
        )
}

export default SignIn;