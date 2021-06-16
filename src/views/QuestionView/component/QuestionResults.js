import React, { Component } from 'react';
import { Box, Card, CardContent, LinearProgress, Paper, Typography } from '@material-ui/core';
import {
  StyledBoxFlexCenter,
  StyledBoxQuestion,
  StyledBoxResults,
  StyledCard,
  StyledLinearProgress,
} from '../../../styles/shared';

class QuestionResults extends Component {
  render() {
    const { question } = this.props;

    const sumVotes = () => {
      return question.optionOne.votes.length + question.optionTwo.votes.length;
    };

    return (
      <StyledBoxQuestion>
        <Typography variant="h5" component="h2" color="primary" gutterBottom>
          Results:
        </Typography>

        <Box>
          <StyledBoxResults>
            <Typography color="primary" variant="body2" component="p" gutterBottom>
              Would you rather {question.optionOne.text}?
            </Typography>

            <StyledBoxFlexCenter>
              <StyledLinearProgress
                variant="determinate"
                value={Math.round((question.optionOne.votes.length / sumVotes()) * 100)}
                color="secondary"
              />
              <Typography variant="body2" color="primary">
                {`${Math.round((question.optionOne.votes.length / sumVotes()) * 100)}%`}
              </Typography>
            </StyledBoxFlexCenter>
            <Box textAlign="center">
              <Typography variant="caption" color="textSecondary">
                {`${question.optionOne.votes.length} out of ${sumVotes()} votes`}
              </Typography>
            </Box>
          </StyledBoxResults>

          <StyledBoxResults>
            <Typography color="primary" variant="body2" component="p" gutterBottom>
              Would you rather {question.optionTwo.text}?
            </Typography>
            <StyledBoxFlexCenter>
              <StyledLinearProgress
                variant="determinate"
                value={Math.round((question.optionTwo.votes.length / sumVotes()) * 100)}
                color="secondary"
              />
              <Typography variant="body2" color="primary">
                {`${Math.round((question.optionTwo.votes.length / sumVotes()) * 100)}%`}
              </Typography>
            </StyledBoxFlexCenter>
            <Box textAlign="center">
              <Typography variant="caption" color="textSecondary">
                {`${question.optionTwo.votes.length} out of ${sumVotes()} votes`}
              </Typography>
            </Box>
          </StyledBoxResults>
        </Box>
      </StyledBoxQuestion>
    );
  }
}

export default QuestionResults;
