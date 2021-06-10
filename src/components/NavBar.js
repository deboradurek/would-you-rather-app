import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Would You Rather</Typography>
          <Link to={'/'}>Home</Link>
          <Link to={'/add'}>Add Question</Link>
          <Link to={'/leaderboard'}>LeaderBoard</Link>
          <Link to={'/login'}>Logout</Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
