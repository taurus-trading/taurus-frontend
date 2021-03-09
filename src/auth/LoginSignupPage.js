import React, { Component } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignupForm';

export default class UserCredential extends Component {
    state = {
        user: '',
    }
    
    
    render() {
        return (
            <div>
                <LoginForm handleUserChange={this.props.handleUserChange} />
                <SignUpForm handleUserChange={this.props.handleUserChange} />
            </div>
        )
    }
}