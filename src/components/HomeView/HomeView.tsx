import HomeSidebar from './HomeSidebar/HomeSidebar';
import styles from './HomeView.module.css';

function HomeView() {
  return (
    <div className={styles['home-view-container']}>
      <div className={styles['home-view']}>
        <div className={styles['home-sidebar']}>
          <HomeSidebar />
        </div>

        <div className={styles['home-main']}></div>
      </div>
    </div>
  );
}

export default HomeView;
