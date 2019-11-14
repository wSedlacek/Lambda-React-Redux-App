import React from 'react';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { store } from './state/app.store';
import { theme } from './theme/config.theme';
import { RandomCardPage } from './pages/random-card.component';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RandomCardPage />
      </ThemeProvider>
    </Provider>
  );
};

export { App };
