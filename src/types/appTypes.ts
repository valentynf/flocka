// collapsibleList types

export type CollapsibleListDataType = {
  name: string;
  children: CollapsibleListItemDataType[];
};

// colapsibleListItem types

export type CollapsibleListItemDataType = {
  name: string;
  type: 'channel-public' | 'channel-private';
};

// new type for every type of channel/dm
// type channel, dm,
