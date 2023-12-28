import { combineReducers } from '@reduxjs/toolkit';
import common from './common/slice';

const rootReducer = combineReducers({
  common,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
