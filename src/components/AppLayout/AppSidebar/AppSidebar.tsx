import BellIcon from '../../../icons/AppLayout/AppSidebar/BellIcon';
import DirectMessagesIcon from '../../../icons/AppLayout/AppSidebar/DirectMessagesIcon';
import DotDotDotIcon from '../../../icons/AppLayout/AppSidebar/DotDotDotIcon';
import HomeIcon from '../../../icons/AppLayout/AppSidebar/HomeIcon';
import PlusIcon from '../../../icons/AppLayout/AppSidebar/PlusIcon';
import RibbonIcon from '../../../icons/AppLayout/AppSidebar/RibbonIcon';
import styles from './AppSidebar.module.css';
import UserImageWithStatusBig from './UserImageWithStatusBig/UserImageWithStatusBig';

function AppSidebar() {
  return (
    <div className={styles['sidebar']}>
      <div className={styles['top-section']}>
        <div className={styles['logo-image']}>
          <img src="/src/assets/images/logo.png" />
        </div>
        <div className={styles['folder']}>
          <div className={styles['icon']}>
            <HomeIcon />
          </div>
          <p className={styles['name']}>Home</p>
        </div>
        <div className={styles['folder']}>
          <div className={styles['icon']}>
            <DirectMessagesIcon />
          </div>
          <p className={styles['name']}>DMs</p>
        </div>
        <div className={styles['folder']}>
          <div className={styles['icon']}>
            <BellIcon />
          </div>
          <p className={styles['name']}>Activity</p>
        </div>
        <div className={styles['folder']}>
          <div className={styles['icon']}>
            <RibbonIcon />
          </div>
          <p className={styles['name']}>Later</p>
        </div>
        <div className={styles['folder']}>
          <div className={styles['icon']}>
            <DotDotDotIcon />
          </div>
          <p className={styles['name']}>More</p>
        </div>
      </div>
      <div className={styles['bottom-section']}>
        <div className={styles['folder']}>
          <div className={styles['icon-create-new']}>
            <PlusIcon />
          </div>
        </div>
        <div className={styles['user-image']}>
          <UserImageWithStatusBig status={'offline'} />
        </div>
      </div>
    </div>
  );
}

export default AppSidebar;
