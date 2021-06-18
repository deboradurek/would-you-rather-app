import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import getQuestions, { saveQuestionAnswer } from '../../actions/questions';
import QuestionResults from './component/QuestionResults';
import {
  Button,
  CardHeader,
  Container,
  Divider,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  StyledBoxFlexCenter,
  StyledBoxQuestion,
  StyledCardActions,
  StyledCardContentFlex,
  StyledMainCard,
} from '../../styles/shared';
import { StyledRadioGroup } from './styles';

class QuestionView extends Component {
  state = {
    choiceValue: '',
  };

  // Get questions
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
    const { dispatch, questionId, authedUser } = this.props;
    const { choiceValue } = this.state;

    e.preventDefault();

    dispatch(
      saveQuestionAnswer({
        authedUser,
        qid: questionId,
        answer: choiceValue,
      })
    );
  };

  render() {
    const { selectedUser, isLoading, question, voted, isOptionOneSelected } = this.props;
    const { choiceValue } = this.state;

    if (!question && !isLoading) {
      return <Redirect to="/not-found" />;
    }

    return (
      <Container maxWidth="sm">
        <StyledMainCard>
          {!isLoading ? (
            <>
              <CardHeader
                subheader={
                  !voted ? (
                    <Typography color="secondary">{selectedUser.name} asks:</Typography>
                  ) : (
                    <Typography color="secondary">Asked by {selectedUser.name}</Typography>
                  )
                }
              />
              <Divider />

              <StyledCardContentFlex>
                <StyledBoxFlexCenter>
                  <img
                    src={selectedUser.avatarURL}
                    alt={selectedUser.name}
                    className="avatar-question"
                  ></img>
                </StyledBoxFlexCenter>

                <Divider orientation="vertical" flexItem />

                {!voted ? (
                  // Question
                  <StyledBoxQuestion>
                    <Typography variant="h5" component="h2" color="primary" gutterBottom>
                      Would you rather
                    </Typography>

                    <form onSubmit={(e) => this.handleSubmit(e)}>
                      <StyledRadioGroup
                        name="quiz"
                        value={choiceValue}
                        onChange={(e) => this.handleRadioChange(e)}
                      >
                        <FormControlLabel
                          value={'optionOne'}
                          control={<Radio />}
                          label={question.optionOne.text}
                        />
                        <FormControlLabel
                          value={'optionTwo'}
                          control={<Radio />}
                          label={question.optionTwo.text}
                        />
                      </StyledRadioGroup>

                      <StyledCardActions>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          color="primary"
                          fullWidth
                          disabled={choiceValue === ''}
                        >
                          Vote
                        </Button>
                      </StyledCardActions>
                    </form>
                  </StyledBoxQuestion>
                ) : (
                  // Results
                  <QuestionResults question={question} isOptionOneSelected={isOptionOneSelected} />
                )}
              </StyledCardContentFlex>
            </>
          ) : (
            <Skeleton animation="wave" variant="rect" height={340} />
          )}
        </StyledMainCard>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser, users, questions: { isLoading, questions } }, props) {
  const { question_id } = props.match.params;

  const question = questions[question_id];

  return {
    questionId: question_id,
    authedUser: authedUser.id,
    voted: Boolean(users[authedUser.id].answers[question_id]),
    isLoading,
    question,
    selectedUser: users[question?.author],
    isOptionOneSelected: question?.optionOne.votes.includes(authedUser.id),
  };
}

export default connect(mapStateToProps)(QuestionView);
