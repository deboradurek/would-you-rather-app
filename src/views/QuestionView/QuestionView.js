import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import getQuestions from '../../actions/questions';
import LinearProgress from '@material-ui/core/LinearProgress';

class QuestionView extends Component {
  state = {
    voted: false,
    choiceValue: '',
  };

  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  handleRadioChange = (e) => {
    const choiceValue = e.target.value;

    this.setState({
      choiceValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      voted: true,
    });
  };

  render() {
    const { questionId, users, isLoading, questions } = this.props;
    const { voted, choiceValue } = this.state;

    const sumVotes = () => {
      return (
        questions[questionId].optionOne.votes.length + questions[questionId].optionTwo.votes.length
      );
    };

    return (
      <>
        {!isLoading ? (
          <Card variant="outlined" style={{ margin: 100 }}>
            <CardContent>
              {!voted ? (
                // Question card title
                <Typography color="textSecondary" gutterBottom>
                  {users[questions[questionId].author].name} asks:
                </Typography>
              ) : (
                // Results card title
                <Typography color="textSecondary" gutterBottom>
                  Asked by {users[questions[questionId].author].name}:
                </Typography>
              )}

              <div>
                <img
                  src={users[questions[questionId].author].avatarURL}
                  alt={users.name}
                  style={{ height: 150, width: 150, marginTop: 40 }}
                ></img>
              </div>

              {!voted ? (
                // Question
                <div>
                  <Typography variant="h5" component="h2">
                    Would you rather
                  </Typography>
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormControl component="fieldset">
                      {/* <FormLabel component="legend">Would you rather</FormLabel> */}
                      <RadioGroup
                        name="quiz"
                        value={choiceValue}
                        onChange={(e) => this.handleRadioChange(e)}
                      >
                        <FormControlLabel
                          value={questions[questionId].optionOne.text}
                          control={<Radio />}
                          label={questions[questionId].optionOne.text}
                        />
                        <FormControlLabel
                          value={questions[questionId].optionTwo.text}
                          control={<Radio />}
                          label={questions[questionId].optionTwo.text}
                        />
                      </RadioGroup>
                      <Button type="submit" variant="outlined" color="primary">
                        Vote
                      </Button>
                    </FormControl>
                  </form>
                </div>
              ) : (
                // Results
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
                            value={
                              (questions[questionId].optionOne.votes.length / sumVotes()) * 100
                            }
                            style={{ height: 30, borderRadius: 5 }}
                          />
                          <Typography variant="body2" color="textSecondary">
                            {`${
                              (questions[questionId].optionOne.votes.length / sumVotes()) * 100
                            }%`}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="textSecondary">
                          {`${
                            questions[questionId].optionOne.votes.length
                          } out of ${sumVotes()} votes`}
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
                            value={
                              (questions[questionId].optionTwo.votes.length / sumVotes()) * 100
                            }
                            style={{ height: 30, borderRadius: 5 }}
                          />
                          <Typography variant="body2" color="textSecondary">
                            {`${
                              (questions[questionId].optionTwo.votes.length / sumVotes()) * 100
                            }%`}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="textSecondary">
                          {`${
                            questions[questionId].optionTwo.votes.length
                          } out of ${sumVotes()} votes`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card variant="outlined">
            <CardContent>
              <Skeleton variant="rect" height={300} />
            </CardContent>
          </Card>
        )}
      </>
    );
  }
}

function mapStateToProps({ users, questions: { isLoading, questions } }, props) {
  const { question_id } = props.match.params;

  return {
    questionId: question_id,
    users,
    isLoading,
    questions,
  };
}

export default connect(mapStateToProps)(QuestionView);
