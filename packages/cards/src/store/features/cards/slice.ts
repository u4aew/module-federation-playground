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
  list: string[] | null;
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
 * Получить информацию о картах
 */
export const getCards = createAsyncThunk<
  // Return type of the payload creator
  any,
  // First argument to the payload creator
  string,
  any
>('modules/cards', async () => {
  try {
    const { data } = await axios.get(config.routes.cards);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

/**
 * Получить информацию о банковской карте
 */
export const getCardDetails = createAsyncThunk<
  // Return type of the payload creator
  never,
  // First argument to the payload creator
  string,
  never
>('modules/cards/details', async () => {
  try {
    const { data } = await axios.get(config.routes.cardsDetails);
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
    /** getCards */

    builder.addCase(getCards.pending, (state) => {
      state.fetchingState = Fetch.Pending;
      state.error = null;
    });
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.list = action.payload;
      state.fetchingState = Fetch.Fulfilled;
    });
    builder.addCase(getCards.rejected, (state, action) => {
      state.fetchingState = Fetch.Rejected;
      // @ts-ignore
      state.error = action.error;
    });

    /** getCardsDetails */

    builder.addCase(getCardDetails.pending, (state) => {
      state.fetchingState = Fetch.Pending;
      state.error = null;
    });
    builder.addCase(getCardDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.fetchingState = Fetch.Fulfilled;
    });
    builder.addCase(getCardDetails.rejected, (state, action) => {
      state.fetchingState = Fetch.Rejected;
      // @ts-ignore
      state.error = action.error;
    });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
