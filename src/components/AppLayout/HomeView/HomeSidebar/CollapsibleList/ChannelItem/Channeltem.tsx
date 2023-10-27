import PrivateChannelIcon from '../../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import PublicChannelIcon from '../../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import { ChannelItemData } from '../../../../../../types/appTypes';
import styles from './ChannelItem.module.css';

export type ChannelItemProps = {
  data: ChannelItemData;
};

function ChannelItem({ data }: ChannelItemProps) {
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

export default ChannelItem;
