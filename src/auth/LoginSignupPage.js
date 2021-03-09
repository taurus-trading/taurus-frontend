import React, { Component } from 'react'
// import LoginForm from './LoginForm'
import {LoginWithRouter} from './LoginForm.js';
import { SignupWithRouter } from './SignupForm.js';
import './LoginSignup.css';
import BackgroundImage from './BackgroundImage.js';

export default class LoginSignupPage extends Component {
    state = {
        user: '',
    }
    
    
    render() {
        return (
            <div>
                <BackgroundImage />
                <div className="user-form">
                    <LoginWithRouter 
                    handleUserChange={this.props.handleUserChange} />
                    <SignupWithRouter handleUserChange={this.props.handleUserChange} />
                </div>
            </div>
        )
    }
}