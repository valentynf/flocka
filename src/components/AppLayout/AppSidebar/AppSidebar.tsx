import { useDispatch, useSelector } from 'react-redux';
import BellIcon from '../../../icons/AppLayout/AppSidebar/BellIcon';
import DirectMessagesIcon from '../../../icons/AppLayout/AppSidebar/DirectMessagesIcon';
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
import NewChannelPopup from './NewChannelPopup/NewChannelPopup';

function AppSidebar() {
  const userData = useSelector((state: RootState) => state.auth.user_data);
  const currentView = useSelector(
    (state: RootState) => state.sidebar.current_tab
  );
  const dispatch: AppDispatch = useDispatch();
  const [isAddMenuOpen, setIsAddMenuOpen] = useState<boolean>(false);
  const [isNewChannelOpen, setIsNewChannelOpen] = useState<boolean>(false);

  const getViewSwitchStyles = (currentView: View, anotherView: View): string =>
    currentView === anotherView ? styles['folder-active'] : styles['folder'];

  const toggleAddPopup = () => {
    setIsAddMenuOpen((oldValue) => !oldValue);
  };

  const toggleNewChannelPopup = () => {
    setIsNewChannelOpen(() => !isNewChannelOpen);
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
      {isNewChannelOpen && (
        <NewChannelPopup hidePopup={toggleNewChannelPopup} />
      )}
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
      </div>
      <div className={styles['bottom-section']}>
        <div className={styles['folder']}>
          <div
            onClick={toggleAddPopup}
            className={`${styles['icon-create-new']} ${
              isAddMenuOpen ? styles['active'] : ''
            }`}
          >
            <PlusIcon />
          </div>
        </div>
        {isAddMenuOpen && (
          <AddPopup
            hidePopup={toggleAddPopup}
            showAddChannel={toggleNewChannelPopup}
          />
        )}
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
