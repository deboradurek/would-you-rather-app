import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from '../../actions/questions';
import LoadingButton from '../../components/LoadingButton/LoadingButton';
import { CardHeader, Container, Divider, TextField, Typography } from '@material-ui/core';
import {
  StyledCardActions,
  StyledMainCard,
  StyledTitle,
  StyledTypography,
  StyledTypographyCenter,
} from '../../styles/shared';
import { StyledCardContent } from './styles';

class AddView extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    isSaving: false,
  };

  handleChange = (field) => (e) => {
    const input = e.target.value;

    this.setState({
      [field]: input,
    });
  };

  // Save New Question to DataBase
  handleSubmit = (e) => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authedUserId, history } = this.props;

    e.preventDefault();

    this.setState({
      isSaving: true,
    });

    dispatch(saveQuestion(optionOneText, optionTwoText, authedUserId)).then(() => {
      history.push('/');
    });
  };

  render() {
    const { optionOneText, optionTwoText, isSaving } = this.state;

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
                <LoadingButton
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                  disabled={optionOneText === '' || optionTwoText === ''}
                  loading={isSaving}
                >
                  Add
                </LoadingButton>
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
    authedUserId: authedUser.id,
  };
}

export default connect(mapStateToProps)(AddView);
