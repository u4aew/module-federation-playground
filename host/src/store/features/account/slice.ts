import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  userName: string | null;
  fetchingState: Fetch;
  error: ResponseError | null;
}

const initialState: SliceState = {
  userName: null,
  fetchingState: Fetch.Idle,
  error: null,
};

/**
 * Получить информацию о пользователе
 */
export const getUserInfo = createAsyncThunk<
  { form: {} },
  string,
  { rejectValue: ResponseError }
>('host/user', async () => {
  try {
    const { data } = await axios.get('host/user/');
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
      state.userName = 'sdas'
      state.fetchingState = Fetch.Fulfilled;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.fetchingState = Fetch.Rejected;
      state.error = action.error;
    });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
