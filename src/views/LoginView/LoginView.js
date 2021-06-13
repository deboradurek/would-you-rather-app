import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  CardContent,
  CardActions,
  Card,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Button,
} from '@material-ui/core';
import { setAuthedUser } from '../../actions/authedUser';

class LoginView extends Component {
  state = {
    selectedUser: '',
  };

  handleChange = (e) => {
    this.setState({
      selectedUser: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    const { dispatch, users } = this.props;
    const { selectedUser } = this.state;

    const { id, name, avatarURL } = users.find((u) => u.id === selectedUser);

    dispatch(setAuthedUser({ id, name, avatarURL }));
  };

  render() {
    const { users } = this.props;
    const { selectedUser } = this.state;

    console.log(this.state.selectedUser);

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
                value={selectedUser}
                onChange={this.handleChange}
                style={{ minWidth: 300 }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select User
                </MenuItem>
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    <Box display="flex" alignItems="center">
                      <img
                        src={user.avatarURL}
                        alt={user.name}
                        style={{ height: 36, width: 36, marginRight: 12 }}
                      ></img>
                      <Typography component="span">{user.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={this.handleClick}>
              Sign in
            </Button>
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
