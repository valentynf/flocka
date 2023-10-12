import HomeSideBar from '../HomeSidebar/HomeSideBar';
import styles from './HomeView.module.css';

function HomeView() {
  return (
    <div className={styles['home-view']}>
      <HomeSideBar />
      <div className={styles['home-main']}></div>
    </div>
  );
}

export default HomeView;
