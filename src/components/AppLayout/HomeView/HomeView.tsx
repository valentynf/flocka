import 'split-pane-react/esm/themes/default.css';
import HomeSidebar from './HomeSidebar/HomeSidebar';
import styles from './HomeView.module.css';
import useChannels from '../../../hooks/useChannels';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/appTypes';
import ConversationView from './ConversationView/ConversationView';
import { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';

function HomeView() {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );
  useChannels();

  const [sizes, setSizes] = useState<(number | string)[]>(['30%', '70%']);

  const customDividerRender = () => {
    return <div className={styles['divider']} />;
  };

  return (
    <div className={styles['home-view-container']}>
      <SplitPane
        className={styles['split-pane']}
        sizes={sizes}
        onChange={(sizes) => setSizes(sizes)}
        sashRender={customDividerRender}
      >
        <Pane minSize={300} className={styles['home-view']}>
          <HomeSidebar />
        </Pane>
        <Pane minSize={500} className={styles['home-main']}>
          {!Number.isNaN(currentConvoData.channel.id) && <ConversationView />}
        </Pane>
      </SplitPane>
    </div>
  );
}

export default HomeView;
