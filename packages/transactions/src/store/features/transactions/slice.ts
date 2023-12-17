import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../../config';
import axios from 'axios';

export enum Fetch {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}

export interface ResponseError {
  code?: string;
  description?: string;
  message?: string;
}

interface SliceState {
  list: object[] | null;
  details: null | object;
  fetchingState: Fetch;
  error: ResponseError | null;
}

const initialState: SliceState = {
  list: null,
  details: null,
  fetchingState: Fetch.Idle,
  error: null,
};

/**
 * Получить информацию о транзакциях
 */
export const getTransactions = createAsyncThunk<
  // Return type of the payload creator
  any,
  // First argument to the payload creator
  string,
  any
>('modules/transactions', async () => {
  try {
    const { data } = await axios.get(config.routes.transactions);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    reset: (): SliceState => initialState,
  },
  extraReducers: (builder) => {
    /** getTransactions */

    builder.addCase(getTransactions.pending, (state) => {
      state.fetchingState = Fetch.Pending;
      state.error = null;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.list = action.payload;
      state.fetchingState = Fetch.Fulfilled;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.fetchingState = Fetch.Rejected;
      // @ts-ignore
      state.error = action.error;
    });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
