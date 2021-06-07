import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
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
          <Button color="inherit">Home</Button>
          <Button color="inherit">Add Question</Button>
          <Button color="inherit">LeaderBoard</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
