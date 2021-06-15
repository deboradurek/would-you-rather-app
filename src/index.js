import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/index.css';
import reducer from './reducers';
import middleware from './middleware';
import App from './components/App';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { scTheme, muiTheme } from './styles/theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <SCThemeProvider theme={scTheme}>
        <App />
      </SCThemeProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
