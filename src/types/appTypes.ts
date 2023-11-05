import { Session } from '@supabase/supabase-js';
import store from '../store/store';

// infering the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AuthStateSlice = {
  user_data: UserData | null;
  session: Session | null;
};

export type UserData = {
  name: string;
  avatar_src: string;
  email: string;
  id: string;
  channels: number[];
};

export type SidebarStateSlice = {
  current_tab: 'HOME' | 'DM' | 'ACTIVITY' | 'LATER';
};

export type HomeStateSlice = {
  channels: Channel[] | null;
  current_convo: CurrentConvo;
};

export type CurrentConvo = {
  messages: MessageData[];
  channel: Channel;
};

export type Channel = {
  id: number;
  name: string;
  type: 'public' | 'private';
};

export type DirectMessageItemData = {
  name: string;
  status: 'online' | 'offline';
};

export type MessageData = {
  id: number;
  uuid: string;
  timestamp: number;
  message: string;
};
