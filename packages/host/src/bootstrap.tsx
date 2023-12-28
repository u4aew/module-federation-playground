import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store';
import App from './root/App';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App store={store} />);
