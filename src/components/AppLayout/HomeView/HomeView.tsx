import useHomeData from '../../../hooks/useHomeData';
import HomeSidebar from './HomeSidebar/HomeSidebar';
import styles from './HomeView.module.css';
import ConvoView from './ConvoView/ConvoView';

function HomeView() {
  useHomeData();

  return (
    <div className={styles['home-view-container']}>
      <div className={styles['home-view']}>
        <div>
          <HomeSidebar />
        </div>
        <div className={styles['home-main']}>
          <ConvoView />
        </div>
      </div>
    </div>
  );
}

export default HomeView;
