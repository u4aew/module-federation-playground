import { configureStore, Middleware } from '@reduxjs/toolkit';
import rootReducer from './features';

// Middleware для сохранения состояния в localStorage
const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('state', JSON.stringify(store.getState()));
  return result;
};

// Загрузка состояния из localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Error loading state from localStorage:', e);
    return undefined;
  }
};

// Создание хранилища с подключенным middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: loadFromLocalStorage(),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
