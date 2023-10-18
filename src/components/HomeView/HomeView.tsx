import HomeSidebar from './HomeSidebar/HomeSidebar';
import styles from './HomeView.module.css';
import MessagesView from './MessagesView/MessagesView';

function HomeView() {
  return (
    <div className={styles['home-view-container']}>
      <div className={styles['home-view']}>
        <div className={styles['home-sidebar']}>
          <HomeSidebar />
        </div>

        <div className={styles['home-main']}>
          <MessagesView />
        </div>
      </div>
    </div>
  );
}

export default HomeView;
