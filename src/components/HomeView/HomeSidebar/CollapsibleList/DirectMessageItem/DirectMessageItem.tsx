import AvatarWithStatus from '../AvatarWithStatus/AvatarWithStatus';
import { DirectMessageItemDataType } from '../../../../../types/appTypes';
import styles from './DirectMessageItem.module.css';

type DirectMessageItemPropsType = {
  data: DirectMessageItemDataType;
};

function DirectMessageItem({ data }: DirectMessageItemPropsType) {
  const { name, status } = data;
  return (
    <li className={styles['list-item-dm']}>
      <AvatarWithStatus backgroundColor="#161616" status={status} />
      <p className={styles['list-item-dm-name']}>{name}</p>
    </li>
  );
}

export default DirectMessageItem;
