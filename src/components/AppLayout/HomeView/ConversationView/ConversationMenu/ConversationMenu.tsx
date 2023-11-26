import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../types/appTypes';
import AppPopup from '../../../../shared/AppPopup/AppPopup';
import styles from './ConversationMenu.module.css';
import AboutTab from './AboutTab/AboutTab';
import MembersTab from './MembersTab/MembersTab';
import SettingsTab from './SettingsTab/SettingsTab';
import { getChannelIcon } from '../../../../../utils/helper';

type ConversationMenuTab = 'ABOUT' | 'MEMBERS' | 'SETTINGS';

type ConversationMenuProps = {
  hidePopup: () => void;
  firstTab: ConversationMenuTab;
};

function ConversationMenu({ hidePopup, firstTab }: ConversationMenuProps) {
  const { channel } = useSelector(
    (state: RootState) => state.home.current_convo
  );
  const { name, type } = channel;
  const icon = getChannelIcon(type);
  const [currentTab, setCurrentTab] = useState<ConversationMenuTab>(firstTab);

  const switchTab = (tabName: ConversationMenuTab) => {
    setCurrentTab(tabName);
  };

  const renderTabButton = (tab: ConversationMenuTab) => (
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

export default ConversationMenu;
