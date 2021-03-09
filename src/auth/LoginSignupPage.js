import React, { Component } from 'react'
// import LoginForm from './LoginForm'
import {LoginWithRouter} from './LoginForm.js';
import { SignupWithRouter } from './SignupForm.js';

export default class LoginSignupPage extends Component {
    state = {
        user: '',
    }
    
    
    render() {
        return (
            <div>
                
                <LoginWithRouter 
                handleUserChange={this.props.handleUserChange} />
                <SignupWithRouter handleUserChange={this.props.handleUserChange} />
            </div>
        )
    }
}