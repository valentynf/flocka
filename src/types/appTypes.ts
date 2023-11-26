import { Session } from '@supabase/supabase-js';
import store from '../store/store';

// infering the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppDataStateSlice = {
  users_data: UsersDataRecord;
};

export type UsersData = {
  id: string;
  name: string;
  avatar_src: string;
};

export type UsersDataRecord = {
  [key: string]: {
    name: string;
    avatar_src: string;
  };
};

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

export type View = 'HOME' | 'DM' | 'ACTIVITY' | 'LATER';

export type SidebarStateSlice = {
  current_tab: View;
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
  participants: string[];
};

export type DirectMessageItemData = {
  name: string;
  status: 'online' | 'offline';
};

export type MessageData = {
  id: string;
  senderId: string;
  timestamp: number;
  message: string;
};

export type FullMessageData = {
  id: string;
  name: string;
  timestamp: number;
  message: string;
  avatar_src: string;
};

export type MessagePayload = {
  channelId: number;
  message: MessageData;
};

export type UserPayload = {
  id: string;
  name: string;
  email: string;
  avatar_src: string;
};

export type NewChannelPayload = {
  channel_name: string;
  user_id: string;
};

export type ConversationChangesResponsePayload = {
  schema: string;
  table: string;
  commit_timestamp: string;
  eventType: string;
  new: ChannelsTableRecord;
  old: ChannelsTableRecord;
  errors: null;
};

export type ChannelsTableRecord = {
  created_at: Date;
  id: number;
  messages: MessageData[];
  name: string;
  participants: string[];
  type: string;
};
