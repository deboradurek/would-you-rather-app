import React, { Component } from 'react';
import { connect } from 'react-redux';
import getQuestions from '../../../actions/questions';
import Score from '../../../images/score.png';
import { Box, Container, Divider, Typography } from '@material-ui/core';
import {
  StyledBoxQuestion,
  StyledCard,
  StyledCardContentFlex,
  StyledTypography,
} from '../../../styles/shared';

class LeaderCard extends Component {
  // Get Questions
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  render() {
    const { users } = this.props;

    return (
      <Container maxWidth="md">
        {users.map((user) => (
          <StyledCard key={user.id}>
            <StyledCardContentFlex>
              <Box>
                <img src={user.avatarURL} alt={user.name} className="avatar-question"></img>
              </Box>

              <Divider orientation="vertical" flexItem />

              <StyledBoxQuestion>
                <Typography variant="h5" component="h2" color="primary">
                  {user.name}
                </Typography>
                <Box marginTop={4}>
                  <StyledTypography color="textSecondary" variant="body1" component="p">
                    Created questions: {user.questions.length}
                  </StyledTypography>
                  <StyledTypography color="textSecondary" variant="body1" component="p">
                    Answered questions: {user.answers.length}
                  </StyledTypography>
                </Box>
              </StyledBoxQuestion>

              <Divider orientation="vertical" flexItem />

              <Box marginLeft={3} textAlign="center">
                <img alt="" src={Score} className="score-img"></img>
                <Typography variant="h3" component="p" color="secondary">
                  {user.score}
                </Typography>
              </Box>
            </StyledCardContentFlex>
          </StyledCard>
        ))}
      </Container>
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
