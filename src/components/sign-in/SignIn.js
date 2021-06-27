import React, {Component} from 'react';
import './sign-in.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custombutton/CustomButton';
import {singInWithGoogle} from '../../firebase/Firebase';
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state ={email:'', password:''};
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e)=>{
        const {value, name} = e.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} className="form-input">
                    <FormInput label="Email" handleOnChange={this.handleChange} value={this.state.email} id="email" type="email" name="email" required/>
                    <FormInput label="Password" handleOnChange={this.handleChange} value={this.state.password} id="password" type="password" name="password" required/>
                    <div className="btn-group">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton isGoogleSignIn={true} onClick = {singInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;