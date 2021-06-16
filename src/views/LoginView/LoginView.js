import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import {
  CardContent,
  Container,
  FormControl,
  MenuItem,
  Select,
  Button,
  Avatar,
  CardHeader,
  Divider,
} from '@material-ui/core';
import {
  StyledBox,
  StyledCardActions,
  StyledMainCard,
  StyledUserSpan,
  StyledTitle,
} from '../../styles/shared';

class LoginView extends Component {
  state = {
    selectedUser: '',
  };

  handleChange = (e) => {
    this.setState({
      selectedUser: e.target.value,
    });
  };

  // Set AuthedUser after login
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

    return (
      <Container maxWidth="sm">
        <StyledMainCard>
          <CardHeader
            title={<StyledTitle>Welcome to the WOULD YOU RATHER App!</StyledTitle>}
            subheader="Please sign in to continue."
          />

          <Divider />

          <CardContent>
            <FormControl variant="filled">
              <Select
                value={selectedUser}
                onChange={this.handleChange}
                displayEmpty
                className="select-box"
              >
                <MenuItem value="" disabled>
                  Select User
                </MenuItem>
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    <StyledBox>
                      <Avatar src={user.avatarURL} alt={user.name}></Avatar>
                      <StyledUserSpan>{user.name}</StyledUserSpan>
                    </StyledBox>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
          <StyledCardActions>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={this.handleClick}
              disabled={selectedUser === ''}
            >
              Sign in
            </Button>
          </StyledCardActions>
        </StyledMainCard>
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
