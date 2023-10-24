import AppSidebar from '../AppSidebar/AppSidebar';
import AppTopBar from '../AppTopbar/AppTopbar';
import HomeView from '../HomeView/HomeView';
import styles from './AppLayout.module.css';

function AppLayout() {
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
            <HomeView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
