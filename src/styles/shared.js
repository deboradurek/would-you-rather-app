import styled from 'styled-components';
import { Card, Box, CardActions, CardContent, Typography } from '@material-ui/core';

export const StyledMainCard = styled(Card)`
  margin: 80px 0;
`;

export const StyledCard = styled(Card)`
  margin: 14px 0;
`;

export const StyledCardContentFlex = styled(CardContent)`
  display: flex;
  && {
    padding: 36px 32px;
  }
`;

export const StyledTitle = styled.h4`
  color: ${(props) => props.theme.secondary};
  margin: 10px;
  text-align: center;
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledBoxFlexCenter = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledBoxQuestion = styled(Box)`
  margin-left: 28px;
  width: 100%;
  div a {
    width: 100%;
  }
`;

export const StyledTypography = styled(Typography)`
  margin-top: 16px;
`;
