import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import config from '@host/config';
import { Fetch } from '@host/types';
import { EnumRole, TypeUser } from 'shared';
import axios from 'axios';

export interface ResponseError {
  code?: string;
  description?: string;
  message?: string;
}

export interface SliceState {
  user: TypeUser | null;
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
      return rejectWithValue(error.response.data);
    }
  },
);

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    reset: (): SliceState => initialState,
    setRole: (state, action: PayloadAction<EnumRole>) => {
      if (state.user) {
        state.user.role = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    /** getUserInfo */
    builder.addCase(getUserInfo.pending, (state) => {
      state.fetchingState = Fetch.Pending;
      state.error = null;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
      state.fetchingState = Fetch.Fulfilled;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.fetchingState = Fetch.Rejected;
      state.error = action.error;
    });
  },
});

export const { reset, setRole } = slice.actions;

export default slice.reducer;
