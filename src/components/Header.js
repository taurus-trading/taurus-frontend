import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import TickerMarquee from './TickerMarquee.js'

export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>
            <div >
                <NavLink  activeClassName="active" className='links' exact to="/">Home</NavLink>
                <NavLink activeClassName="active" className='links' exact to="/dashboard">User Dashboard</NavLink>
                <NavLink activeClassName="active" className='links' exact to="/newUser">New User</NavLink>
                {
                this.props.user && this.props.user.token && <>
                {/* once we have a user signed in this should work to display the portfolio page */}
                {/* <NavLink activeClassName="active" className='links' to="/dashboard">Dashboard</NavLink> */}
                <button onClick={this.props.handleLogout}>Sign out</button>
                </>
                }
                <br/>
                <br/>
            </div>
            <div>   
                <TickerMarquee />
            </div>
            </div>
        )
    }
}
