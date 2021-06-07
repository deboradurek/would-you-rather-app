import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, FormControl, MenuItem, Select } from '@material-ui/core';

export default class LoginView extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Welcome to the Would You Rather App!
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Please sign in to continue{' '}
            </Typography>
            <Typography variant="h5" component="h2">
              Sign in
            </Typography>
            <FormControl variant="filled">
              <Select
                value=""
                //   onChange={handleChange}
                style={{ minWidth: 200 }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select User
                </MenuItem>
                <MenuItem value={10}>User1</MenuItem>
                <MenuItem value={20}>User2</MenuItem>
                <MenuItem value={30}>User3</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button size="small">Sign in</Button>
          </CardActions>
        </Card>
      </Container>
    );
  }
}
