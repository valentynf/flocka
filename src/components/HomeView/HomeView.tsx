import HomeSideBar from '../HomeSidebar/HomeSideBar';
import styles from './HomeView.module.css';

import { SplitPane } from 'react-collapse-pane';

function HomeView() {
  return (
    <SplitPane split="vertical" collapse={false}>
      <HomeSideBar />
      <div className={styles['home-main']}></div>
    </SplitPane>
  );
}

export default HomeView;
