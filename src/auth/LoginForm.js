import React, { Component } from 'react'
import loginUser from '../utils/user-utils.js';


export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const user = await loginUser();

        this.props.handleUserChange(user);
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
                        <input value={this.state.password} onChange={this.handlePassword}  />
                    </label>

                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}