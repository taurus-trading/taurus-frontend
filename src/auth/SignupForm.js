import React, { Component } from 'react'
import { signUpUser, fillUserNameAndDate } from '../utils/user-utils.js';
import {withRouter} from 'react-router-dom';


class Signup extends Component {
    state = {
        email: '',
        password: '',
        username: '',
        error: '',
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

        try {
            const token = await signUpUser(this.state.email, this.state.password);
            await fillUserNameAndDate(this.state.username, token);
            this.props.handleUserChange(token);
            this.props.history.push('/newuser');

        }
        catch(e){
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