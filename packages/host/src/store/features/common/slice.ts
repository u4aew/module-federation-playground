import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '@host/config';
import { events, types as SharedTypes } from 'shared';
import axios from 'axios';
const { emitChangeUserRole } = events;
export interface ResponseError {
  code?: string;
  description?: string;
  message?: string;
}

export interface SliceState {
  user: SharedTypes.TypeUser | null;
  fetchingState: SharedTypes.EnumFetch;
  error: ResponseError | null;
}

const initialState: SliceState = {
  user: null,
  fetchingState: SharedTypes.EnumFetch.Idle,
  error: null,
};

/**
 * Get user info
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

// Set user role
export const setUserRole = createAsyncThunk(
  'host/set/user/role',
  async (role: SharedTypes.EnumRole, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(config.routes.user);
      emitChangeUserRole(role);
      return { ...data, role };
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
  },
  extraReducers: (builder) => {
    /** getUserInfo */
    builder.addCase(getUserInfo.pending, (state) => {
      state.fetchingState = SharedTypes.EnumFetch.Pending;
      state.error = null;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
      state.fetchingState = SharedTypes.EnumFetch.Fulfilled;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.fetchingState = SharedTypes.EnumFetch.Rejected;
      state.error = action.error;
    });
    /** setUserRole */
    builder.addCase(setUserRole.pending, (state) => {
      state.error = null;
    });
    builder.addCase(setUserRole.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(setUserRole.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default slice.reducer;
