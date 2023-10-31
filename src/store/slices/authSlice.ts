import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  authGetSession,
  authLogin,
  authSignOut,
} from '../../api/services/authApi';
import { fetchUserData } from '../../api/services/usersApi';
import { AuthStateSlice } from '../../types/appTypes';

const initialState: AuthStateSlice = {
  user_data: null,
  session: null,
};

export const signInWithOAuth = createAsyncThunk(
  'auth/signInWithOAuth',
  async (_, { rejectWithValue }) => {
    const { error } = await authLogin();
    if (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    const { error } = await authSignOut();
    if (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSession = createAsyncThunk(
  'auth/getSession',
  async (_, { rejectWithValue }) => {
    const { session, error } = await authGetSession();
    if (error) {
      return rejectWithValue(error.message);
    }
    return session;
  }
);

export const getUserData = createAsyncThunk(
  'auth/getUserData',
  async (email: string, { rejectWithValue }) => {
    const { data, error } = await fetchUserData(email);
    if (error) {
      return rejectWithValue(error.message);
    }
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession(state, { payload }) {
      state.session = payload;
    },
  },
  //add rejected handlers when there's an error state
  extraReducers: (builder) => {
    builder.addCase(getSession.fulfilled, (state, { payload }) => {
      state.session = payload;
    });
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.user_data = payload;
    });
  },
});

export const { setSession } = authSlice.actions;
export default authSlice.reducer;
