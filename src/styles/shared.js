import styled from 'styled-components';
import {
  Card,
  Box,
  CardActions,
  CardContent,
  RadioGroup,
  LinearProgress,
  Typography,
} from '@material-ui/core';

export const StyledMainCardCenter = styled(Card)`
  margin: 80px 0;
  text-align: center;
  padding-bottom: 28px;
`;

export const StyledMainCard = styled(Card)`
  margin: 80px 0;
`;

export const StyledCard = styled(Card)`
  margin: 14px 0;
`;

export const StyledCardContent = styled(CardContent)`
  padding: 36px 32px;
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

export const StyledUserSpan = styled.span`
  color: ${(props) => props.theme.primary};
  margin-left: 12px;
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

export const StyledBoxResults = styled.div`
  margin: 24px 0;
  padding: 14px;
  background-color: ${(props) => (props.isOptionOneSelected ? '#f5fafc' : '')};
  border: ${(props) => (props.isOptionOneSelected ? '1px solid #8FD6E1' : 'none')};
  border-radius: ${(props) => (props.isOptionOneSelected ? '10px' : '0')};
`;

export const StyledCaptionVotes = styled.span`
  text-align: center;
`;
export const StyledRadioGroup = styled(RadioGroup)`
  margin-top: 20px;
  label:not(:last-child) {
    margin-bottom: 8px;
  }
  label {
    align-items: flex-start;
  }
  span {
    padding-top: 0;
  }
`;

export const StyledLinearProgress = styled(LinearProgress)`
  width: 100%;
  height: 28px;
  border-radius: 5px;
  margin-right: 8px;
`;

export const StyledTypography = styled(Typography)`
  margin-top: 16px;
`;

export const StyledTypographyCenter = styled(Typography)`
  margin-top: 16px;
  text-align: center;
`;
