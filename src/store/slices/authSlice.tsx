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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession(state, { payload }) {
      state.session = payload;
    },
  },
  // handling case when redirect to google login failed
  // extraReducers: (builder) => {
  //   builder.addCase(signInWithOAuth.rejected, (state) => {

  //   })
  // }
});

export { signInWithOAuth, signOut };
export const { setSession } = authSlice.actions;
export default authSlice.reducer;
