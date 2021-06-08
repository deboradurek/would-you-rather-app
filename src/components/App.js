import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import HomeView from '../views/HomeView/HomeView';
import LoginView from '../views/LoginView/LoginView';
import getUsers from '../actions/users';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Box m={8}>
            <LoginView />
          </Box>
          {/* <Route path="/" exact component={HomeView} /> */}
        </>
      </Router>
    );
  }
}

export default connect()(App);
