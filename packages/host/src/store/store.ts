import { configureStore, Middleware } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './features';
const windowStateMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    (window as any).host = store.getState();
    return result;
  };

const loadFromWindow = (): RootState | undefined => {
  try {
    const hostState = (window as any).host;
    if (hostState === null) return undefined;
    return hostState;
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
