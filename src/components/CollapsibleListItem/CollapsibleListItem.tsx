import PrivateChannelIcon from '../../icons/PrivateChannelIcon';
import PublicChannelIcon from '../../icons/PubilcChannelIcon';
import styles from './CollapsibleListItem.module.css';
import { CollapsibleListItemPropsType } from '../../types/appTypes';

function CollapsibleListItem({ data }: CollapsibleListItemPropsType) {
  const { name, type } = data;
  const icon =
    type === 'channel-public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;
  return (
    <div className={styles['list-item']}>
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default CollapsibleListItem;
