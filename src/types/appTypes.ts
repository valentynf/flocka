export type ChannelItemDataType = {
  name: string;
  type: 'channel-public' | 'channel-private';
};

export type DirectMessageItemDataType = {
  name: string;
  status: 'online' | 'offline';
};

export type MessageDataType = {
  username: string;
  timestamp: string;
  message: string;
};
