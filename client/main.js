import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './Navbar';
import Routes from './Routes';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6ff9ff',
      main: '#26c6da',
      dark: '#0095a8',
      contrastText: '#000',
    },
    secondary: {
      light: '#cfff95',
      main: '#9ccc65',
      dark: '#6b9b37',
      contrastText: '#000',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
