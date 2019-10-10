import React from 'react';
import { Provider } from 'react-redux';

import { store } from './state/app.store';
import { RandomCardPage } from './pages/random-card.component';

const App = () => {
  return (
    <Provider store={store}>
      <RandomCardPage />
    </Provider>
  );
};

export { App };
