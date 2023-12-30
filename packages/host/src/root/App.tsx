import React from 'react';
import Pages from './Pages';
import { Provider } from 'react-redux';

const App = ({ store }): JSX.Element => {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
};

export default App;
