import { configureStore, Middleware } from '@reduxjs/toolkit';
import rootReducer from './features';

const windowStateMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  // @ts-ignore
  window.host = store.getState();
  // @ts-ignore
  console.log(window.host, 'global state');
  return result;
};

const loadFromWindow = () => {
  try {
    // @ts-ignore
    if (window.host === null) return undefined;
    // @ts-ignore
    return window.host;
  } catch (e) {
    console.warn('Error loading state from window:', e);
    return undefined;
  }
};

// Создание хранилища с подключенным middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(windowStateMiddleware),
  preloadedState: loadFromWindow(),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
