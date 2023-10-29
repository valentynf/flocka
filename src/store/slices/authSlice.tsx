import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Session, createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

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
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      return rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getSession = createAsyncThunk(
  'auth/getSession',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await supabase.auth.getSession();
      return data.session;
    } catch (err) {
      return rejectWithValue(err);
    }
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
  extraReducers: (builder) => {
    builder.addCase(getSession.fulfilled, (state, { payload }) => {
      state.session = payload;
    });
  },
});

export { signInWithOAuth, signOut, getSession };
export const { setSession } = authSlice.actions;
export default authSlice.reducer;
