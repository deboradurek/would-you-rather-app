import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Box, Button, Typography, Container, CardHeader, Divider } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  StyledBoxQuestion,
  StyledCard,
  StyledCardActions,
  StyledCardContent,
} from '../../../styles/shared';

class QuestionCard extends Component {
  // Send user to the url to the specific question id
  handleClick = (e, questionId) => {
    e.preventDefault();

    this.props.history.push(`/questions/${questionId}`);
  };

  render() {
    const { users, isLoading, question } = this.props;

    return (
      <Container maxWidth="sm">
        <StyledCard>
          {!isLoading ? (
            <>
              <CardHeader
                subheader={
                  <Typography color="secondary">{users[question.author].name} asks:</Typography>
                }
              />
              <Divider />

              <StyledCardContent>
                <Box>
                  <img
                    src={users[question.author].avatarURL}
                    alt={users[question.author].name}
                    className="avatar-question"
                  ></img>
                </Box>

                <Divider orientation="vertical" flexItem />

                <StyledBoxQuestion>
                  <Typography variant="h5" component="h2" color="primary" gutterBottom>
                    Would you rather
                  </Typography>
                  <br />
                  <Typography color="textSecondary" variant="body2" component="p">
                    ... {question.optionOne.text} ...
                  </Typography>

                  <StyledCardActions>
                    <Link to={`/questions/${question.id}`}>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        fullWidth
                        onClick={(e) => this.handleClick(e, question.id)}
                      >
                        View Pull
                      </Button>
                    </Link>
                  </StyledCardActions>
                </StyledBoxQuestion>
              </StyledCardContent>
            </>
          ) : (
            <Skeleton animation="wave" variant="rect" height={280} />
          )}
        </StyledCard>
      </Container>
    );
  }
}

function mapStateToProps({ users, questions: { isLoading } }) {
  return {
    users,
    isLoading,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionCard));
