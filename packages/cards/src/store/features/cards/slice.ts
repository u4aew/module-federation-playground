import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../../config';
import { CardDetails, CardInfo } from '@modules/cards/types';
import { EnumFetch } from 'shared';
import axios from 'axios';

export interface ResponseError {
  code?: string;
  description?: string;
  message?: string;
}

interface SliceState {
  list: CardInfo[] | null;
  details: null | CardDetails;
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
 * Get list cards
 */
export const getCards = createAsyncThunk('modules/cards', async () => {
  try {
    const { data } = await axios.get(config.routes.cards);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

/**
 * Get details info
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
      state.fetchingState = EnumFetch.Pending;
      state.error = null;
    });
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.list = action.payload;
      state.fetchingState = EnumFetch.Fulfilled;
    });
    builder.addCase(getCards.rejected, (state, action) => {
      state.fetchingState = EnumFetch.Rejected;
      state.error = action.error;
    });

    /** getCardsDetails */

    builder.addCase(getCardDetails.pending, (state) => {
      state.fetchingState = EnumFetch.Pending;
      state.error = null;
    });
    builder.addCase(getCardDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.fetchingState = EnumFetch.Fulfilled;
    });
    builder.addCase(getCardDetails.rejected, (state) => {
      state.fetchingState = EnumFetch.Rejected;
    });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
