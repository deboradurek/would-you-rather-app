import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getQuestions from '../../../actions/questions';

class LeaderCard extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  render() {
    const { usersId, users } = this.props;

    console.log(this.props);

    return (
      <>
        {usersId.map((userId) => (
          <Card key={userId} variant="outlined">
            <CardContent>
              <div>
                <img
                  src={users[userId].avatarURL}
                  alt={users[userId].name}
                  style={{ height: 100, width: 100, marginRight: 12 }}
                ></img>
              </div>
              <Typography variant="h5" component="h2">
                {users[userId].name}
              </Typography>
              <Box>
                <Typography color="textSecondary" variant="body2" component="p">
                  Answered questions: {Object.keys(users[userId].answers).length}
                </Typography>
                <Typography color="textSecondary" variant="body2" component="p">
                  Created questions: {users[userId].questions.length}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" component="h2">
                  Score {Object.keys(users[userId].answers).length + users[userId].questions.length}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    usersId: Object.keys(users),
  };
}

export default connect(mapStateToProps)(LeaderCard);
