import styled from 'styled-components';
import { Card, Box, CardActions, CardContent } from '@material-ui/core';

export const StyledMainCard = styled(Card)`
  margin: 100px 0;
  text-align: center;
  padding-bottom: 28px;
`;

export const StyledCard = styled(Card)`
  margin: 14px 0;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  && {
    padding: 36px 32px;
  }
`;

export const StyledTitle = styled.h4`
  color: ${(props) => props.theme.secondary};
  margin: 10px;
`;

export const StyledUserSpan = styled.span`
  color: ${(props) => props.theme.primary};
  margin-left: 12px;
`;

export const StyledBoxMenuLogin = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledBoxQuestion = styled(Box)`
  margin-left: 28px;
  width: 100%;
  div a {
    width: 100%;
  }
`;
