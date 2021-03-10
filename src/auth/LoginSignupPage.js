import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

// import LoginForm from './LoginForm'
import {LoginWithRouter} from './LoginForm.js';
// import { SignupWithRouter } from './SignupForm.js';
import './LoginSignup.css';
import BackgroundImage from './BackgroundImage.js';

export default class LoginSignupPage extends Component {
    state = {
        user: '',
    }
    
    
    render() {
        return (
            
            <div className='page-wrapper'>
                <div className="user-form">
                    <LoginWithRouter 
                    handleUserChange={this.props.handleUserChange} />
                    <NavLink activeClassName="active" className='links signup-link' exact to="/signup">New User? Click Here to Create Account!</NavLink>
                </div>
                <div className='video-div'>
                <BackgroundImage />
                </div>
            </div>
             
        )
    }
}