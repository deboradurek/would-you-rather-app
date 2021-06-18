import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { AppBar, Avatar, Button, Typography } from '@material-ui/core';
import { GroupedLinks, LogoName, NavAuthedUser, StyledToolbar } from './styles';

class NavBar extends Component {
  // Set AuthedUser to null after logout
  handleLogout = (e) => {
    const { dispatch } = this.props;

    e.preventDefault();

    dispatch(setAuthedUser(null));
  };

  render() {
    const { authedUser, isAuthenticated } = this.props;

    return (
      <AppBar position="sticky">
        <StyledToolbar>
          <LogoName>WOULD YOU RATHER...</LogoName>
          {isAuthenticated && (
            <>
              <GroupedLinks>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
                <NavLink to="/add" activeClassName="active">
                  Add Question
                </NavLink>
                <NavLink to="/leaderboard" activeClassName="active">
                  LeaderBoard
                </NavLink>
              </GroupedLinks>
              <NavAuthedUser>
                <Typography>Hello, {authedUser.name}</Typography>
                <Avatar alt={authedUser.name} src={authedUser.avatarURL} />
                <Button onClick={this.handleLogout}>Logout</Button>
              </NavAuthedUser>
            </>
          )}
        </StyledToolbar>
      </AppBar>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    isAuthenticated: Boolean(authedUser),
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
