import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, FormControl, MenuItem, Select } from '@material-ui/core';

class LoginView extends Component {
  render() {
    const { users } = this.props;

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
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
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

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(LoginView);
