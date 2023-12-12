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
  user: {} | null;
  fetchingState: Fetch;
  error: ResponseError | null;
}

const initialState: SliceState = {
  user: null,
  fetchingState: Fetch.Idle,
  error: null,
};

/**
 * Получить информацию о пользователе
 */
export const getUserInfo = createAsyncThunk<
  // Return type of the payload creator
  any,
  // First argument to the payload creator
  string,
  any
>('host/user', async () => {
  try {
    const { data } = await axios.get(config.routes.user);
    return data;
  } catch (error) {
     alert(error.message)
  }
});

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    reset: (): SliceState => initialState,
  },
  extraReducers: (builder) => {
    /** getUserInfo */

    builder.addCase(getUserInfo.pending, (state) => {
      state.fetchingState = Fetch.Pending;
      state.error = null;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      console.log(action.payload, 'action.payload');
      state.user = action.payload;
      state.fetchingState = Fetch.Fulfilled;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.fetchingState = Fetch.Rejected;
      // @ts-ignore
      state.error = action.error;
    });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
