import React, { Component } from 'react';
import { Box, Typography } from '@material-ui/core';
import { StyledBoxFlexCenter, StyledBoxQuestion } from '../../../styles/shared';
import { StyledBoxResults, StyledLinearProgress } from '../styles';

class QuestionResults extends Component {
  sumVotes = () => {
    const { question } = this.props;
    return question.optionOne.votes.length + question.optionTwo.votes.length;
  };

  render() {
    const { question, isOptionOneSelected } = this.props;
    const sumVotes = this.sumVotes();
    const optionOneLen = question.optionOne.votes.length;
    const optionTwoLen = question.optionTwo.votes.length;

    return (
      <StyledBoxQuestion>
        <Typography variant="h5" component="h2" color="primary" gutterBottom>
          Results:
        </Typography>

        <Box>
          <StyledBoxResults highlight={isOptionOneSelected}>
            <Typography color="primary" variant="body2" component="p" gutterBottom>
              Would you rather {question.optionOne.text}?
            </Typography>

            <StyledBoxFlexCenter>
              <StyledLinearProgress
                variant="determinate"
                value={Math.round((optionOneLen / sumVotes) * 100)}
                color="secondary"
              />
              <Typography variant="body2" color="secondary">
                {`${Math.round((optionOneLen / sumVotes) * 100)}%`}
              </Typography>
            </StyledBoxFlexCenter>
            <Box textAlign="center" fontStyle="italic">
              <Typography variant="caption" color="textSecondary">
                {`${optionOneLen} out of ${sumVotes} votes`}
              </Typography>
            </Box>
          </StyledBoxResults>

          <StyledBoxResults highlight={!isOptionOneSelected}>
            <Typography color="primary" variant="body2" component="p" gutterBottom>
              Would you rather {question.optionTwo.text}?
            </Typography>
            <StyledBoxFlexCenter>
              <StyledLinearProgress
                variant="determinate"
                value={Math.round((optionTwoLen / sumVotes) * 100)}
                color="secondary"
              />
              <Typography variant="body2" color="secondary">
                {`${Math.round((optionTwoLen / sumVotes) * 100)}%`}
              </Typography>
            </StyledBoxFlexCenter>
            <Box textAlign="center" fontStyle="italic">
              <Typography variant="caption" color="textSecondary">
                {`${optionTwoLen} out of ${sumVotes} votes`}
              </Typography>
            </Box>
          </StyledBoxResults>
        </Box>
      </StyledBoxQuestion>
    );
  }
}

export default QuestionResults;
