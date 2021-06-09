import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import getQuestions from '../../actions/questions';

class QuestionView extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  render() {
    const { questionId, users, isLoading, questions } = this.props;

    console.log('Props: ', this.props);

    return (
      <>
        {!isLoading ? (
          <Card variant="outlined" style={{ marginTop: 50 }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {users[questions[questionId].author].name} asks:
              </Typography>
              <div>
                <img
                  src={users[questions[questionId].author].avatarURL}
                  alt={users.name}
                  style={{ height: 150, width: 150, marginTop: 40 }}
                ></img>
              </div>

              <Typography variant="h5" component="h2">
                Would you rather
              </Typography>
              <br />
              <div>
                <Typography color="textSecondary" variant="body2" component="p">
                  {questions[questionId].optionOne.text}
                </Typography>
                <Typography color="textSecondary" variant="body2" component="p">
                  {questions[questionId].optionTwo.text}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              {/* <Link to={`/questions/${question.id}`}> */}
              <Button size="small">Vote</Button>
              {/* </Link> */}
            </CardActions>
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
