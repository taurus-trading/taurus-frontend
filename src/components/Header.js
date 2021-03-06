import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import TickerMarquee from './TickerMarquee.js'

export default class Header extends Component {
    render() {
        return (
            <header className='header-div'>
                <div className='marquee-div'>
                    <TickerMarquee />
                </div>
                    <div className='nav'>
                    {/* links if you do have a token */}
                    {
                        this.props.token &&
                        <>
                            <NavLink activeClassName="active" className='links' exact to="/dashboard">User Dashboard</NavLink>
                            <NavLink activeClassName="active" className='links' exact to="/portfolio">Portfolio</NavLink>
                           
                            {/* take out new user page for production */}
                            <NavLink activeClassName="active" className='links trending' exact to="/newuser">Trending Stocks</NavLink>
                            <NavLink onClick={this.props.handleLogout} activeClassName="active" className=' logout' exact to="/">Logout</NavLink>
                            <NavLink activeClassName="active" className='about' exact to="/about">About Us</NavLink>

                        </>
                    }
                    {/* links if you don't have a token */}
                    {
                        !this.props.token &&
                        <>
                            <NavLink activeClassName="active" className='links' exact to="/">Login</NavLink>
                            <NavLink activeClassName="active" className='links' exact to="/signup">Signup</NavLink>
                            <NavLink activeClassName="active" className='about' exact to="/about">About Us</NavLink>
                        </>
                    }

                </div>
               

            </header>
        )
    }
}
