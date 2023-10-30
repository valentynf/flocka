import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Session } from '@supabase/supabase-js';
import {
  authGetSession,
  authLogin,
  authSignOut,
  fetchUserData,
} from '../../api/auth';

export type AuthStateSlice = {
  user_email: string;
  session: Session | null;
};

const initialState: AuthStateSlice = {
  user_email: '',
  session: null,
};

const signInWithOAuth = createAsyncThunk(
  'auth/signInWithOAuth',
  async (_, { rejectWithValue }) => {
    const { error } = await authLogin();
    if (error) {
      return rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    const { error } = await authSignOut();
    if (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getSession = createAsyncThunk(
  'auth/getSession',
  async (_, { rejectWithValue }) => {
    const { data, error } = await authGetSession();
    if (error) {
      return rejectWithValue(error.message);
    }
    return data;
  }
);

const getUserData = createAsyncThunk(
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
      console.log(payload);
    });
  },
});

export { signInWithOAuth, signOut, getSession, getUserData };
export const { setSession } = authSlice.actions;
export default authSlice.reducer;
