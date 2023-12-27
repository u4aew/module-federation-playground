import React from 'react';
import App from '../app/App';
import { Provider } from 'react-redux';
import store from '@modules/cards/store/store';

const Index = (): JSX.Element => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Index;
