type CollapsibleListItemPropsType = {
  name: string;
};

function CollapsibleListItem({ name }: CollapsibleListItemPropsType) {
  return <li>{name}</li>;
}

export default CollapsibleListItem;
