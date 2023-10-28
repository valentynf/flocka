import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Session, createClient } from '@supabase/supabase-js';

const supabase = createClient(
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

const getSession = createAsyncThunk('auth/getSession', async () => {
  const { data } = await supabase.auth.getSession();
  return data.session;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login() {
      supabase.auth.signInWithOAuth({ provider: 'google' });
    },
    logout(state) {
      supabase.auth.signOut();
      state.session = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSession.fulfilled, (state, { payload }) => {
      state.session = payload;
    });
  },
});

export { getSession };
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
