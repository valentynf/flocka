import { CollapsibleListDMessageItemDataType } from '../../types/appTypes';
import styles from './CollapsibleListDMessageItem.module.css';

type CollapsibleListDMessageItemPropsType = {
  data: CollapsibleListDMessageItemDataType;
};

function CollapsibleListDMessageItem({
  data,
}: CollapsibleListDMessageItemPropsType) {
  const { name, status } = data;
  console.log(name, status);
  return (
    <li className={styles['list-item-dm']}>
      {/* Add your custom icon */}
      {/* <CustomIconComponent /> */}
      <p className={styles['list-item-dm-name']}>{name}</p>
    </li>
  );
}

export default CollapsibleListDMessageItem;
