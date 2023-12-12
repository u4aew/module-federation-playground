import { combineReducers } from '@reduxjs/toolkit';
import cards from './cards/slice';

const rootReducer = combineReducers({
  cards,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
