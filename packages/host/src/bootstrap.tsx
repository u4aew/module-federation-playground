import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/configureStore';
import App from './root/App';

const store = configureStore();
// @ts-ignore
ReactDom.render(<App store={store} />);
