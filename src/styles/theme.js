import { createMuiTheme } from '@material-ui/core';

export const scTheme = {
  primary: '#150e56',
  secondary: '#7B113A',
  blueMedium: '#1597BB',
  blueLight: '#8FD6E1',
  offWhite: '#F6F5F5',
};

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: scTheme.primary,
    },
    secondary: {
      main: scTheme.secondary,
    },
  },
});
