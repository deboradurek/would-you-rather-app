import React, { Component } from 'react';
import { StyledButton, StyledCircularProgress, StyledText } from './styles';

class LoadingButton extends Component {
  render() {
    const { children, loading, disabled, ...rest } = this.props;

    return (
      <StyledButton {...rest} disabled={disabled || loading}>
        <StyledText isLoading={loading}>{children}</StyledText>
        {loading && <StyledCircularProgress size={24} />}
      </StyledButton>
    );
  }
}

export default LoadingButton;
