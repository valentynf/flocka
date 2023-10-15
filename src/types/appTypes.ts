export type ChannelItemDataType = {
  name: string;
  type: 'channel-public' | 'channel-private';
};

export type DirectMessageItemDataType = {
  name: string;
  status: 'online' | 'offline';
};
