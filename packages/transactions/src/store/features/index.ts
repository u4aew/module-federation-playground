import { combineReducers } from '@reduxjs/toolkit';
import transactions from './transactions/slice';

const rootReducer = combineReducers({
  transactions,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
