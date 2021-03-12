import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import TickerMarquee from './TickerMarquee.js'

export default class Header extends Component {
    render() {
        return (
            <header className='header-div'>
                <div className='marquee-div'>
                    <TickerMarquee />
                    <div className='nav'>
                    {/* links if you do have a token */}
                    {
                        this.props.token &&
                        <>
                            <NavLink activeClassName="active" className='links' exact to="/dashboard">User Dashboard</NavLink>
                            <NavLink activeClassName="active" className='links' exact to="/about">About</NavLink>
                            <NavLink activeClassName="active" className='links' exact to="/portfolio">Portfolio</NavLink>
                            <NavLink onClick={this.props.handleLogout} activeClassName="active" className='links' exact to="/">Logout</NavLink>
                            {/* take out new user page for production */}
                            <NavLink activeClassName="active" className='links' exact to="/newuser">New User(remove for production build)</NavLink>

                        </>
                    }
                    {/* links if you don't have a token */}
                    {
                        !this.props.token &&
                        <>
                            <NavLink activeClassName="active" className='links' exact to="/about">About</NavLink>
                            <NavLink activeClassName="active" className='links' exact to="/">Login</NavLink>
                            <NavLink activeClassName="active" className='links' exact to="/signup">Signup</NavLink>
                        </>
                    }
                </div>

                </div>
               

            </header>
        )
    }
}
