import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import getUsers from '../actions/users';
import HomeView from '../views/HomeView/HomeView';
import QuestionView from '../views/QuestionView/QuestionView';
import AddView from '../views/AddView/AddView';
import LeaderBoardView from '../views/LeaderBoardView/LeaderBoardView';
import LoginView from '../views/LoginView/LoginView';
import NotFoundView from '../views/NotFoundView/NotFoundView';

class App extends Component {
  // Get Users data
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getUsers());
  }

  render() {
    const { users, isAuthenticated } = this.props;

    return (
      <Router>
        <>
          <NavBar />
          <Switch>
            {users &&
              (isAuthenticated ? (
                <>
                  <Route path="/" exact component={HomeView} />
                  <Route path="/questions/:question_id" component={QuestionView} />
                  <Route path="/add" component={AddView} />
                  <Route path="/leaderboard" component={LeaderBoardView} />
                  <Route path="/not-found" component={NotFoundView} />
                </>
              ) : (
                <>
                  <Route path="/login" component={LoginView} />
                  <Route path="*" component={LoginView} />
                </>
              ))}
          </Switch>
        </>
      </Router>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    isAuthenticated: Boolean(authedUser),
  };
}

export default connect(mapStateToProps)(App);
