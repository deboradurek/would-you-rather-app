import styled from 'styled-components';
import { RadioGroup, LinearProgress } from '@material-ui/core';

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

export const StyledBoxResults = styled.div`
  margin: 24px 0;
  padding: 14px;
  background-color: ${(props) => (props.highlight ? '#f5fafc' : 'none')};
  border: ${(props) => (props.highlight ? '1px solid #8FD6E1' : 'none')};
  border-radius: ${(props) => (props.highlight ? '10px' : '0')};
`;

export const StyledLinearProgress = styled(LinearProgress)`
  width: 100%;
  height: 28px;
  border-radius: 5px;
  margin-right: 8px;
`;
