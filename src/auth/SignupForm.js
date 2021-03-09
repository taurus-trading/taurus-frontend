import React, { Component } from 'react'
import { signUpUser } from '../utils/user-utils.js';
import {withRouter} from 'react-router-dom';


class Signup extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const token = await signUpUser(this.state.email, this.state.password);

        this.props.handleUserChange(token);
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input value={this.state.email} onChange={this.handleEmail}  />
                    </label>
                    <label>
                        Password: 
                        <input value={this.state.password} onChange={this.handlePassword} type="password" name="password" />
                    </label>
                    <label>
                        Username: 
                        <input value={this.state.username} onChange={this.handleUsername}  />
                    </label>

                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export const SignupWithRouter = withRouter(Signup);