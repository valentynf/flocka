import { DirectMessageItemData } from '../../../../../../types/appTypes';
import styles from './DirectMessageItem.module.css';
import UserImageWithStatusSmall from '../UserImageWithStatusSmall/UserImageWithStatusSmall';

type DirectMessageItemProps = {
  data: DirectMessageItemData;
};

function DirectMessageItem({ data }: DirectMessageItemProps) {
  const { name, status } = data;
  return (
    <li className={styles['list-item-dm']}>
      <UserImageWithStatusSmall status={status} />
      <p className={styles['list-item-dm-name']}>{name}</p>
    </li>
  );
}

export default DirectMessageItem;
