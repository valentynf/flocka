import { useDispatch, useSelector } from 'react-redux';
import BellIcon from '../../../icons/AppLayout/AppSidebar/BellIcon';
import DirectMessagesIcon from '../../../icons/AppLayout/AppSidebar/DirectMessagesIcon';
import DotDotDotIcon from '../../../icons/AppLayout/AppSidebar/DotDotDotIcon';
import HomeIcon from '../../../icons/AppLayout/AppSidebar/HomeIcon';
import PlusIcon from '../../../icons/AppLayout/AppSidebar/PlusIcon';
import RibbonIcon from '../../../icons/AppLayout/AppSidebar/RibbonIcon';
import styles from './AppSidebar.module.css';
import UserImageWithStatusBig from './UserImageWithStatusBig/UserImageWithStatusBig';
import { AppDispatch, RootState } from '../../../types/appTypes';
import { setCurrentTab } from '../../../store/slices/sidebarSlice';

function AppSidebar() {
  const userData = useSelector((state: RootState) => state.auth.user_data);
  const currentView = useSelector(
    (state: RootState) => state.sidebar.current_tab
  );
  const dispatch: AppDispatch = useDispatch();

  const goHome = () => {
    dispatch(setCurrentTab('HOME'));
  };

  const goDirectMessages = () => {
    dispatch(setCurrentTab('DM'));
  };

  const goActivity = () => {
    dispatch(setCurrentTab('ACTIVITY'));
  };

  const goLater = () => {
    dispatch(setCurrentTab('LATER'));
  };

  return (
    <div className={styles['sidebar']}>
      <div className={styles['top-section']}>
        <div className={styles['logo-image']}>
          <img src="/src/assets/images/logo.png" />
        </div>
        <div
          onClick={goHome}
          className={`${styles['folder']} ${
            currentView == 'HOME' ? styles['folder-active'] : ''
          }`}
        >
          <div className={styles['icon']}>
            <HomeIcon />
          </div>
          <p className={styles['name']}>Home</p>
        </div>
        <div
          onClick={goDirectMessages}
          className={`${styles['folder']} ${
            currentView == 'DM' ? styles['folder-active'] : ''
          }`}
        >
          <div className={styles['icon']}>
            <DirectMessagesIcon />
          </div>
          <p className={styles['name']}>DMs</p>
        </div>
        <div
          onClick={goActivity}
          className={`${styles['folder']} ${
            currentView == 'ACTIVITY' ? styles['folder-active'] : ''
          }`}
        >
          <div className={styles['icon']}>
            <BellIcon />
          </div>
          <p className={styles['name']}>Activity</p>
        </div>
        <div
          onClick={goLater}
          className={`${styles['folder']} ${
            currentView == 'LATER' ? styles['folder-active'] : ''
          }`}
        >
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
          <UserImageWithStatusBig
            image_source={
              userData
                ? userData.avatar_src
                : '/src/assets/images/user-image.jpeg'
            }
            status={'online'}
          />
        </div>
      </div>
    </div>
  );
}

export default AppSidebar;
