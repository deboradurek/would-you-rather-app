import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import getUsers from '../actions/users';
import HomeView from '../views/HomeView/HomeView';
import QuestionView from '../views/QuestionView/QuestionView';
import AddView from '../views/AddView/AddView';
import LeaderBoardView from '../views/LeaderBoardView/LeaderBoardView';
import LoginView from '../views/LoginView/LoginView';

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
            <>
              <Route path="/" exact component={HomeView} />
              <Route path="/questions/:question_id" component={QuestionView} />
              <Route path="/add" component={AddView} />
              <Route path="/leaderboard" component={LeaderBoardView} />
              <Route path="/login" component={LoginView} />
            </>
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
