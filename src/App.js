import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LoginSignupPage from './auth/LoginSignupPage.js';
import Dashboard from './search-page/Dashboard.js';
import AboutPage from './about/AboutPage.js';
import Header from './components/Header.js';
import NewUserPage from './new-user-page/NewUserPage.js';
import PortfolioPage from './portfolio/PortfolioPage.js';
import SignupPage from './auth/SignupPage.js';
import PrivateRoute from './components/PrivateRoute.js'
import React, { Component } from 'react'
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from './utils/user-utils';

// The functionality and UI of your app is so thorughly compartmentalized into components that it's easy to imagine inheriting this project and diving right in. Incredible work creating a maintainable react project (to say nothing of the complexity you tamed in getting this to work)!
export default class App extends Component {
  state = {
    token: getUserFromLocalStorage(),
  }

  handleUserChange = (token) => {
    this.setState({ token: token })
    addUserToLocalStorage(token)
  }
  handleLogout = () => {
    this.setState({
      token: ''
    })
    removeUserFromLocalStorage();
  }
  render() {
    return (
      <div>
        <Router>
          <Header
            token={this.state.token}
            handleLogout={this.handleLogout}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <LoginSignupPage
                handleUserChange={this.handleUserChange}
                {...routerProps} />}
            />
            <PrivateRoute
              path="/dashboard"
              exact
              token={this.state.token}
              render={(routerProps) => <Dashboard
                {...routerProps}
                token={this.state.token}
              />}
            />
            <Route
              path="/about"
              exact
              render={(routerProps) => <AboutPage
                {...routerProps}
              />}
            />
            <PrivateRoute
              path="/newuser"
              exact
              token={this.state.token}
              render={(routerProps) => <NewUserPage
                token={this.state.token}
                {...routerProps}
              />}
            />
            <PrivateRoute
              path="/portfolio"
              exact
              token={this.state.token}
              render={(routerProps) => <PortfolioPage
                token={this.state.token}
                storeSelectedRows={this.storeSelectedRows}
                {...routerProps}
              />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignupPage
                handleUserChange={this.handleUserChange}
                token={this.state.token}
                {...routerProps}
              />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

