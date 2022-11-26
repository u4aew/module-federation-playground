import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import rootReducer from './features';

export default function configureAppStore(preloadedState = {}): Store {
  const enhancers = [];
  const middleware = [];

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...middleware, ...getDefaultMiddleware()],
    enhancers: [...enhancers],
    preloadedState,
  });

  return store;
}
