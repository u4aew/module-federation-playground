import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../../config';
import { Fetch } from '@host/types';
import axios from 'axios';

export interface ResponseError {
  code?: string;
  description?: string;
  message?: string;
}

export interface SliceState {
  user: object | null;
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
export const getUserInfo = createAsyncThunk(
  'host/user',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(config.routes.user);
      return data;
    } catch (error) {
      // Используйте rejectWithValue для отправки ошибки, если это необходимо
      return rejectWithValue(error.response.data);
    }
  },
);

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
      console.log(state.fetchingState, 'state.fetchingState');
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
