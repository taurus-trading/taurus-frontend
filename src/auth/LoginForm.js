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

    handleSubmit = async (e) => {
        e.preventDefault();
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
                    // probably worth getting this styling in your css instead of doing it inline here
                this.state.error && <h3 style={{ color: 'red'}}>{this.state.error}</h3>
                }
                <h2 className='welcome'>Welcome to Taurus Trading</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className='email'>
                        <input 
                        value={this.state.email} 
                        onChange={this.handleEmail}
                        placeholder='Email' 
                        name='email'  />
                    </label>
                    <label className='password'>
                        <input 
                        value={this.state.password} 
                        onChange={this.handlePassword} 
                        placeholder='password'
                        name='password' 
                        type='password' />
                    </label>

                    <button className='login-signup-button'>Login</button>
                </form>
            </div>
        )
    }
}
export const LoginWithRouter = withRouter(LoginForm);