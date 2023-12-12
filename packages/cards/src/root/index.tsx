import React from 'react';
import App from '../app/App';
import { Provider } from 'react-redux';
import configureStore from '@modules/cards/store/configureStore';

const Index = (): JSX.Element => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Index;
