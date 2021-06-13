import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends Component {
  render() {
    const { authedUser, isAuthenticated } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Would You Rather</Typography>
          {isAuthenticated && (
            <>
              <Link to={'/'}>Home</Link>
              <Link to={'/add'}>Add Question</Link>
              <Link to={'/leaderboard'}>LeaderBoard</Link>
              <Box>
                <Typography>Hello, {authedUser.name}</Typography>
                <Avatar alt={authedUser.name} src={authedUser.avatarURL} />
              </Box>
              <Link to={'/login'}>Logout</Link>
            </>
          )}
        </Toolbar>
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

export default connect(mapStateToProps)(NavBar);
