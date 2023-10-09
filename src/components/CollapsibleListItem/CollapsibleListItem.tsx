type CollapsibleListItemPropsType = {
  name: string;
};

//update item to have an icon and name for now - icon is either a # or a lock

function CollapsibleListItem({ name }: CollapsibleListItemPropsType) {
  return <li>{name}</li>;
}

export default CollapsibleListItem;
