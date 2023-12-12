import { combineReducers } from '@reduxjs/toolkit';
import account from './account/slice';

const rootReducer = combineReducers({
  account,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
