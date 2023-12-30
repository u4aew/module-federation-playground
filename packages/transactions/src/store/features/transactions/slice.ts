import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '@modules/transactions/config';
import { EnumFetch } from 'shared';
import { Transaction, TransactionDetails } from '@modules/transactions/types';
import axios from 'axios';

export interface ResponseError {
  code?: string;
  description?: string;
  message?: string;
}

interface SliceState {
  list: TransactionDetails[] | null;
  details: null | Transaction;
  fetchingState: EnumFetch;
  error: ResponseError | null;
}

const initialState: SliceState = {
  list: null,
  details: null,
  fetchingState: EnumFetch.Idle,
  error: null,
};

/**
 * Get list transactions
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
 * Get details info about transaction
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
      state.fetchingState = EnumFetch.Pending;
      state.error = null;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.list = action.payload;
      state.fetchingState = EnumFetch.Fulfilled;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.fetchingState = EnumFetch.Rejected;
      state.error = action.error;
    });

    /** getDetailsTransaction */

    builder.addCase(getTransactionDetails.pending, (state) => {
      state.fetchingState = EnumFetch.Pending;
      state.error = null;
    });
    builder.addCase(getTransactionDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.fetchingState = EnumFetch.Fulfilled;
    });
    builder.addCase(getTransactionDetails.rejected, (state) => {
      state.fetchingState = EnumFetch.Rejected;
    });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
