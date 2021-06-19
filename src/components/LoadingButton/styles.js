import { Button, CircularProgress } from '@material-ui/core';
import styled, { css } from 'styled-components';

const hiddenText = css`
  visibility: hidden;
  opacity: 0;
`;

export const StyledText = styled.p`
  ${(props) => props.isLoading && hiddenText}
`;

export const StyledButton = styled(Button)`
  position: relative;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;
