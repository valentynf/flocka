import PrivateChannelIcon from '../../icons/CollapsibleListIcons/PrivateChannelIcon';
import PublicChannelIcon from '../../icons/CollapsibleListIcons/PubilcChannelIcon';
import { CollapsibleListChannelItemDataType } from '../../types/appTypes';
import styles from './CollapsibleListChannelItem.module.css';

export type CollapsibleListChannelItemPropsType = {
  data: CollapsibleListChannelItemDataType;
};

function CollapsibleListChannelItem({
  data,
}: CollapsibleListChannelItemPropsType) {
  const { name, type } = data;
  const icon =
    type === 'channel-public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;
  return (
    <li className={styles['list-item-channel']}>
      {icon}
      <p className={styles['list-item-channel-name']}>{name}</p>
    </li>
  );
}

export default CollapsibleListChannelItem;
