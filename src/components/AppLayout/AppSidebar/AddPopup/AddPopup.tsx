import { useEffect, useState } from 'react';
import styles from './AddPopup.module.css';
import NewMessageIcon from '../../../../icons/AppLayout/HomeView/HomeSidebar/SidebarHeader/NewMessageIcon';
import PublicChannelIcon from '../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import PopupOverlay from '../../../shared/PopupOverlay/PopupOverlay';

type AddPopupProps = {
  hidePopup: () => void;
  showAddChannel: () => void;
};

function AddPopup({ hidePopup, showAddChannel }: AddPopupProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  //this is for animation purposes only
  useEffect(() => setIsActive(true), []);

  const handleNewChannelClick = () => {
    showAddChannel();
  };

  return (
    <PopupOverlay transparent={true} onClick={hidePopup}>
      <div
        className={`${styles['add-popup']} ${isActive ? styles['active'] : ''}`}
      >
        <div className={styles['popup-header']}>
          <span>Create</span>
        </div>
        <div className={styles['popup-actions']}>
          <div onClick={handleNewChannelClick} className={styles['action']}>
            <div className={`${styles['icon']} ${styles['grey']}`}>
              <PublicChannelIcon />
            </div>
            <div className={styles['action-info']}>
              <span className={styles['action-name']}>Channel</span>
              <span className={styles['action-description']}>
                Start a group conversation by topic
              </span>
            </div>
          </div>
          <div className={styles['action']}>
            <div className={`${styles['icon']} ${styles['purple']}`}>
              <NewMessageIcon />
            </div>
            <div className={styles['action-info']}>
              <span className={styles['action-name']}>Message</span>
              <span className={styles['action-description']}>
                Start a conversation in a DM or channel
              </span>
            </div>
          </div>
        </div>
      </div>
    </PopupOverlay>
  );
}

export default AddPopup;
