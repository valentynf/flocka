export type CollapsibleListChannelItemDataType = {
  name: string;
  type: 'channel-public' | 'channel-private';
};

export type CollapsibleListDMessageItemDataType = {
  name: string;
  status: 'online' | 'offline';
};

// new type for every type of channel/dm
// type channel, dm,
