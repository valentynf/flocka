import HomeSideBar from '../HomeSidebar/HomeSideBar';
import styles from './HomeView.module.css';

import { SplitPane } from 'react-collapse-pane';

function HomeView() {
  return (
    <div className={styles['home-view-container']}>
      <div className={styles['home-view']}>
        <SplitPane split="vertical" collapse={false} minSizes={[240, 400]}>
          <div className={styles['home-sidebar']}>
            <HomeSideBar />
          </div>

          <div className={styles['home-main']}></div>
        </SplitPane>
      </div>
    </div>
  );
}

export default HomeView;
