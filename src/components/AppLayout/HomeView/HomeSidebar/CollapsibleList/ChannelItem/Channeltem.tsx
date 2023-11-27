import { useDispatch, useSelector } from 'react-redux';
import PrivateChannelIcon from '../../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import PublicChannelIcon from '../../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import {
  AppDispatch,
  Channel,
  RootState,
} from '../../../../../../types/appTypes';
import styles from './ChannelItem.module.css';
import { setCurrentChannel } from '../../../../../../store/slices/homeSlice';

export type ChannelItemProps = {
  data: Channel;
};

function ChannelItem({ data }: ChannelItemProps) {
  const { name, type, id } = data;
  const icon =
    type === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;

  const currentConvo = useSelector(
    (state: RootState) => state.home.current_convo
  );
  const isCurrentConvo = currentConvo.channel.id === id;

  const dispatch: AppDispatch = useDispatch();
  const handleChannelClick = () => {
    //this triggers a messages data render in convoview
    dispatch(setCurrentChannel(data));
  };

  return (
    <li
      onClick={isCurrentConvo ? undefined : handleChannelClick}
      className={
        isCurrentConvo
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
