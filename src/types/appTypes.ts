// collapsibleList types

export type CollapsibleListPropType = {
  data: CollapsibleListDataType;
};

export type CollapsibleListDataType = {
  name: string;
  children: CollapsibleListItemDataType[];
};

// colapsibleListItem types

export type CollapsibleListItemPropsType = {
  data: CollapsibleListItemDataType;
};

export type CollapsibleListItemDataType = {
  name: string;
  type: 'channel-public' | 'channel-private';
};
