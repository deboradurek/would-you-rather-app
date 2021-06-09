import { Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';

class AddView extends Component {
  state = {
    inputOne: '',
    inputTwo: '',
  };

  handleChangeOne = (e) => {
    const inputOne = e.target.value;

    this.setState({
      inputOne,
    });
  };

  handleChangeTwo = (e) => {
    const inputTwo = e.target.value;

    this.setState({
      inputTwo,
    });
  };

  render() {
    const { inputOne, inputTwo } = this.state;

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

          <TextField
            style={{ margin: 8 }}
            placeholder="  Enter Text For Option ONE here"
            fullWidth
            margin="normal"
            variant="outlined"
            value={inputOne}
            onChange={this.handleChangeOne}
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
            value={inputTwo}
            onChange={this.handleChangeTwo}
          />

          <br />

          <div></div>
        </CardContent>

        <CardActions>
          <Button size="small">Add</Button>
        </CardActions>
      </Card>
    );
  }
}

export default AddView;
