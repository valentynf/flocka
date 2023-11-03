import HomeSidebar from './HomeSidebar/HomeSidebar';
import styles from './HomeView.module.css';
import ConvoView from './ConvoView/ConvoView';
import useChannels from '../../../hooks/useChannels';

function HomeView() {
  useChannels();

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
