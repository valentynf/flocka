import { useSelector } from 'react-redux';
import AppPopup from '../../../../shared/AppPopup/AppPopup';
import styles from './ConvoMenu.module.css';
import { RootState } from '../../../../../types/appTypes';
import PublicChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import PrivateChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import { useState } from 'react';

type ConvoMenuTabs = 'ABOUT' | 'MEMBERS' | 'SETTINGS';

type ConvoMenuProps = {
  hidePopup: () => void;
  firstTab: ConvoMenuTabs;
};

function ConvoMenu({ hidePopup, firstTab }: ConvoMenuProps) {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );

  const [currentTab, setCurrentTab] = useState<ConvoMenuTabs>(firstTab);

  const convoName = currentConvoData.channel.name;
  const channelType = currentConvoData.channel.type;
  const icon =
    channelType === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;

  const switchTab = (tabName: ConvoMenuTabs) => {
    setCurrentTab(tabName);
  };

  return (
    <AppPopup icon={icon} name={convoName} hidePopup={hidePopup}>
      <div className={styles['convo-menu']}>
        <div className={styles['tabs-menu']}>
          <button
            onClick={() => switchTab('ABOUT')}
            className={`${styles['menu-button']} ${
              currentTab === 'ABOUT' ? styles['active-tab'] : ''
            }`}
          >
            About
          </button>
          <button
            onClick={() => switchTab('MEMBERS')}
            className={`${styles['menu-button']} ${
              currentTab === 'MEMBERS' ? styles['active-tab'] : ''
            }`}
          >
            Members
            <span className={styles['members-count']}>
              {currentConvoData.channel.participants.length}
            </span>
          </button>
          <button
            onClick={() => switchTab('SETTINGS')}
            className={`${styles['menu-button']} ${
              currentTab === 'SETTINGS' ? styles['active-tab'] : ''
            }`}
          >
            Settings
          </button>
        </div>
        <div className={styles['content']}>
          <div className={styles['about-tab']}></div>
          <div className={styles['members-tab']}></div>
          <div className={styles['settings-tab']}></div>
        </div>
      </div>
    </AppPopup>
  );
}

export default ConvoMenu;
