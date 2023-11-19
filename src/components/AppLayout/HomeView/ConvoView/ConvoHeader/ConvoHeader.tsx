import { useState } from 'react';
import PrivateChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import PublicChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import styles from './ConvoHeader.module.css';
import ParticipantsButton from './ParticipantsButton/ParticipantsButton';
import ConvoMenu from '../ConvoMenu/ConvoMenu';

type ConvoHeaderProps = {
  type: 'public' | 'private';
  name: string;
};

function ConvoHeader({ name, type }: ConvoHeaderProps) {
  const [isConvoMenuOpen, setIsConvoMenuOpened] = useState<boolean>(false);

  const toggleConvoMenu = () => {
    setIsConvoMenuOpened((oldValue) => !oldValue);
  };

  const icon =
    type === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;

  return (
    <div className={styles['header-container']}>
      {isConvoMenuOpen && <ConvoMenu hidePopup={toggleConvoMenu} />}
      <div className={styles['channel-info']}>
        <div className={styles['icon']}>{icon}</div>
        <p className={styles['name']}>{name}</p>
      </div>
      <ParticipantsButton onClick={toggleConvoMenu} />
    </div>
  );
}

export default ConvoHeader;
