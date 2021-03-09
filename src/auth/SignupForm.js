import React, { Component } from 'react'
import signUpUser from '../utils/user-utils.js';

export default class Login extends Component {
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

        const user = await signUpUser();

        this.props.handleUserChange(user);
        this.props.history.push('/newUserPage');
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