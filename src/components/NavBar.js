import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

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
          <Button color="inherit">LeaderBoard</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
