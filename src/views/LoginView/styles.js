import styled from 'styled-components';
import { Card, Select, MenuItem } from '@material-ui/core';

export const StyledMainCardCenter = styled(Card)`
  margin: 80px 0;
  text-align: center;
  padding-bottom: 28px;
`;

export const StyledUserSpan = styled.span`
  color: ${(props) => props.theme.primary};
  margin-left: 12px;
`;

export const StyledSelect = styled(Select)`
  min-width: 270px;
  height: 70px;
  margin-top: 30px;
`;

export const StyledMenuItem = styled(MenuItem)`
  padding: 10px 20px;
`;
