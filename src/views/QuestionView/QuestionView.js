import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import getQuestions from '../../actions/questions';

class QuestionView extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  render() {
    const { users, isLoading, questions } = this.props;

    console.log(this.props);

    return (
      <>
        {!isLoading ? (
          <p>QuestionView</p>
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

function mapStateToProps({ users, questions: { isLoading, questions } }) {
  return {
    users,
    isLoading,
    questions,
  };
}

export default connect(mapStateToProps)(QuestionView);
