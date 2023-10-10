import PrivateChannelIcon from '../../icons/PrivateChannelIcon';
import PublicChannelIcon from '../../icons/PubilcChannelIcon';
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
    <li className={styles['list-item']}>
      {icon}
      <p>{name}</p>
    </li>
  );
}

export default CollapsibleListChannelItem;
