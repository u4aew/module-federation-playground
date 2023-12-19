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
export const getTransactions = createAsyncThunk(
  'modules/transactions',
  async () => {
    try {
      const { data } = await axios.get(config.routes.transactions);
      return data;
    } catch (error) {
      alert(error.message);
    }
  },
);

/**
 * Получить информацию о транзакциях
 */
export const getTransactionDetails = createAsyncThunk<
  // Return type of the payload creator
  never,
  // First argument to the payload creator
  string,
  never
>('modules/transaction/details', async () => {
  try {
    const { data } = await axios.get(config.routes.transactionDetails);
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

    /** getDetailsTransaction */

    builder.addCase(getTransactionDetails.pending, (state) => {
      state.fetchingState = Fetch.Pending;
      state.error = null;
    });
    builder.addCase(getTransactionDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.fetchingState = Fetch.Fulfilled;
    });
    builder.addCase(getTransactionDetails.rejected, (state, action) => {
      state.fetchingState = Fetch.Rejected;
      // @ts-ignore
      state.error = action.error;
    });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
