import React from 'react';
import CardsManager from "@modules/cards/components/cards";
import { Provider } from 'react-redux';

interface Props {
  store: object;
}

const App = ({store}): JSX.Element => {
  return (
    <Provider store={store}>
      <CardsManager/>
    </Provider>
  );
};

export default App
