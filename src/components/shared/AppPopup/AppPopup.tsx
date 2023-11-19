import { ReactNode } from 'react';
import styles from './AppPopup.module.css';
import PopupOverlay from './PopupOverlay/PopupOverlay';
import PlusIcon from '../../../icons/AppLayout/AppSidebar/PlusIcon';

type AppPopupProps = {
  name: string;
  hidePopup: () => void;
  icon?: ReactNode;
  children: ReactNode;
};

function AppPopup({ hidePopup, children, name, icon }: AppPopupProps) {
  return (
    <PopupOverlay onClick={hidePopup}>
      <div className={styles['app-popup']}>
        <div className={styles['modal-header']}>
          <div className={styles['name']}>
            <div className={styles['icon']}>{icon}</div>
            <h3 className={styles['text']}>{name}</h3>
          </div>
          <button onClick={hidePopup} className={styles['close-button']}>
            <PlusIcon />
          </button>
        </div>
        <div className={'modal-content'}>{children}</div>
      </div>
    </PopupOverlay>
  );
}

export default AppPopup;
