import { Session } from '@supabase/supabase-js';
import store from '../store/store';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ChannelItemData = {
  name: string;
  type: 'channel-public' | 'channel-private';
};

export type DirectMessageItemData = {
  name: string;
  status: 'online' | 'offline';
};

export type MessageData = {
  username: string;
  timestamp: string;
  message: string;
};

export type UserData = {
  name: string;
  avatar_src: string;
  email: string;
  id: string;
};

export type AuthStateSlice = {
  user_email: string;
  session: Session | null;
};
