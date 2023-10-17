import PrivateChannelIcon from '../../../../../icons/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import PublicChannelIcon from '../../../../../icons/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import { ChannelItemDataType } from '../../../../../types/appTypes';
import styles from './ChannelItem.module.css';

export type ChannelItemPropsType = {
  data: ChannelItemDataType;
};

function ChannelItem({ data }: ChannelItemPropsType) {
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
