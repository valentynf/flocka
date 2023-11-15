import { useEffect, useRef, useState } from 'react';
import styles from './AddPopup.module.css';
import NewMessageIcon from '../../../../icons/AppLayout/HomeView/HomeSidebar/SidebarHeader/NewMessageIcon';
import PublicChannelIcon from '../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import useClickedOutsideDiv from '../../../../hooks/useClickedOutsideDiv';

type AddPopupProps = {
  hidePopup: () => void;
};

function AddPopup({ hidePopup }: AddPopupProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const popupDivRef = useRef<HTMLDivElement | null>(null);

  useClickedOutsideDiv(popupDivRef, hidePopup);

  //this is for animation purposes only
  useEffect(() => setIsActive(true), []);

  return (
    <div
      className={`${styles['add-popup']} ${isActive ? styles['active'] : ''}`}
    >
      <div ref={popupDivRef} className={styles['popup-header']}>
        <span>Create</span>
      </div>
      <div className={styles['popup-actions']}>
        <div className={styles['action']}>
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
  );
}

export default AddPopup;
