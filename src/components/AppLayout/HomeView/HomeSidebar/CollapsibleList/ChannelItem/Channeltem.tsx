import { useDispatch, useSelector } from 'react-redux';
import PrivateChannelIcon from '../../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import PublicChannelIcon from '../../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import {
  AppDispatch,
  Channel,
  RootState,
} from '../../../../../../types/appTypes';
import styles from './ChannelItem.module.css';
import { fetchChannelConvo } from '../../../../../../store/slices/homeSlice';

export type ChannelItemProps = {
  data: Channel;
};

function ChannelItem({ data }: ChannelItemProps) {
  const currentConvoId = useSelector(
    (state: RootState) => state.home.currentConvo?.id
  );

  const dispatch: AppDispatch = useDispatch();
  const handleChannelClick = () => {
    dispatch(fetchChannelConvo(id));
  };

  const { name, type, id } = data;
  const icon =
    type === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;
  return (
    <li
      onClick={handleChannelClick}
      className={
        currentConvoId == id
          ? styles['list-item-channel-active']
          : styles['list-item-channel']
      }
    >
      {icon}
      <p className={styles['list-item-channel-name']}>{name}</p>
    </li>
  );
}

export default ChannelItem;
