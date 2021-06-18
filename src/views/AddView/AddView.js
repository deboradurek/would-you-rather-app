import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveQuestion } from '../../actions/questions';
import { Button, CardHeader, Container, Divider, TextField, Typography } from '@material-ui/core';
import {
  StyledCardActions,
  StyledMainCard,
  StyledTitle,
  StyledTypography,
} from '../../styles/shared';
import { StyledCardContent, StyledTypographyCenter } from './styles';

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
    const { dispatch, authedUser } = this.props;

    dispatch(saveQuestion(optionOneText, optionTwoText, authedUser));

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
      <Container maxWidth="md">
        <StyledMainCard>
          <CardHeader title={<StyledTitle>Create New Question</StyledTitle>} />

          <Divider />

          <StyledCardContent>
            <Typography color="textSecondary" gutterBottom>
              Complete the question:
            </Typography>

            <StyledTypography variant="h6" component="h2" color="primary">
              Would you rather...
            </StyledTypography>

            <form onSubmit={this.handleSubmit}>
              <TextField
                placeholder="Enter Text For Option ONE here"
                fullWidth
                margin="normal"
                color="primary"
                variant="outlined"
                value={optionOneText}
                onChange={this.handleChange('optionOneText')}
              />

              <StyledTypographyCenter color="textSecondary" gutterBottom>
                OR
              </StyledTypographyCenter>

              <TextField
                placeholder="Enter Text For Option TWO here"
                fullWidth
                margin="normal"
                color="primary"
                variant="outlined"
                value={optionTwoText}
                onChange={this.handleChange('optionTwoText')}
              />

              <StyledCardActions>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                  disabled={optionOneText === '' || optionTwoText === ''}
                >
                  Add
                </Button>
              </StyledCardActions>
            </form>
          </StyledCardContent>
        </StyledMainCard>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser.id,
  };
}

export default connect(mapStateToProps)(AddView);
