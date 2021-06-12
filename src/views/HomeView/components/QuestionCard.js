import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class QuestionCard extends Component {
  handleClick = (e, questionId) => {
    e.preventDefault();

    this.props.history.push(`/questions/${questionId}`);
  };

  render() {
    const { users, question } = this.props;

    return (
      <Card variant="outlined">
        <CardContent>
          <div>
            <img
              src={users[question.author].avatarURL}
              alt={users[question.author].name}
              style={{ height: 100, width: 100, marginRight: 12 }}
            ></img>
          </div>
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
          <Link to={`/questions/${question.id}`}>
            <Button size="small" onClick={(e) => this.handleClick(e, question.id)}>
              View Pull
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionCard));
