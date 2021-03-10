import React, { Component } from 'react'
// import LoginForm from './LoginForm'

import { SignupWithRouter } from './SignupForm.js';
import './LoginSignup.css';
import BackgroundImage from './BackgroundImage.js';

export default class SignupPage extends Component {
    state = {
        user: '',
    }
    
    
    render() {
        return (
            
            <div className='page-wrapper'>
                <div className="user-form">
                    <SignupWithRouter handleUserChange={this.props.handleUserChange} />
                </div>
                <div className='video-div'>
                <BackgroundImage />
                </div>
            </div>
             
        )
    }
}