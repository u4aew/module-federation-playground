import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './features';

// Создание хранилища с подключенным middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
