import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
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
import getQuestions, { saveQuestionAnswer } from '../../actions/questions';
import QuestionResults from './component/QuestionResults';

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
    const { dispatch, questionId } = this.props;
    const { choiceValue } = this.state;

    e.preventDefault();

    this.setState({
      voted: true,
    });

    this.props.history.push(`/questions/${questionId}`);

    dispatch(
      saveQuestionAnswer({
        authedUser: 'sarahedo',
        qid: questionId,
        answer: choiceValue,
      })
    );
  };

  render() {
    const { questionId, users, isLoading, questions } = this.props;
    const { voted, choiceValue } = this.state;

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
                      <RadioGroup
                        name="quiz"
                        value={choiceValue}
                        onChange={(e) => this.handleRadioChange(e)}
                      >
                        <FormControlLabel
                          value={'optionOne'}
                          control={<Radio />}
                          label={questions[questionId].optionOne.text}
                        />
                        <FormControlLabel
                          value={'optionTwo'}
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
                <QuestionResults questionId={questionId} />
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
