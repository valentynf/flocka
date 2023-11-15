import { useDispatch, useSelector } from 'react-redux';
import BellIcon from '../../../icons/AppLayout/AppSidebar/BellIcon';
import DirectMessagesIcon from '../../../icons/AppLayout/AppSidebar/DirectMessagesIcon';
import DotDotDotIcon from '../../../icons/AppLayout/AppSidebar/DotDotDotIcon';
import HomeIcon from '../../../icons/AppLayout/AppSidebar/HomeIcon';
import PlusIcon from '../../../icons/AppLayout/AppSidebar/PlusIcon';
import RibbonIcon from '../../../icons/AppLayout/AppSidebar/RibbonIcon';
import styles from './AppSidebar.module.css';
import UserImageWithStatusBig from './UserImageWithStatusBig/UserImageWithStatusBig';
import { AppDispatch, RootState, View } from '../../../types/appTypes';
import { setCurrentTab } from '../../../store/slices/sidebarSlice';
import FlockaIcon from '../../../icons/LoginView/FlockaIcon';
import { useState } from 'react';
import AddPopup from './AddPopup/AddPopup';

function AppSidebar() {
  const userData = useSelector((state: RootState) => state.auth.user_data);
  const currentView = useSelector(
    (state: RootState) => state.sidebar.current_tab
  );
  const dispatch: AppDispatch = useDispatch();
  const [isAddMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const getViewSwitchStyles = (currentView: View, anotherView: View): string =>
    currentView === anotherView ? styles['folder-active'] : styles['folder'];

  const handleAddNewClick = () => {
    setIsMenuOpen(() => !isAddMenuOpen);
  };

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
        <a href="https://github.com/valentynf/flocka" target="_blank">
          <div className={styles['logo']}>
            <FlockaIcon />
          </div>
        </a>
        <div
          onClick={goHome}
          className={getViewSwitchStyles(currentView, 'HOME')}
        >
          <div className={styles['icon']}>
            <HomeIcon />
          </div>
          <p className={styles['name']}>Home</p>
        </div>
        <div
          onClick={goDirectMessages}
          className={getViewSwitchStyles(currentView, 'DM')}
        >
          <div className={styles['icon']}>
            <DirectMessagesIcon />
          </div>
          <p className={styles['name']}>DMs</p>
        </div>
        <div
          onClick={goActivity}
          className={getViewSwitchStyles(currentView, 'ACTIVITY')}
        >
          <div className={styles['icon']}>
            <BellIcon />
          </div>
          <p className={styles['name']}>Activity</p>
        </div>
        <div
          onClick={goLater}
          className={getViewSwitchStyles(currentView, 'LATER')}
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
          <div
            onClick={handleAddNewClick}
            className={`${styles['icon-create-new']} ${
              isAddMenuOpen ? styles['active'] : ''
            }`}
          >
            <PlusIcon />
          </div>
        </div>
        {isAddMenuOpen && <AddPopup />}
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

// ${styles['create-new-active']}
export default AppSidebar;
