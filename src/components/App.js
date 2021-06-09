import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import HomeView from '../views/HomeView/HomeView';
import LoginView from '../views/LoginView/LoginView';
import getUsers from '../actions/users';
import QuestionView from '../views/QuestionView/QuestionView';
import AddView from '../views/AddView/AddView';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    const { users } = this.props;

    return (
      <Router>
        <>
          <NavBar />
          {users && (
            // {/* <Box m={8}>
            //   <LoginView />
            // </Box> */}
            <>
              <Route path="/" exact component={HomeView} />
              <Route path="/questions/:question_id" component={QuestionView} />
              <Route path="/add" component={AddView} />
            </>
            // <QuestionView />
          )}
        </>
      </Router>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(App);
