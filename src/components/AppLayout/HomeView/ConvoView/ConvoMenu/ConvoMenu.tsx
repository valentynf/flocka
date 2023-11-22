import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../types/appTypes';
import AppPopup from '../../../../shared/AppPopup/AppPopup';
import styles from './ConvoMenu.module.css';
import PublicChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import PrivateChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import AboutTab from './AboutTab/AboutTab';
import MembersTab from './MembersTab/MembersTab';
import SettingsTab from './SettingsTab/SettingsTab';

type ConvoMenuTab = 'ABOUT' | 'MEMBERS' | 'SETTINGS';

type ConvoMenuProps = {
  hidePopup: () => void;
  firstTab: ConvoMenuTab;
};

function ConvoMenu({ hidePopup, firstTab }: ConvoMenuProps) {
  const { channel } = useSelector(
    (state: RootState) => state.home.current_convo
  );
  const { name, type } = channel;
  const icon =
    type === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;
  const [currentTab, setCurrentTab] = useState<ConvoMenuTab>(firstTab);

  const switchTab = (tabName: ConvoMenuTab) => {
    setCurrentTab(tabName);
  };

  const renderTabButton = (tab: ConvoMenuTab) => (
    <button
      onClick={() => switchTab(tab)}
      className={`${styles['menu-button']} ${
        currentTab === tab ? styles['active-tab'] : ''
      }`}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1).toLowerCase()}
      {tab === 'MEMBERS' && (
        <span className={styles['members-count']}>
          {channel.participants.length}
        </span>
      )}
    </button>
  );

  return (
    <AppPopup icon={icon} name={name} hidePopup={hidePopup}>
      <div className={styles['convo-menu']}>
        <div className={styles['tabs-menu']}>
          {renderTabButton('ABOUT')}
          {renderTabButton('MEMBERS')}
          {renderTabButton('SETTINGS')}
        </div>
        <div className={styles['content']}>
          {currentTab === 'ABOUT' && <AboutTab />}
          {currentTab === 'MEMBERS' && <MembersTab />}
          {currentTab === 'SETTINGS' && <SettingsTab />}
        </div>
      </div>
    </AppPopup>
  );
}

export default ConvoMenu;
