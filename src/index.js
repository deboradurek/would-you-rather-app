import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import App from './components/App';
import './styles/index.css';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { scTheme, muiTheme } from './styles/theme';

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
