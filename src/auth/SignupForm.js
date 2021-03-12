import React, { Component } from 'react'
import { signUpUser, fillUserNameAndDate } from '../utils/user-utils.js';
import {withRouter} from 'react-router-dom';


class Signup extends Component {
    state = {
        email: '',
        password: '',
        username: '',
        error: '',
        validEmail: true,
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

            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!regex.test(this.state.email)){
                this.setState({validEmail: false})
            }else {
                const token = await signUpUser(this.state.email, this.state.password);
                await fillUserNameAndDate(this.state.username, token);
                this.props.handleUserChange(token);
                this.props.history.push('/newuser');
            }

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
                {
                !this.state.validEmail && <h3 style={{ color: 'red'}}>{'enter valid email'}</h3>
                }
                <form onSubmit={this.handleSubmit}>
                <h2 className='welcome'>Welcome to BigInt Trading</h2>
                    <label>
                        <input 
                            value={this.state.email} 
                            onChange={this.handleEmail}
                            name='email'  
                            placeholder='email'
                        />
                    </label>
                    <label>
                        <input 
                            value={this.state.password} 
                            onChange={this.handlePassword}
                            placeholder='password' 
                            type="password" 
                            name="password" 
                        />
                    </label>
                    <button className='login-signup-button'>Sign Up</button>
                </form>
            </div>
        )
    }
}

export const SignupWithRouter = withRouter(Signup);