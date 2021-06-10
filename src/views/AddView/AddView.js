import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import { saveQuestion } from '../../actions/questions';
import { Redirect } from 'react-router';

class AddView extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  };

  handleChange = (field) => (e) => {
    const input = e.target.value;

    this.setState({
      [field]: input,
    });
  };

  // Save New Question to DataBase
  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(saveQuestion(optionOneText, optionTwoText, 'sarahedo'));

    this.setState({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    });
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />;
    }

    return (
      <Card variant="outlined" style={{ margin: 100 }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Create New Question
          </Typography>

          <Typography color="textSecondary" gutterBottom>
            Complete the question:
          </Typography>

          <Typography variant="h5" component="h2">
            Would you rather...
          </Typography>

          <form onSubmit={this.handleSubmit}>
            <TextField
              style={{ margin: 8 }}
              placeholder="  Enter Text For Option ONE here"
              fullWidth
              margin="normal"
              variant="outlined"
              value={optionOneText}
              onChange={this.handleChange('optionOneText')}
            />

            <Typography color="textSecondary" gutterBottom>
              OR
            </Typography>

            <TextField
              style={{ margin: 8 }}
              placeholder="  Enter Text For Option TWO here"
              fullWidth
              margin="normal"
              variant="outlined"
              value={optionTwoText}
              onChange={this.handleChange('optionTwoText')}
            />

            <CardActions>
              <Button size="small" type="submit">
                Add
              </Button>
            </CardActions>
          </form>
          <br />

          <div></div>
        </CardContent>
      </Card>
    );
  }
}

export default connect()(AddView);
