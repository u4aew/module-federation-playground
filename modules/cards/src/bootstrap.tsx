import React from 'react';
import ReactDom from 'react-dom';
import configureStore from '@modules/cards/store/configureStore';

import App from "@modules/cards/root/App";
const store = configureStore();
ReactDom.render(<App store={store} />, document.getElementById("root"));
