import { useState } from 'react';
import PrivateChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import PublicChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import styles from './ConversationHeader.module.css';
import ParticipantsButton from './ParticipantsButton/ParticipantsButton';
import ConversationMenu from '../ConversationMenu/ConversationMenu';

type ConversationHeaderProps = {
  type: 'public' | 'private';
  name: string;
};

function ConversationHeader({ name, type }: ConversationHeaderProps) {
  const [isConvoMenuOpen, setIsConvoMenuOpened] = useState<boolean>(false);

  const toggleConvoMenu = () => {
    setIsConvoMenuOpened((oldValue) => !oldValue);
  };

  const icon =
    type === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;

  return (
    <div className={styles['header-container']}>
      {isConvoMenuOpen && (
        <ConversationMenu firstTab={'MEMBERS'} hidePopup={toggleConvoMenu} />
      )}
      <div className={styles['channel-info']}>
        <div className={styles['icon']}>{icon}</div>
        <p className={styles['name']}>{name}</p>
      </div>
      <ParticipantsButton onClick={toggleConvoMenu} />
    </div>
  );
}

export default ConversationHeader;
