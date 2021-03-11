import React, { Component } from 'react'
import { loginUser } from '../utils/user-utils.js';
// import request from 'superagent';
import {withRouter} from 'react-router-dom';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        validation: {},
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    formValidation = () => {
        const {email, password} = this.state;
        let isValid = true;
        const validation = {};
        const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.match(emailFormat)){
            validation.email = 'Invalid Email';
            isValid = false;

        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        try {
            const token = await loginUser(this.state.email, this.state.password);
            this.props.handleUserChange(token);
            this.props.history.push('/dashboard');

        }
        catch(e) {
            this.setState({error: e.response.body.error})
        }


    }
    render() {
        return (
            <div>
                {
                this.state.error && <h3 style={{ color: 'red'}}>{this.state.error}</h3>
                }
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input 
                        value={this.state.email} 
                        onChange={this.handleEmail} 
                        name='email'  />
                    </label>
                    <label>
                        Password: 
                        <input 
                        value={this.state.password} 
                        onChange={this.handlePassword} 
                        name='password' 
                        type='password' />
                    </label>

                    <button>Login</button>
                </form>
            </div>
        )
    }
}
export const LoginWithRouter = withRouter(LoginForm);