import { useSelector } from 'react-redux';
import AppPopup from '../../../../shared/AppPopup/AppPopup';
import styles from './ConvoMenu.module.css';
import { RootState } from '../../../../../types/appTypes';
import PublicChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import PrivateChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';

type ConvoMenuProps = {
  hidePopup: () => void;
};

function ConvoMenu({ hidePopup }: ConvoMenuProps) {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );

  const convoName = currentConvoData.channel.name;
  const channelType = currentConvoData.channel.type;
  const icon =
    channelType === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;

  return (
    <AppPopup icon={icon} name={convoName} hidePopup={hidePopup}>
      <div className={styles['convo-menu']}></div>
    </AppPopup>
  );
}

export default ConvoMenu;
