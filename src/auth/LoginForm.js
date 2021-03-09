import React, { Component } from 'react'
import { loginUser } from '../utils/user-utils.js';
// import request from 'superagent';
import {withRouter} from 'react-router-dom';


class LoginForm extends Component {
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

        const token = await loginUser(this.state.email, this.state.password);

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
                        <input value={this.state.password} onChange={this.handlePassword}  />
                    </label>

                    <button>Login</button>
                </form>
            </div>
        )
    }
}
export const LoginWithRouter = withRouter(LoginForm);