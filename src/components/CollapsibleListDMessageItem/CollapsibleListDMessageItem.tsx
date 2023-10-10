import AvatarWithStatus from '../../icons/AvatarWithStatus/AvatarWithStatus';
import { CollapsibleListDMessageItemDataType } from '../../types/appTypes';
import styles from './CollapsibleListDMessageItem.module.css';

type CollapsibleListDMessageItemPropsType = {
  data: CollapsibleListDMessageItemDataType;
};

function CollapsibleListDMessageItem({
  data,
}: CollapsibleListDMessageItemPropsType) {
  const { name, status } = data;
  return (
    <li className={styles['list-item-dm']}>
      <AvatarWithStatus status={status} />
      <p className={styles['list-item-dm-name']}>{name}</p>
    </li>
  );
}

export default CollapsibleListDMessageItem;
