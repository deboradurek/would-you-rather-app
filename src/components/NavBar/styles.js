import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const StyledToolbar = styled(Toolbar)`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: space-between;
  height: 100px;
  h5 {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const LogoName = styled.span`
  font-family: 'Lilita One', cursive;
  font-size: 2rem;
  color: ${(props) => props.theme.blueLight};
`;

export const GroupedLinks = styled.div`
  a {
    color: ${(props) => props.theme.offWhite};
    margin: 0 1rem;
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.blueLight};
  }
`;

export const NavAuthedUser = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 14px;
  }
  button {
    color: ${(props) => props.theme.offWhite};
    margin-left: 36px;
  }
  button:hover {
    color: ${(props) => props.theme.blueLight};
  }
`;
