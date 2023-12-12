import React from 'react';
import ReactDOM from 'react-dom/client';

import configureStore from './store/configureStore';
import App from './root/App';

const store = configureStore();
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App store={store} />);
