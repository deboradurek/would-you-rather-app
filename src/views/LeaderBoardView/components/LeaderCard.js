import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getQuestions from '../../../actions/questions';

class LeaderCard extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  render() {
    const { users } = this.props;

    return (
      <>
        {users.map((user) => (
          <Card key={user.id} variant="outlined">
            <CardContent>
              <div>
                <img
                  src={user.avatarURL}
                  alt={user.name}
                  style={{ height: 100, width: 100, marginRight: 12 }}
                ></img>
              </div>
              <Typography variant="h5" component="h2">
                {user.name}
              </Typography>
              <Box>
                <Typography color="textSecondary" variant="body2" component="p">
                  Created questions: {user.questions.length}
                </Typography>
                <Typography color="textSecondary" variant="body2" component="p">
                  Answered questions: {user.answers.length}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" component="h2">
                  Score {user.score}
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
    users: Object.values(users)
      .map((user) => {
        const answers = Object.values(user.answers);

        return {
          ...user,
          answers,
          score: answers.length + user.questions.length,
        };
      })
      .sort((a, b) => b.score - a.score),
  };
}

export default connect(mapStateToProps)(LeaderCard);
