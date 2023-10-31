import AppSidebar from './AppSidebar/AppSidebar';
import AppTopBar from './AppTopbar/AppTopbar';
import HomeView from './HomeView/HomeView';
import styles from './AppLayout.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/appTypes';
import PlaceholderView from './PlaceholderView/PlaceholderView';

function AppLayout() {
  const currentTab = useSelector(
    (state: RootState) => state.sidebar.current_tab
  );

  return (
    <div className={styles['main-view']}>
      <div>
        <div className={styles['main-topbar']}>
          <AppTopBar />
        </div>
        <div className={styles['main-container']}>
          <div className={styles['main-sidebar']}>
            <AppSidebar />
          </div>
          <div className={styles['main-content']}>
            {currentTab === 'HOME' ? <HomeView /> : <PlaceholderView />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
