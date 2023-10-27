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
