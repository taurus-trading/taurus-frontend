import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import LoginSignupPage from './auth/LoginSignupPage.js';
import Dashboard from './search-page/Dashboard.js';
import AboutPage from './about/AboutPage.js'
import Header from './components/Header.js'
import NewUserPage from './new-user-page/NewUserPage.js'

import React, { Component } from 'react'
import { addUserToLocalStorage, getUserFromLocalStorage } from './utils/user-utils';

export default class App extends Component {
  state = {
    token: getUserFromLocalStorage(),
  }

    handleUserChange = (token) => {
      this.setState({token: token})
      addUserToLocalStorage(token)
    }

  render() {
    console.log(this.state.token)
    return (
      <div>
        <Router>
                  <Header
                    // user={this.state.user}
                    // handleLogout={this.handleLogout}
                    />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <LoginSignupPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} />} 
                        />
                        <Route 
                            path="/dashboard" 
                            exact
                            render={(routerProps) => <Dashboard 
                              {...routerProps} 
                              // user={this.state.user} 
                              />} 
                        />
                        <Route 
                            path="/about" 
                            exact
                            render={(routerProps) => <AboutPage 
                              {...routerProps} 
                              // user={this.state.user} 
                              />} 
                        />
                          <Route 
                            path="/newUser" 
                            exact
                            render={(routerProps) => <NewUserPage
                              token={this.state.token} 
                              {...routerProps} 
                              // user={this.state.user} 
                              />} 
                        />

                        {/* <PrivateRoute 
                            path="/dashboard" 
                            exact
                            token={user && user.token}
                            render={(routerProps) => 
                              <Dashboard 
                                user={this.state.user}
                                {...routerProps} 
                              />} 
                        /> */}
                        {/* <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => 
                            <LoginPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} 
                            />} 
                        />
                        <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) => 
                            <SignUpPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} 
                            />} 
                        /> */}
                    </Switch>
                </Router>
      </div>
    )
  }
}

