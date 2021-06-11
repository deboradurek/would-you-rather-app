import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Card, CardContent, LinearProgress, Typography } from '@material-ui/core';

class QuestionResults extends Component {
  render() {
    const { questionId, questions } = this.props;

    const sumVotes = () => {
      return (
        questions[questionId].optionOne.votes.length + questions[questionId].optionTwo.votes.length
      );
    };

    return (
      <div>
        <Typography variant="h5" component="h2">
          Results:
        </Typography>
        <br />
        <div>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" variant="body2" component="p">
                Would you rather {questions[questionId].optionOne.text}?
              </Typography>
              <Box>
                <LinearProgress
                  variant="determinate"
                  value={Math.round(
                    (questions[questionId].optionOne.votes.length / sumVotes()) * 100
                  )}
                  style={{ height: 30, borderRadius: 5 }}
                />
                <Typography variant="body2" color="textSecondary">
                  {`${Math.round(
                    (questions[questionId].optionOne.votes.length / sumVotes()) * 100
                  )}%`}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                {`${questions[questionId].optionOne.votes.length} out of ${sumVotes()} votes`}
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" variant="body2" component="p">
                Would you rather {questions[questionId].optionTwo.text}?
              </Typography>
              <Box>
                <LinearProgress
                  variant="determinate"
                  value={Math.round(
                    (questions[questionId].optionTwo.votes.length / sumVotes()) * 100
                  )}
                  style={{ height: 30, borderRadius: 5 }}
                />
                <Typography variant="body2" color="textSecondary">
                  {`${Math.round(
                    (questions[questionId].optionTwo.votes.length / sumVotes()) * 100
                  )}%`}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                {`${questions[questionId].optionTwo.votes.length} out of ${sumVotes()} votes`}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions: { questions } }, { questionId }) {
  return {
    questionId,
    questions,
  };
}

export default connect(mapStateToProps)(QuestionResults);
