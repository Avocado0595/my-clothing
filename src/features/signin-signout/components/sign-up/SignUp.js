import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../../../components/form-input/FormInput';
import CustomButton from '../../../../components/custombutton/CustomButton';
import {auth, createUserProfile} from '../../../../firebase/Firebase';
import '../../Login.scss';
function SignUp(){
    const [formValue, setFormValue] = useState({displayName:'',email:'', password:'',confirmPassword:''})
    const handleSubmit = async function handleSubmit(e){
        e.preventDefault();
        const {displayName,email, password,confirmPassword} = formValue;
        if (password !== confirmPassword){
            alert("password don't match");
            return;
        }
        
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfile(user,{displayName})
            setFormValue({displayName:'',email:'', password:'',confirmPassword:''});
        }
        catch(err){
            console.log('Sign up fail: ', err.message);
        }
        
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormValue({...formValue,[name]:value});
    }
    return(
    <div className="login-layout">
        <h4>Sign up with your email and password</h4>
        <form onSubmit={e=>handleSubmit(e)} className="form-input">
            <FormInput label="Display Name" handleOnChange={handleChange} value={formValue.displayName}  type="text" name="displayName" required/>
            <FormInput label="Email" handleOnChange={handleChange} value={formValue.email}  type="email" name="email" required/>
            <FormInput label="Password" handleOnChange={handleChange} value={formValue.password}  type="password" name="password" required/>
            <FormInput label="Confirm Password" handleOnChange={handleChange} value={formValue.confirmPassword}  type="password" name="confirmPassword" required/>
            <div className="btn-group">
                <CustomButton type="submit">Sign Up</CustomButton>
            </div>
        </form>
        <br/>
        <h5>You already have an account? <Link className="default-link" to="/sign-in">Click here</Link> to sign in!</h5>
    </div>
    )
}

export default SignUp;