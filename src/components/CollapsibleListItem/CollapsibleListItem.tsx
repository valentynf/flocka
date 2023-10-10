import PrivateChannelIcon from '../../icons/PrivateChannelIcon';
import PublicChannelIcon from '../../icons/PubilcChannelIcon';
import { CollapsibleListItemDataType } from '../../types/appTypes';
import styles from './CollapsibleListItem.module.css';

export type CollapsibleListItemPropsType = {
  data: CollapsibleListItemDataType;
};

function CollapsibleListItem({ data }: CollapsibleListItemPropsType) {
  const { name, type } = data;
  const icon =
    type === 'channel-public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;
  return (
    //replace div with li
    <div className={styles['list-item']}>
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default CollapsibleListItem;
