import { Session } from '@supabase/supabase-js';
import store from '../store/store';

// infering the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Channel = {
  id: number;
  name: string;
  type: 'public' | 'private';
};

export type DirectMessageItemData = {
  name: string;
  status: 'online' | 'offline';
};

export type Message = {
  username: string;
  timestamp: string;
  message: string;
};

export type UserData = {
  name: string;
  avatar_src: string;
  email: string;
  id: string;
  channels: number[];
};

export type AuthStateSlice = {
  user_data: UserData | null;
  session: Session | null;
};

export type SidebarStateSlice = {
  current_tab: 'HOME' | 'DM' | 'ACTIVITY' | 'LATER';
};

export type HomeStateSlice = {
  channels: Channel[] | null;
  // currentConvo: CurrentConvo;
};

// export type CurrentConvo = {
//   id: number;
//   name: string;
//   messages: Message[];
//   type: 'channel-public' | 'channel-private';
// };
