import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class QuestionCard extends Component {
  render() {
    const { users, question } = this.props;

    return (
      <Card variant="outlined">
        <div>
          <img
            src={users[question.author].avatarURL}
            alt={users.name}
            style={{ height: 100, width: 100, marginRight: 12 }}
          ></img>
        </div>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {users[question.author].name} asks:
          </Typography>
          <Typography variant="h5" component="h2">
            Would you rather
          </Typography>
          <br />
          <Typography color="textSecondary" variant="body2" component="p">
            ... {question.optionOne.text} ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Pull</Button>
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps({ users, questions: { questions } }, { questionId }) {
  const question = questions[questionId];
  return {
    users,
    question,
  };
}

export default connect(mapStateToProps)(QuestionCard);
