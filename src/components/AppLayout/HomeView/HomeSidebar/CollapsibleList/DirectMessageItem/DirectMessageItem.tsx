import { DirectMessageItemDataType } from '../../../../../../types/appTypes';
import styles from './DirectMessageItem.module.css';
import UserImageWithStatusSmall from '../UserImageWithStatusSmall/UserImageWithStatusSmall';

type DirectMessageItemPropsType = {
  data: DirectMessageItemDataType;
};

function DirectMessageItem({ data }: DirectMessageItemPropsType) {
  const { name, status } = data;
  return (
    <li className={styles['list-item-dm']}>
      <UserImageWithStatusSmall status={status} />
      <p className={styles['list-item-dm-name']}>{name}</p>
    </li>
  );
}

export default DirectMessageItem;
